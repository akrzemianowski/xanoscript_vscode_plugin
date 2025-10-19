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
exports.createApiGroupCmd = void 0;
const vscode = require("vscode");
const config_1 = require("../config");
const path_1 = require("path");
const changesTreeDataProvider_1 = require("../view/changes/changesTreeDataProvider");
const registry_1 = require("../registry/registry");
const openXanoscriptEditor_1 = require("./openXanoscriptEditor");
function createApiGroupCmd(groupName) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!groupName || groupName.trim() === "") {
            groupName = yield vscode.window.showInputBox({
                prompt: "Enter the API Group name",
                placeHolder: "e.g., Webhooks",
            });
        }
        if (!groupName || groupName.trim() === "") {
            vscode.window.showErrorMessage("Group Name is required");
            throw new Error("API Group Name is required");
        }
        const folderUri = vscode.Uri.file((0, path_1.join)(config_1.ROOT_PATH, config_1.config.paths.apis, groupName));
        const fileUri = vscode.Uri.file((0, path_1.join)(config_1.ROOT_PATH, config_1.config.paths.apis, groupName, "api_group.xs"));
        // check if the file exist
        const fileStat = yield vscode.workspace.fs.stat(folderUri).then((stat) => stat, () => null);
        try {
            if (fileStat) {
                if (fileStat.type === vscode.FileType.Directory) {
                    vscode.window.showErrorMessage("API group already exists");
                    return groupName;
                }
                else if (fileStat.type === vscode.FileType.File) {
                    vscode.window.showErrorMessage("A file with the same name already exists");
                    throw new Error("A file with the same name already exists");
                }
            }
            else {
                // create the folder
                yield vscode.workspace.fs.createDirectory(folderUri);
                vscode.window.showInformationMessage(`API group "${groupName}" created successfully`);
                const apiGroupContent = `api_group "${groupName}" {
  canonical = "${groupName}"
  history = {inherit: true}
}`;
                // create the file
                yield vscode.workspace.fs.writeFile(fileUri, Buffer.from(apiGroupContent));
                (0, openXanoscriptEditor_1.openXanoscriptUri)(fileUri);
                vscode.window.showInformationMessage(`API group "${groupName}" created successfully`);
                yield (0, registry_1.scanRegistry)([fileUri.path.slice(config_1.ROOT_PATH.length + 1)]);
                changesTreeDataProvider_1.changesProvider.refresh();
                return groupName;
            }
        }
        catch (_a) {
            vscode.window.showErrorMessage("Failed to create API group");
            throw new Error("Failed to create API group");
        }
        return groupName;
    });
}
exports.createApiGroupCmd = createApiGroupCmd;
//# sourceMappingURL=createApiGroup.js.map