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
exports.assertHasWorkspace = assertHasWorkspace;
const vscode = require("vscode");
/**
 * Asserts that a workspace folder is opened in VSCode.
 */
function assertHasWorkspace() {
    return __awaiter(this, void 0, void 0, function* () {
        // the user must have a workspace opened
        if (!vscode.workspace.workspaceFolders ||
            vscode.workspace.workspaceFolders.length == 0) {
            // display a modal dialog to inform the user that a workspace is required
            const open = yield vscode.window.showErrorMessage("A workspace folder must be opened to use XanoScript. Do you want to open a folder?", { modal: true }, "Open Folder");
            if (open !== "Open Folder") {
                throw new Error("A workspace folder must be opened to use XanoScript.");
            }
            // run the command workbench.action.files.openFolder
            yield vscode.commands.executeCommand("workbench.action.files.openFolder");
        }
    });
}
//# sourceMappingURL=assertHasWorkspace.js.map