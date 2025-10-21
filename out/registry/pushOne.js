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
exports.pushOne = pushOne;
const vscode = require("vscode");
const push_1 = require("./push");
const pull_1 = require("./pull");
const changesTreeDataProvider_1 = require("../view/changes/changesTreeDataProvider");
const login_1 = require("../commands/login");
const registry_1 = require("./registry");
const pushRegistryRecord_1 = require("./pushRegistryRecord");
const types_1 = require("./types");
/**
 * Push a single registry record to the server.
 * @param record The registry record to push.
 * @returns True if the push was successful, false otherwise.
 */
function pushOne(record) {
    return __awaiter(this, void 0, void 0, function* () {
        if ((0, push_1.isPushing)()) {
            vscode.window.showWarningMessage("A push operation is already in progress. Please wait until it completes.");
            return false;
        }
        if ((0, pull_1.isPulling)()) {
            vscode.window.showErrorMessage("Cannot push changes while pulling. Please wait until the pull is complete.");
            return false;
        }
        try {
            (0, push_1.setPushing)(true);
            yield (0, login_1.assertUserIsAuthenticated)();
            let registry = yield (0, registry_1.getRegistry)();
            registry = yield (0, pushRegistryRecord_1.pushRegistryRecord)(registry, record);
            // check if the record was pushed successfully (status in the registry should read UNCHANGED)
            const updatedRecord = registry.find((r) => r.path === record.path);
            if (!updatedRecord || updatedRecord.status !== types_1.XanoStatus.UNCHANGED) {
                (0, push_1.setPushing)(false);
                return false;
            }
            yield (0, registry_1.saveRegistry)(registry);
            changesTreeDataProvider_1.changesProvider.refresh();
            vscode.window.showInformationMessage(`${record.path} successfully pushed changes to Xano`);
            (0, push_1.setPushing)(false);
            return true;
        }
        catch (error) {
            (0, push_1.setPushing)(false);
            console.error("pushCurrentNode(): Error pushing changes", error);
            vscode.window.showErrorMessage(`Error pushing changes: ${error}`);
            return false;
        }
    });
}
//# sourceMappingURL=pushOne.js.map