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
exports.viewRemoteDiffCmd = viewRemoteDiffCmd;
const vscode = require("vscode");
const config_1 = require("../config");
const path_1 = require("path");
function viewRemoteDiffCmd(path) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!path) {
            vscode.window.showErrorMessage("No file selected to view diff.");
            return;
        }
        console.log("viewRemoteDiffCmd", JSON.stringify(path, null, 2));
        const modifiedFilePath = (0, path_1.join)(config_1.ROOT_PATH, path); // Path to the modified file
        if (!modifiedFilePath) {
            vscode.window.showErrorMessage("No file path provided for the modified file.");
            return;
        }
        const modifiedUri = vscode.Uri.file(modifiedFilePath);
        const originalUri = vscode.Uri.parse(`xano-remote:${path}`);
        // Show the diff
        vscode.commands.executeCommand("vscode.diff", originalUri, modifiedUri, `${path.split("/").pop()} (Remote ↔ Local)`);
    });
}
//# sourceMappingURL=viewRemoteDiff.js.map