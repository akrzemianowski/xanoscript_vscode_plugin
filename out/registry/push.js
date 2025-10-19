"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.push = exports.setPushing = exports.isPushing = void 0;
const vscode = require("vscode");
const registry_1 = require("./registry");
const types_1 = require("./types");
const changesTreeDataProvider_1 = require("../view/changes/changesTreeDataProvider");
const login_1 = require("../commands/login");
const pull_1 = require("./pull");
const pushRegistryRecord_1 = require("./pushRegistryRecord");
const stageAllRecords_1 = require("../commands/stageAllRecords");
let pushing = false;
function isPushing() {
    return pushing;
}
exports.isPushing = isPushing;
function setPushing(value) {
    pushing = value;
}
exports.setPushing = setPushing;
// There is a preferred order to pushing updates
// a table has no dependencies while an API endpoint
// has many (table, function and api group)
const PUSH_ORDER = [
    types_1.XanoObjectType.TABLE,
    types_1.XanoObjectType.FUNCTION,
    types_1.XanoObjectType.TABLE_TRIGGER,
    types_1.XanoObjectType.TASK,
    types_1.XanoObjectType.TOOL,
    types_1.XanoObjectType.API_GROUP,
    types_1.XanoObjectType.API_ENDPOINT,
    types_1.XanoObjectType.WORKFLOW_TEST,
    types_1.XanoObjectType.AGENT,
    types_1.XanoObjectType.AGENT_TRIGGER,
    types_1.XanoObjectType.MCP_SERVER,
    types_1.XanoObjectType.MCP_SERVER_TRIGGER,
    types_1.XanoObjectType.ADD_ON,
    types_1.XanoObjectType.MIDDLEWARE,
    types_1.XanoObjectType.REALTIME_CHANNEL,
    types_1.XanoObjectType.REALTIME_TRIGGER,
];
function push(staged) {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, login_1.assertUserIsAuthenticated)();
        const results = {
            success: [],
            failed: [],
        };
        if (isPushing()) {
            vscode.window.showWarningMessage("A push operation is already in progress. Please wait until it completes.");
            return results;
        }
        if ((0, pull_1.isPulling)()) {
            vscode.window.showErrorMessage("Cannot push changes while pulling. Please wait until the pull is complete.");
            return results;
        }
        return new Promise((resolve) => {
            vscode.window.withProgress({
                location: vscode.ProgressLocation.Notification,
                title: "Pushing changes to Xano",
                cancellable: false,
            }, (progress) => __awaiter(this, void 0, void 0, function* () {
                let registry = yield (0, registry_1.getRegistry)();
                const retryList = [];
                // we provide staged records when we retry a push after a failure
                if (!staged) {
                    staged = registry.filter((record) => record.staged && record.status !== types_1.XanoStatus.UNCHANGED);
                    if (staged.length === 0) {
                        // ask the user if they want add all changes to the staging area
                        const addAll = yield vscode.window.showInformationMessage("No changes to push to Xano. Do you want to stage all changes and push?", "Yes", "No");
                        if (addAll === "Yes") {
                            yield (0, stageAllRecords_1.stageAllRecordsCmd)();
                            staged = registry.filter((record) => record.staged && record.status !== types_1.XanoStatus.UNCHANGED);
                        }
                        if (staged.length === 0) {
                            vscode.window.showInformationMessage("No changes to push to Xano");
                            return;
                        }
                    }
                    // Sort the staged records so objects are pushed in the preferred order
                    staged.sort((a, b) => {
                        const orderA = PUSH_ORDER.indexOf(a.type);
                        const orderB = PUSH_ORDER.indexOf(b.type);
                        // If both have the same type, prioritize deletions last
                        if (orderA === orderB) {
                            if (a.status === types_1.XanoStatus.NOTFOUND &&
                                b.status !== types_1.XanoStatus.NOTFOUND)
                                return 1;
                            if (a.status !== types_1.XanoStatus.NOTFOUND &&
                                b.status === types_1.XanoStatus.NOTFOUND)
                                return -1;
                            return 0;
                        }
                        return orderA - orderB;
                    });
                }
                const stagedCount = staged.length;
                let completed = 0;
                pushing = true;
                const updateProgress = (message) => {
                    completed += 1;
                    const percent = Math.floor((completed / stagedCount) * 100);
                    progress.report({
                        increment: 100 / stagedCount,
                        message: `${percent}% completed (${message})`,
                    });
                };
                for (const record of staged) {
                    try {
                        registry = yield (0, pushRegistryRecord_1.pushRegistryRecord)(registry, record);
                        updateProgress(record.path);
                        results.success.push(record.path);
                    }
                    catch (error) {
                        console.error("Error pushing changes:", error);
                        retryList.push(record);
                        results.failed.push({
                            error: error.toString(),
                            path: record.path,
                        });
                    }
                }
                yield (0, registry_1.saveRegistry)(registry);
                changesTreeDataProvider_1.changesProvider.refresh();
                pushing = false;
                resolve(results);
                // resolve(results);
                // if (retryList.length < stagedCount && retryList.length > 0) {
                //   await push(retryList);
                // }
            }));
        });
    });
}
exports.push = push;
//# sourceMappingURL=push.js.map