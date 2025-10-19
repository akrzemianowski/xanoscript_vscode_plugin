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
exports.uploadStaticCmd = void 0;
const static_1 = require("../metadata/static");
const config_1 = require("../config");
const vscode = require("vscode");
const assertHasWorkspace_1 = require("./assertHasWorkspace");
function uploadStaticCmd() {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, assertHasWorkspace_1.assertHasWorkspace)();
        try {
            const options = [
                {
                    kind: vscode.QuickPickItemKind.Default,
                    label: "Development",
                    value: "dev",
                },
                {
                    kind: vscode.QuickPickItemKind.Default,
                    label: "Production",
                    value: "prod",
                },
            ];
            const selectedOption = yield vscode.window.showQuickPick(options, {
                placeHolder: "Select environment",
            });
            if (!selectedOption) {
                return;
            }
            vscode.window.withProgress({
                location: vscode.ProgressLocation.Notification,
                title: `Uploading static content to ${selectedOption.label}...`,
                cancellable: true,
            }, (progress, token) => __awaiter(this, void 0, void 0, function* () {
                yield (0, static_1.uploadStaticContent)(config_1.config.instanceName, config_1.config.workspaceId, "static", "Static content uploaded via VS Code", token);
                vscode.window.showInformationMessage("Static content uploaded successfully!");
            }));
        }
        catch (error) {
            console.error("Error uploading static content:", error);
            vscode.window.showErrorMessage(`Failed to upload static content`);
        }
    });
}
exports.uploadStaticCmd = uploadStaticCmd;
//# sourceMappingURL=uploadStatic.js.map