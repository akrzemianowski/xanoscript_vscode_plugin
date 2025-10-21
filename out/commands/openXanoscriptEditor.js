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
exports.openXanoscriptEditorCmd = openXanoscriptEditorCmd;
exports.openXanoscriptUri = openXanoscriptUri;
const vscode = require("vscode");
/**
 * When a user click on an endpoint on the tree view, this function will open the endpoint editor
 * @param node
 */
function openXanoscriptEditorCmd(node) {
    return __awaiter(this, void 0, void 0, function* () {
        if (node.resourceUri) {
            try {
                const document = yield vscode.workspace.openTextDocument(node.resourceUri);
                yield vscode.window.showTextDocument(document);
            }
            catch (error) {
                vscode.window.showErrorMessage(String(error));
            }
        }
    });
}
/**
 * Directly open a XanoScript file by its URI
 * @param uri The URI can be generated using the buidUri functions
 */
function openXanoscriptUri(uri) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const document = yield vscode.workspace.openTextDocument(uri);
            yield vscode.window.showTextDocument(document);
        }
        catch (error) {
            vscode.window.showErrorMessage(String(error));
        }
    });
}
//# sourceMappingURL=openXanoscriptEditor.js.map