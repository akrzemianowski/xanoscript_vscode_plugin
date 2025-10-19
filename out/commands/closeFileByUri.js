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
exports.closeFileByUri = void 0;
const vscode = require("vscode");
function closeFileByUri(uri) {
    return new Promise((resolve) => {
        setTimeout(() => __awaiter(this, void 0, void 0, function* () {
            // Find the text document with the matching URI
            const documents = vscode.workspace.textDocuments.filter((doc) => doc.uri.toString() === uri.toString());
            for (const document of documents) {
                // Close the document
                yield vscode.window.showTextDocument(document, { preview: false });
                yield vscode.commands.executeCommand("workbench.action.closeActiveEditor");
            }
            resolve();
        }));
    });
}
exports.closeFileByUri = closeFileByUri;
//# sourceMappingURL=closeFileByUri.js.map