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
exports.createApiEndpointCmd = void 0;
const vscode = require("vscode");
const lodash_1 = require("lodash");
const openXanoscriptEditor_1 = require("./openXanoscriptEditor");
const registry_1 = require("../registry/registry");
const path_1 = require("path");
const config_1 = require("../config");
const changesTreeDataProvider_1 = require("../view/changes/changesTreeDataProvider");
function createApiEndpointCmd() {
    return __awaiter(this, void 0, void 0, function* () {
        // when the command is triggered from the context menu
        // the node parameter will be passed
        const registry = yield (0, registry_1.getRegistry)();
        const apiGroups = registry.filter((record) => record.type === "api_group");
        const apiGroupByLabel = (0, lodash_1.keyBy)(apiGroups, (apiGroup) => `${apiGroup.path.split("/").slice(-2)[0]} (#${apiGroup.id})`);
        const apiGroup = yield vscode.window.showQuickPick(Object.keys(apiGroupByLabel), {
            placeHolder: "Select the API Group",
        });
        if (!apiGroup) {
            vscode.window.showErrorMessage("API Group is required");
            return;
        }
        // remove the api_group.xs from the path
        const apiGroupPath = apiGroupByLabel[apiGroup].path
            .split("/")
            .slice(0, -1)
            .join("/");
        let url = yield vscode.window.showInputBox({
            prompt: "Enter the API endpoint URL",
            placeHolder: "e.g., api/v1/resource",
        });
        if (!url) {
            vscode.window.showErrorMessage("URL is required");
            return;
        }
        // remove the leading slash
        if (url.startsWith("/")) {
            url = url.slice(1);
            return;
        }
        // replace all non-alphanumeric characters with _
        url = url.replace(/([^a-zA-Z0-9/]+)/g, "_");
        const method = yield vscode.window.showQuickPick(["GET", "POST", "PUT", "DELETE", "PATCH"], {
            placeHolder: "Select the HTTP method",
        });
        if (!method) {
            vscode.window.showErrorMessage("HTTP method is required");
            return;
        }
        const apiContent = `query "${url}" verb=${method} {
  input {
  }
  
  stack {
  }

  response {
    value = null
  }
}`;
        try {
            const uri = vscode.Uri.file((0, path_1.join)(config_1.ROOT_PATH, apiGroupPath, `${(0, lodash_1.snakeCase)(url)}_${method}.xs`));
            // check if the file exist
            const fileStat = yield vscode.workspace.fs.stat(uri).then((stat) => stat, () => null);
            if (fileStat) {
                vscode.window.showErrorMessage("A file with the same name already exists");
                return;
            }
            // create the file
            yield vscode.workspace.fs.writeFile(uri, Buffer.from(apiContent));
            (0, openXanoscriptEditor_1.openXanoscriptUri)(uri);
            vscode.window.showInformationMessage(`API endpoint ${method} "${url}" created successfully`);
            yield (0, registry_1.scanRegistry)([uri.path.slice(config_1.ROOT_PATH.length + 1)]);
            changesTreeDataProvider_1.changesProvider.refresh();
        }
        catch (_a) {
            vscode.window.showErrorMessage("Failed to create API endpoint");
            return;
        }
    });
}
exports.createApiEndpointCmd = createApiEndpointCmd;
//# sourceMappingURL=createApiEndpoint.js.map