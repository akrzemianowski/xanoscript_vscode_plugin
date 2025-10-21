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
exports.createCustomFunctionCmd = createCustomFunctionCmd;
const vscode = require("vscode");
const openXanoscriptEditor_1 = require("./openXanoscriptEditor");
const path_1 = require("path");
const config_1 = require("../config");
const registry_1 = require("../registry/registry");
const init_1 = require("../registry/init");
const changesTreeDataProvider_1 = require("../view/changes/changesTreeDataProvider");
function createCustomFunctionCmd() {
    return __awaiter(this, void 0, void 0, function* () {
        let functionName = yield vscode.window.showInputBox({
            prompt: "Enter the Custom Function name",
            placeHolder: "e.g., foo/bar/divide",
        });
        if (!functionName) {
            vscode.window.showErrorMessage("Function Name is required");
            return;
        }
        functionName = functionName.replace(/([^a-zA-Z0-9/]+)/g, "_");
        const functionContent = `function "${functionName}" {
  input {
    text some_argument? filters=trim {
      description = "what is this argument about?"
    }
  }

  stack {
    var $some_variable {
      value = "with some value"
    }
  }

  response {
    value = $some_variable
  }
}`;
        try {
            const pathParts = functionName.split("/");
            const filename = pathParts.pop() + ".xs";
            yield vscode.workspace.fs.createDirectory(vscode.Uri.file((0, path_1.join)(config_1.ROOT_PATH, config_1.config.paths.functions, ...pathParts)));
            const uri = vscode.Uri.file((0, path_1.join)(config_1.ROOT_PATH, config_1.config.paths.functions, ...pathParts, filename));
            // check if the file exist
            const fileStat = yield vscode.workspace.fs.stat(uri).then((stat) => stat, () => null);
            if (fileStat) {
                if (fileStat.type === vscode.FileType.Directory) {
                    vscode.window.showErrorMessage("Custom function already exists");
                    (0, openXanoscriptEditor_1.openXanoscriptUri)(uri);
                    return;
                }
                else if (fileStat.type === vscode.FileType.File) {
                    vscode.window.showErrorMessage("A file with the same name already exists");
                    return;
                }
            }
            yield vscode.workspace.fs.writeFile(uri, Buffer.from(functionContent));
            (0, openXanoscriptEditor_1.openXanoscriptUri)(uri);
            vscode.window.showInformationMessage(`Custom function created successfully`);
            const registry = yield (0, registry_1.getRegistry)();
            (0, registry_1.saveRegistry)(yield (0, init_1.syncFunctions)(registry));
            changesTreeDataProvider_1.changesProvider.refresh();
        }
        catch (_a) {
            vscode.window.showErrorMessage("Failed to create custom function");
            return;
        }
    });
}
//# sourceMappingURL=createCustomFunction.js.map