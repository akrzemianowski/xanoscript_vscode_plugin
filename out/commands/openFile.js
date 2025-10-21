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
exports.openChangedFileCmd = openChangedFileCmd;
const vscode = require("vscode");
const config_1 = require("../config");
const path_1 = require("path");
function openChangedFileCmd(node) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!node) {
            vscode.window.showErrorMessage("No file selected to open.");
            return;
        }
        const filePath = (0, path_1.join)(config_1.ROOT_PATH, node.path); // Path to the modified file
        const modifiedUri = vscode.Uri.file(filePath);
        // Open the modified file
        yield vscode.workspace.openTextDocument(modifiedUri).then((doc) => {
            vscode.window.showTextDocument(doc);
        });
    });
}
//# sourceMappingURL=openFile.js.map