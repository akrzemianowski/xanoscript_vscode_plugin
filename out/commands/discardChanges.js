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
exports.discardChangesCmd = discardChangesCmd;
exports.discardChanges = discardChanges;
const vscode = require("vscode");
const changesTreeDataProvider_1 = require("../view/changes/changesTreeDataProvider");
const registry_1 = require("../registry/registry");
const path_1 = require("path");
const config_1 = require("../config");
const types_1 = require("../registry/types");
const init_1 = require("../registry/init");
function discardChangesCmd(node) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!node) {
            vscode.window.showErrorMessage("No file selected to open.");
            return;
        }
        discardChanges(node.path);
    });
}
function discardChanges(path) {
    return __awaiter(this, void 0, void 0, function* () {
        let registry = yield (0, registry_1.getRegistry)();
        const record = (0, registry_1.getRegistryByPath)(registry, path);
        if (!record) {
            vscode.window.showErrorMessage("This file is not part of the xano registry");
            return;
        }
        if (record.staged) {
            vscode.window.showErrorMessage("Could not discard changes, this file is staged");
            return;
        }
        if (record.status === "unchanged") {
            vscode.window.showErrorMessage("Could not discard changes, this file has no changes");
            return;
        }
        console.log("restoring folder", record.status);
        // this is just restoring the folder
        if (record.type === types_1.XanoObjectType.API_GROUP) {
            if (record.status === types_1.XanoStatus.NOTFOUND) {
                // restore the folder
                const fileUri = vscode.Uri.file((0, path_1.join)(config_1.ROOT_PATH, path));
                yield vscode.workspace.fs.createDirectory(fileUri);
                let registry = yield (0, registry_1.getRegistry)();
                registry = yield (0, init_1.syncApiGroups)(registry);
                yield (0, registry_1.saveRegistry)(registry);
                changesTreeDataProvider_1.changesProvider.refresh();
                return;
            }
        }
        if (record.original) {
            // ask user to confirm
            const confirmDiscard = yield vscode.window.showWarningMessage(record.status === types_1.XanoStatus.NOTFOUND
                ? "Are you sure you want to restore this file?"
                : "Are you sure you want to discard the changes?", { modal: true }, {
                value: "yes",
                title: record.status === types_1.XanoStatus.NOTFOUND
                    ? "Restore File"
                    : "Disard Changes",
            });
            if ((confirmDiscard === null || confirmDiscard === void 0 ? void 0 : confirmDiscard.value) === "yes") {
                // Decode the original content from base64
                const originalContent = Buffer.from(record.original, "base64").toString("utf-8");
                const fileUri = vscode.Uri.file((0, path_1.join)(config_1.ROOT_PATH, path));
                yield vscode.workspace.fs.writeFile(fileUri, Buffer.from(originalContent, "utf-8"));
                registry = yield (0, registry_1.refreshRegistry)(registry, path);
                yield (0, registry_1.saveRegistry)(registry);
                changesTreeDataProvider_1.changesProvider.refresh();
                vscode.window.showInformationMessage("Changes discarded");
            }
        }
        else {
            const confirmDiscard = yield vscode.window.showWarningMessage("Discarding the changes will delete this file. Are you sure?", { modal: true }, { title: "Delete this file" });
            if ((confirmDiscard === null || confirmDiscard === void 0 ? void 0 : confirmDiscard.title) === "Delete this file") {
                const fileUri = vscode.Uri.file((0, path_1.join)(config_1.ROOT_PATH, path));
                yield vscode.workspace.fs.delete(fileUri);
                registry = yield (0, registry_1.refreshRegistry)(registry, path);
                yield (0, registry_1.saveRegistry)(registry);
                changesTreeDataProvider_1.changesProvider.refresh();
                vscode.window.showInformationMessage("File deleted");
            }
        }
    });
}
//# sourceMappingURL=discardChanges.js.map