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
exports.createTableCmd = createTableCmd;
const vscode = require("vscode");
const openXanoscriptEditor_1 = require("./openXanoscriptEditor");
const lodash_1 = require("lodash");
const config_1 = require("../config");
const path_1 = require("path");
const registry_1 = require("../registry/registry");
const changesTreeDataProvider_1 = require("../view/changes/changesTreeDataProvider");
function createTableCmd() {
    return __awaiter(this, void 0, void 0, function* () {
        let tableName = yield vscode.window.showInputBox({
            prompt: "Enter the table name",
            placeHolder: "e.g., Orders",
        });
        if (!tableName) {
            vscode.window.showErrorMessage("Table name is required");
            return;
        }
        let tableDescription = yield vscode.window.showInputBox({
            prompt: "Enter the table description (optional)",
            placeHolder: "e.g., Stores client orders",
        });
        const authChoice = yield vscode.window.showQuickPick([
            {
                label: "Yes",
                description: "Table requires authentication",
                value: true,
            },
            {
                label: "No",
                description: "Table does not require authentication",
                value: false,
            },
        ], {
            placeHolder: "Does the table require authentication?",
            title: "Table Authentication",
        });
        if (!authChoice) {
            vscode.window.showErrorMessage("Table creation canceled");
            return;
        }
        tableName = tableName.replace(/([^a-zA-Z0-9/]+)/g, "_");
        tableDescription = (tableDescription || "").replace(/"/g, '\\"');
        const vsconfig = vscode.workspace.getConfiguration("xanoscript");
        const tablePrimaryKeyType = vsconfig.get("tablePrimaryKeyType", "int");
        const tableContent = `table "${tableName}" {
  description = "${tableDescription || ""}"
  auth = ${authChoice.value ? "true" : "false"} 

  schema {
    ${tablePrimaryKeyType} id
    timestamp created_at?=now
  }

  index = [
    {type: "primary", field: [{name: "id"}]}
    {type: "gin", field: [{name: "xdo", op: "jsonb_path_op"}]}
    {type: "btree", field: [{name: "created_at", op: "desc"}]}
  ]
}`;
        try {
            const uri = vscode.Uri.file((0, path_1.join)(config_1.ROOT_PATH, config_1.config.paths.tables, `${(0, lodash_1.snakeCase)(tableName)}.xs`));
            // check if the file exist
            const fileStat = yield vscode.workspace.fs.stat(uri).then((stat) => stat, () => null);
            if (fileStat) {
                vscode.window.showErrorMessage("A file with the same name already exists");
                return;
            }
            // create the file
            yield vscode.workspace.fs.writeFile(uri, Buffer.from(tableContent));
            (0, openXanoscriptEditor_1.openXanoscriptUri)(uri);
            vscode.window.showInformationMessage(`Table ${tableName} created successfully`);
            yield (0, registry_1.scanRegistry)([uri.path.slice(config_1.ROOT_PATH.length + 1)]);
            changesTreeDataProvider_1.changesProvider.refresh();
        }
        catch (_a) {
            vscode.window.showErrorMessage("Failed to create table");
            return;
        }
    });
}
//# sourceMappingURL=createTable.js.map