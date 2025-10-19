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
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
const registerViews_1 = require("./registerViews");
const registerCommands_1 = require("./registerCommands");
const secrets_1 = require("./secrets");
const registerServer_1 = require("./registerServer");
const init_1 = require("./registry/init");
const originalContentProvider_1 = require("./view/changes/originalContentProvider");
const registerStatusBar_1 = require("./registerStatusBar");
const diagnostic_1 = require("./tooling/diagnostic");
const registerWatchers_1 = require("./registerWatchers");
const registerState_1 = require("./registerState");
const remoteContentProvider_1 = require("./view/changes/remoteContentProvider");
const registerChatTools_1 = require("./registerChatTools");
const registerConfigWatcher_1 = require("./registerConfigWatcher");
let client;
function activate(context) {
    return __awaiter(this, void 0, void 0, function* () {
        (0, secrets_1.initSecretStore)(context.secrets);
        registerState_1.uiState.initialize(context);
        (0, registerConfigWatcher_1.registerConfigWatcher)(context);
        (0, registerCommands_1.registerCommands)(context);
        (0, registerStatusBar_1.registerStatusBar)(context);
        yield (0, init_1.syncRegistry)();
        // xano-baseline is virtual file system to compare the baseline with the current file
        // in order to display a diff between the two files where the original is read only
        context.subscriptions.push(vscode.workspace.registerTextDocumentContentProvider("xano-baseline", originalContentProvider_1.originalContentProvider));
        context.subscriptions.push(vscode.workspace.registerTextDocumentContentProvider("xano-remote", remoteContentProvider_1.remoteContentProvider));
        // the changes and files views
        (0, registerViews_1.registerViews)(context);
        // refresh the registry when a file is saved
        (0, registerWatchers_1.registerWatchers)(context);
        // register the agent tools
        (0, registerChatTools_1.registerChatTools)(context);
        // load the language server
        client = yield (0, registerServer_1.registerServer)(context);
        // Log to confirm activation
        console.log("XanoScript extension activated!");
        context.subscriptions.push(diagnostic_1.diagnosticCollection);
    });
}
exports.activate = activate;
function deactivate() {
    if (!client)
        return undefined;
    return client.stop();
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map