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
exports.resetAndPullCmd = resetAndPullCmd;
const vscode = require("vscode");
const config_1 = require("../config");
const path_1 = require("path");
const lodash_1 = require("lodash");
const pull_1 = require("../registry/pull");
const registry_1 = require("../registry/registry");
const assertHasWorkspace_1 = require("./assertHasWorkspace");
function resetAndPullCmd() {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, assertHasWorkspace_1.assertHasWorkspace)();
        // confirm user wants to reset
        const confirm = yield vscode.window.showWarningMessage("Resetting will discard all local changes not saved to Xano and sync with your Xano workspace. Are you sure?", { modal: true }, { title: "Reset and Sync", isCloseAffordance: false }, { title: "Cancel", isCloseAffordance: true });
        if ((confirm === null || confirm === void 0 ? void 0 : confirm.title) === "Reset and Sync") {
            // close all open editors
            const openEditors = vscode.window.visibleTextEditors;
            if (openEditors.length > 0) {
                yield vscode.commands.executeCommand("workbench.action.closeAllEditors");
            }
            // delete all paths
            for (const key in config_1.config.paths) {
                const path = (0, lodash_1.get)(config_1.config.paths, key);
                const fileUri = vscode.Uri.file((0, path_1.join)(config_1.ROOT_PATH, path));
                yield vscode.workspace.fs.delete(fileUri, { recursive: true });
            }
            // delete registry
            yield (0, registry_1.saveRegistry)([]);
            // pull changes
            yield (0, pull_1.pull)();
        }
    });
}
//# sourceMappingURL=resetAndPull.js.map