"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runTestsStatusBarItem = exports.branchStatusBarItem = exports.workspaceStatusBarItem = exports.instanceStatusBarItem = exports.userStatusBar = void 0;
exports.registerStatusBar = registerStatusBar;
const vscode = require("vscode");
const lodash_1 = require("lodash");
const config_1 = require("./config");
const registerState_1 = require("./registerState");
const path_1 = require("path");
// Create a status bar item displaying the user
exports.userStatusBar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 100);
// Create a status bar item with a command to select the instance
exports.instanceStatusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 99);
// Create a status bar item with a command to select the workspace
exports.workspaceStatusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 98);
// Create a status bar item with a command to select the branch
exports.branchStatusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 97);
exports.runTestsStatusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
/**
 * Register the status bar
 * uttons available when on
 * the XanoScript extension
 * @param context
 */
function registerStatusBar(context) {
    // Register the current user as a status bar button
    exports.userStatusBar.command = "xanoscript.login";
    exports.userStatusBar.tooltip = "Authenticate with Xano";
    exports.userStatusBar.text = `$(account) ---`;
    exports.userStatusBar.show();
    const onLoginChange = registerState_1.uiState.onChange((state) => {
        console.log("fire onchange", state);
        if (state.username) {
            exports.userStatusBar.text = `$(account) ${state.username}`;
            exports.instanceStatusBarItem.show();
        }
        else {
            exports.userStatusBar.text = `$(warning) Login to Xano`;
        }
    }, true);
    // Register the instance status bar button
    exports.instanceStatusBarItem.command = "xanoscript.selectInstance";
    exports.instanceStatusBarItem.text = registerState_1.uiState.instanceName
        ? registerState_1.uiState.instanceName
        : `$(server-environment) ---`;
    exports.instanceStatusBarItem.tooltip = registerState_1.uiState.instance
        ? `Your Xano Instance: \n${registerState_1.uiState.instance}`
        : "Select your Xano Instance";
    const onInstanceChange = registerState_1.uiState.onChange((state) => {
        if (state.instance) {
            exports.instanceStatusBarItem.text = `$(server-environment) ${(0, lodash_1.truncate)(state.instanceName, {
                length: 12,
            })}`;
            exports.workspaceStatusBarItem.tooltip = `Your Xano Instance: \n${state.instance}`;
            exports.instanceStatusBarItem.show();
        }
        else {
            exports.instanceStatusBarItem.hide();
        }
    }, true);
    // Register the workspace status bar button
    exports.workspaceStatusBarItem.command = "xanoscript.selectWorkspace";
    exports.workspaceStatusBarItem.tooltip = "Select Xano Workspace";
    const onWorkspaceChange = registerState_1.uiState.onChange((state) => {
        if (state.workspace) {
            exports.workspaceStatusBarItem.text = `$(repo) ${(0, lodash_1.truncate)(state.workspace, {
                length: 12,
            })}`;
            exports.workspaceStatusBarItem.tooltip = `Your Xano Workspace: \n${state.workspace} (#${config_1.config.workspaceId})`;
            exports.workspaceStatusBarItem.show();
        }
        else {
            exports.workspaceStatusBarItem.hide();
        }
    }, true);
    // Register the branch status bar button
    exports.branchStatusBarItem.command = "xanoscript.selectBranch";
    exports.branchStatusBarItem.tooltip = "select Xano Branch";
    const onBranchChange = config_1.config.onChange((config) => {
        if (config.branch) {
            exports.branchStatusBarItem.text = `$(git-branch) ${(0, lodash_1.truncate)(config.branch, {
                length: 12,
            })}`;
            exports.branchStatusBarItem.show();
        }
        else {
            exports.branchStatusBarItem.hide();
        }
    }, true);
    const onUiStateChange = registerState_1.uiState.onChange((state) => {
        if (!state.isAuthenticated()) {
            exports.branchStatusBarItem.hide();
            exports.instanceStatusBarItem.hide();
            exports.workspaceStatusBarItem.hide();
        }
    }, true);
    exports.runTestsStatusBarItem.command = "xanoscript.runTests";
    exports.runTestsStatusBarItem.tooltip = "Run All Unit Tests";
    exports.runTestsStatusBarItem.text = "$(play) run";
    exports.runTestsStatusBarItem.backgroundColor = new vscode.ThemeColor("statusBarItem.background");
    function updateRunTestsVisibility(editor) {
        var _a, _b;
        const filePath = (_b = (_a = editor === null || editor === void 0 ? void 0 : editor.document) === null || _a === void 0 ? void 0 : _a.uri) === null || _b === void 0 ? void 0 : _b.fsPath;
        const workflowTestPath = (0, path_1.join)(config_1.ROOT_PATH, config_1.config.paths.workflowTests);
        if (filePath === null || filePath === void 0 ? void 0 : filePath.startsWith(workflowTestPath + "/")) {
            exports.runTestsStatusBarItem.show();
        }
        else {
            exports.runTestsStatusBarItem.hide();
        }
    }
    // Initial check
    updateRunTestsVisibility(vscode.window.activeTextEditor);
    // Listen for editor changes
    const editorChangeDisposable = vscode.window.onDidChangeActiveTextEditor(updateRunTestsVisibility);
    exports.runTestsStatusBarItem.show();
    context.subscriptions.push(...[
        exports.instanceStatusBarItem,
        exports.workspaceStatusBarItem,
        exports.branchStatusBarItem,
        exports.runTestsStatusBarItem,
        onLoginChange,
        onInstanceChange,
        onWorkspaceChange,
        onBranchChange,
        editorChangeDisposable,
        onUiStateChange,
    ]);
}
//# sourceMappingURL=registerStatusBar.js.map