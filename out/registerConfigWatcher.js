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
exports.isXanoEnabledInWorkspace = exports.registerConfigWatcher = void 0;
const vscode = require("vscode");
const cache_1 = require("./tooling/cache");
// Watcher for dynamic changes
function registerConfigWatcher(context) {
    if (!vscode.workspace.workspaceFolders)
        return;
    updateXanoContext();
    const configWatcher = vscode.workspace.createFileSystemWatcher("**/.xano/config.json");
    configWatcher.onDidCreate(() => __awaiter(this, void 0, void 0, function* () {
        updateXanoContext();
        vscode.window.showInformationMessage("Xano config detected. Full features enabled.");
    }));
    configWatcher.onDidDelete(() => __awaiter(this, void 0, void 0, function* () {
        updateXanoContext();
        vscode.window.showWarningMessage("Xano config removed. Features disabled.");
    }));
    configWatcher.onDidChange(() => __awaiter(this, void 0, void 0, function* () {
        updateXanoContext();
        vscode.window.showInformationMessage("Xano config changed. Settings updated.");
    }));
    context.subscriptions.push(configWatcher);
    // Also handle workspace folder changes
    context.subscriptions.push(vscode.workspace.onDidChangeWorkspaceFolders(() => __awaiter(this, void 0, void 0, function* () {
        updateXanoContext();
    })));
}
exports.registerConfigWatcher = registerConfigWatcher;
const checkHasXanoConfig = () => __awaiter(void 0, void 0, void 0, function* () {
    const workspaceFolders = vscode.workspace.workspaceFolders;
    if (!workspaceFolders) {
        return false;
    }
    const folder = workspaceFolders[0];
    const xanoConfigUri = vscode.Uri.joinPath(folder.uri, ".xano", "config.json");
    try {
        yield vscode.workspace.fs.stat(xanoConfigUri);
        return true;
    }
    catch (_a) {
        return false;
    }
});
function updateXanoContext() {
    return __awaiter(this, void 0, void 0, function* () {
        const isXanoEnabled = yield checkHasXanoConfig(); // Your function
        (0, cache_1.setCache)("xano.enabled", isXanoEnabled, 5000); // Cache for 5 seconds
        yield vscode.commands.executeCommand("setContext", "xano.enabled", isXanoEnabled);
    });
}
function isXanoEnabledInWorkspace() {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, cache_1.getCacheOrFillWith)("xano.enabled", checkHasXanoConfig, 5000);
    });
}
exports.isXanoEnabledInWorkspace = isXanoEnabledInWorkspace;
//# sourceMappingURL=registerConfigWatcher.js.map