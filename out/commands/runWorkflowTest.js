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
exports.runWorkflowTestCmd = runWorkflowTestCmd;
const vscode = require("vscode");
const workflowTest_1 = require("../metadata/workflowTest");
const config_1 = require("../config");
function runWorkflowTestCmd() {
    return __awaiter(this, void 0, void 0, function* () {
        const editor = vscode.window.activeTextEditor;
        if (editor === null || editor === void 0 ? void 0 : editor.document) {
            vscode.window.withProgress({
                location: vscode.ProgressLocation.Notification,
                title: "Running Workflow Test",
            }, (progress) => __awaiter(this, void 0, void 0, function* () {
                const xanoscript = editor.document.getText();
                progress.report({ message: "Running test..." });
                const response = yield (0, workflowTest_1.runWorkflowTestFromXs)(config_1.config.instanceName, config_1.config.workspaceId, xanoscript);
                progress.report({ increment: 100, message: "done" });
                if (response.status == "ok") {
                    vscode.window.showInformationMessage(`Test succeeded - ${response.timing}ms`);
                }
                else if (response.status == "exception") {
                    vscode.window.showWarningMessage(`Test failed: ${response.message}`);
                }
                else {
                    vscode.window.showErrorMessage(`Could not run test: ${response.message}`);
                }
            }));
        }
        else {
            vscode.window.showErrorMessage("No active editor found");
        }
    });
}
//# sourceMappingURL=runWorkflowTest.js.map