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
exports.stageRecordCmd = stageRecordCmd;
const vscode = require("vscode");
const config_1 = require("../config");
const registry_1 = require("../registry/registry");
const changesTreeDataProvider_1 = require("../view/changes/changesTreeDataProvider");
const types_1 = require("../registry/types");
function stageRecordCmd(node) {
    return __awaiter(this, void 0, void 0, function* () {
        let path = node === null || node === void 0 ? void 0 : node.path;
        if (!path) {
            const editor = vscode.window.activeTextEditor;
            if (!editor) {
                vscode.window.showErrorMessage("Please open a file to stage");
                return;
            }
            path = editor.document.uri.path.slice(config_1.ROOT_PATH.length + 1);
        }
        const registry = yield (0, registry_1.getRegistry)();
        const record = (0, registry_1.getRegistryByPath)(registry, path);
        if (!record) {
            vscode.window.showErrorMessage("This file is not part of the xano registry");
            return;
        }
        if (record.staged === true) {
            vscode.window.showErrorMessage("Could not stage this file, it is already staged");
            return;
        }
        if (record.status === types_1.XanoStatus.UNCHANGED) {
            vscode.window.showErrorMessage("Could not stage this file, it has no changes");
            return;
        }
        if (record.status === types_1.XanoStatus.ERROR) {
            vscode.window.showErrorMessage("Could not stage this file due to an error in the registry");
            return;
        }
        // remove ROOT_PATH from the path
        const updatedRegistry = (0, registry_1.updateRegistryByPath)(registry, path, {
            staged: true,
        });
        yield (0, registry_1.saveRegistry)(updatedRegistry);
        changesTreeDataProvider_1.changesProvider.refresh();
    });
}
//# sourceMappingURL=stageRecord.js.map