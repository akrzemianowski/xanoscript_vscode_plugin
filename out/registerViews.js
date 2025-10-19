"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerViews = void 0;
const vscode = require("vscode");
const changesTreeDataProvider_1 = require("./view/changes/changesTreeDataProvider");
const registerState_1 = require("./registerState");
/**
 * Register the views on the Xano sidebar
 * the view names are defined in the package.json
 */
function registerViews(context) {
    const xanoShortcutViewProvider = new XanoShortcutViewProvider(context);
    // Add the database table tree view on the Xano view
    const views = [
        vscode.window.registerTreeDataProvider("changes", changesTreeDataProvider_1.changesProvider),
        vscode.window.registerWebviewViewProvider("files", xanoShortcutViewProvider),
    ];
    context.subscriptions.push(...views);
}
exports.registerViews = registerViews;
class XanoShortcutViewProvider {
    constructor(_context) {
        this._context = _context;
        const workspaceConfig = vscode.workspace.getConfiguration("xanoscript");
        this.apiUrl = workspaceConfig.get("xanoUrl", "https://app.xano.com");
    }
    resolveWebviewView(webviewView) {
        this._webviewView = webviewView;
        webviewView.webview.options = {
            enableScripts: true,
            localResourceRoots: [this._context.extensionUri],
        };
        // Set initial HTML
        this._updateWebviewContent();
        // Listen for authentication state changes
        const onStateChange = registerState_1.uiState.onChange(() => {
            this._updateWebviewContent();
        });
        webviewView.webview.onDidReceiveMessage((message) => {
            switch (message.command) {
                case "resetAndPull":
                    vscode.commands.executeCommand("xanoscript.resetAndPull");
                    break;
                case "uploadStatic":
                    vscode.commands.executeCommand("xanoscript.uploadStatic");
                    break;
                case "pullChanges":
                    vscode.commands.executeCommand("xanoscript.pullChanges");
                    break;
                case "login":
                    vscode.commands.executeCommand("xanoscript.login");
                    break;
                case "setupAgentInstructions":
                    vscode.commands.executeCommand("xanoscript.setupAgentInstructions");
                    break;
                case "register":
                    vscode.env.openExternal(vscode.Uri.parse(`${this.apiUrl}/signup?source=vscode`));
                    break;
            }
        }, undefined, this._context.subscriptions);
        // Clean up subscription when webview is disposed
        webviewView.onDidDispose(() => {
            onStateChange.dispose();
        });
    }
    _updateWebviewContent() {
        if (this._webviewView) {
            this._webviewView.webview.html = this._getHtmlForWebview();
        }
    }
    _getHtmlForWebview() {
        const isAuthenticated = registerState_1.uiState.isAuthenticated();
        if (!isAuthenticated) {
            return this._getUnauthenticatedHtml();
        }
        return this._getAuthenticatedHtml();
    }
    _getUnauthenticatedHtml() {
        return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>XanoScript</title>
        <style>
            ${this._getCommonStyles()}
            .login-container {
                text-align: center;
                padding: 20px;
            }
            .login-message {
                color: var(--vscode-descriptionForeground);
                margin-bottom: 20px;
                line-height: 1.4;
            }
            .primary-button {
                background: var(--vscode-button-background);
                color: var(--vscode-button-foreground);
                border: 1px solid var(--vscode-button-border);
                padding: 6px 12px;
                border-radius: 2px;
                cursor: pointer;
                font-size: 14px;
                font-weight: 500;
                margin-bottom: 10px;
                display: block;
                width: 100%;
                text-decoration: none;
            }
            .primary-button:hover {
                background: var(--vscode-button-hoverBackground);
            }
            
        </style>
    </head>
    <body>
        <div class="login-container">
            <p class="login-message">
                Connect to your Xano workspace to start working with XanoScript files.
            </p>
            <button class="shortcut-button" onclick="sendCommand('login')">
                Get Started
            </button>
            <button class="shortcut-button" onclick="sendCommand('register')">
                Create Xano Account
            </button>            
        </div>
        <script>
            const vscode = acquireVsCodeApi();
            
            function sendCommand(command) {
                vscode.postMessage({ command: command });
            }
        </script>
    </body>
    </html>`;
    }
    _getAuthenticatedHtml() {
        return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>XanoScript Shortcuts</title>
        <style>
            ${this._getCommonStyles()}
        </style>
    </head>
    <body>
        <p class="description">Pull changes from your remote Xano workspace.</p>
        <button class="shortcut-button" onclick="sendCommand('pullChanges')">
        Pull Changes
        </button>
        
        <p class="description">Upload and build your web content stored in the static/ folder</p>
        <button class="shortcut-button" onclick="sendCommand('uploadStatic')">
        Upload Static Files
        </button>

        <p class="description">Install or update the local documentation files in your workspace for AI agents</p>
        <button class="shortcut-button" onclick="sendCommand('setupAgentInstructions')">
        Setup Agent Instructions
        </button>
        
        <p class="description">Delete all local changes and pull your remote Xano Workspace</p>
        <button class="shortcut-button danger" onclick="sendCommand('resetAndPull')">
        Reset & Sync Workspace
        </button>
        <script>
            const vscode = acquireVsCodeApi();
            
            function sendCommand(command) {
                vscode.postMessage({ command: command });
            }
        </script>
    </body>
    </html>`;
    }
    _getCommonStyles() {
        return `
            body {
                font-family: var(--vscode-font-family);
                font-size: var(--vscode-font-size);
                color: var(--vscode-foreground);
                background: var(--vscode-editor-background);
                padding: 16px;
                margin: 0;
            }
            .shortcut-button {
                display: block;
                width: 100%;
                padding: 6px 12px;
                margin: 8px 0;
                background: var(--vscode-button-background);
                color: var(--vscode-button-foreground);
                border: 1px solid var(--vscode-button-border);
                border-radius: 2px;
                cursor: pointer;
                text-decoration: none;
                font-size: 13px;
                transition: background-color 0.2s ease;
                margin-bottom: 18px;
            }
            .shortcut-button.danger {
                background: oklch(66.6% 0.179 58.318);
            }
            .shortcut-button:hover.danger {
                background: oklch(76.9% 0.188 70.08);
            }
            .shortcut-button:hover {
                background: var(--vscode-button-hoverBackground);
            }
            .shortcut-button:active {
                background: var(--vscode-button-secondaryBackground);
            }
            .description {
                font-size: 12px;
                color: var(--vscode-descriptionForeground);
                margin-bottom: 6px;
                line-height: 1.4;
            }
            .user-info {
                margin-bottom: 20px;
                padding-bottom: 10px;
                border-bottom: 1px solid var(--vscode-panel-border);
                flex-shrink: 0;
            }
    `;
    }
}
XanoShortcutViewProvider.viewType = "files";
//# sourceMappingURL=registerViews.js.map