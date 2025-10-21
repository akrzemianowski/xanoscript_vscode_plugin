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
exports.pushOneCmd = pushOneCmd;
const pushOne_1 = require("../registry/pushOne");
const vscode = require("vscode");
const registry_1 = require("../registry/registry");
const config_1 = require("../config");
/**
 * Command to push the current file or a specified path to Xano.
 * @param path Optional, allows AI to specify a path to push otherwise uses the current file.
 * @returns
 */
function pushOneCmd(path) {
    return __awaiter(this, void 0, void 0, function* () {
        let record;
        if (path) {
            const registry = yield (0, registry_1.getRegistry)();
            const relativePath = path.slice(config_1.ROOT_PATH.length + 1);
            record = (0, registry_1.getRegistryByPath)(registry, relativePath);
        }
        else {
            // if there are unsaved changes in the current file, ask the user to save them first
            const editor = vscode.window.activeTextEditor;
            if (editor && editor.document) {
                if (editor.document.isDirty) {
                    const save = yield vscode.window.showWarningMessage("Please save your changes before pushing to Xano.", { modal: true }, { title: "Save" });
                    if (save) {
                        yield editor.document.save();
                        // refresh the registry
                    }
                    else {
                        return false;
                    }
                }
                const registry = yield (0, registry_1.getRegistry)();
                const relativePath = editor.document.uri.path.slice(config_1.ROOT_PATH.length + 1);
                record = (0, registry_1.getRegistryByPath)(registry, relativePath);
            }
        }
        if (!record) {
            vscode.window.showErrorMessage("This file is not part of your Xano Workspace");
            return false;
        }
        return (0, pushOne_1.pushOne)(record);
    });
}
//# sourceMappingURL=pushOne.js.map