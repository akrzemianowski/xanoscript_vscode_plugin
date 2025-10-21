"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerServer = registerServer;
const vscode = require("vscode");
const node_1 = require("vscode-languageclient/node");
const path = require("path");
/**
 * Registers the language server for XanoScript
 * @param context
 * @returns
 */
function registerServer(context) {
    // Path to your compiled server file
    const serverModule = context.asAbsolutePath(path.join("dist", "server.js"));
    // Define how the server runs
    const serverOptions = {
        run: { module: serverModule, transport: node_1.TransportKind.ipc },
        debug: {
            module: serverModule,
            transport: node_1.TransportKind.ipc,
            options: { execArgv: ["--nolazy", "--inspect=6009"] },
        },
    };
    // Define which files the client handles
    const clientOptions = {
        documentSelector: [{ language: "xanoscript" }],
        synchronize: {
            fileEvents: [vscode.workspace.createFileSystemWatcher("**/*.xs")],
        },
    };
    // Initialize and start the client (which launches the server)
    const client = new node_1.LanguageClient("xanoscriptLanguageServer", "XanoScript Language Server", serverOptions, clientOptions);
    client.start();
    return client;
}
//# sourceMappingURL=registerServer.js.map