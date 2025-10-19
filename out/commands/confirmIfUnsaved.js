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
exports.confirmIfUnsavedCmd = void 0;
const vscode = require("vscode");
function confirmIfUnsavedCmd() {
    return __awaiter(this, void 0, void 0, function* () {
        const editor = vscode.window.activeTextEditor;
        // only display save dialog if the file is dirty
        if (editor === null || editor === void 0 ? void 0 : editor.document.isDirty) {
            const shouldContinue = yield vscode.window.showQuickPick([
                {
                    label: "Continue",
                    description: "Your changes won't be included in this operation",
                },
                {
                    label: "Cancel",
                    description: "Stop the operation",
                },
            ], {
                title: "Unsaved Changes",
                placeHolder: "Continue without saving?",
            });
            if (!shouldContinue || (shouldContinue === null || shouldContinue === void 0 ? void 0 : shouldContinue.label) === "Cancel") {
                throw new Error("User canceled the operation");
            }
        }
        return true;
    });
}
exports.confirmIfUnsavedCmd = confirmIfUnsavedCmd;
//# sourceMappingURL=confirmIfUnsaved.js.map