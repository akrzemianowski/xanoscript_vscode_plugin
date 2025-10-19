"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerCommands = void 0;
const vscode = require("vscode");
const selectWorkspace_1 = require("./commands/selectWorkspace");
const createApiEndpoint_1 = require("./commands/createApiEndpoint");
const createApiGroup_1 = require("./commands/createApiGroup");
const selectBranch_1 = require("./commands/selectBranch");
const openXanoscriptEditor_1 = require("./commands/openXanoscriptEditor");
const selectInstance_1 = require("./commands/selectInstance");
const login_1 = require("./commands/login");
const createCustomFunction_1 = require("./commands/createCustomFunction");
const createTable_1 = require("./commands/createTable");
const createTask_1 = require("./commands/createTask");
const pull_1 = require("./commands/pull");
const push_1 = require("./commands/push");
const stageRecord_1 = require("./commands/stageRecord");
const unstageRecord_1 = require("./commands/unstageRecord");
const refreshChanges_1 = require("./commands/refreshChanges");
const viewChangeDiff_1 = require("./commands/viewChangeDiff");
const openFile_1 = require("./commands/openFile");
const discardChanges_1 = require("./commands/discardChanges");
const stageAllRecords_1 = require("./commands/stageAllRecords");
const unstageAllRecords_1 = require("./commands/unstageAllRecords");
const stashChanges_1 = require("./commands/stashChanges");
const uploadStatic_1 = require("./commands/uploadStatic");
const applyStash_1 = require("./commands/applyStash");
const viewRemoteDiff_1 = require("./commands/viewRemoteDiff");
const resetAndPull_1 = require("./commands/resetAndPull");
const createWorkflowTest_1 = require("./commands/createWorkflowTest");
const runWorkflowTest_1 = require("./commands/runWorkflowTest");
const createAgent_1 = require("./commands/createAgent");
const createMcpServer_1 = require("./commands/createMcpServer");
const createTableTrigger_1 = require("./commands/createTableTrigger");
const createAgentTrigger_1 = require("./commands/createAgentTrigger");
const createMiddleware_1 = require("./commands/createMiddleware");
const createRealtimeChannel_1 = require("./commands/createRealtimeChannel");
const createRealtimeTrigger_1 = require("./commands/createRealtimeTrigger");
const setupAgentInstructions_1 = require("./commands/setupAgentInstructions");
const pushOne_1 = require("./commands/pushOne");
const generateSDK_1 = require("./commands/generateSDK");
const createMcpServerTrigger_1 = require("./commands/createMcpServerTrigger");
const createCrudEndpoint_1 = require("./commands/createCrudEndpoint");
/**
 * Register all the commands available in the XanoScript extension
 * making sure they all are associate with the plugin context so
 * they can be disposed when the plugin is deactivated
 * @param context
 */
const registerCommands = (context) => {
    const commands = [
        vscode.commands.registerCommand("xanoscript.login", login_1.loginCmd),
        vscode.commands.registerCommand("xanoscript.signup", login_1.signupCmd),
        vscode.commands.registerCommand("xanoscript.selectInstance", selectInstance_1.selectInstanceCmd),
        vscode.commands.registerCommand("xanoscript.setupAgentInstructions", setupAgentInstructions_1.setupAgentInstructionsCmd),
        vscode.commands.registerCommand("xanoscript.refreshChanges", refreshChanges_1.refreshChangesCmd),
        vscode.commands.registerCommand("xanoscript.uploadStatic", uploadStatic_1.uploadStaticCmd),
        vscode.commands.registerCommand("xanoscript.viewChangeDiff", viewChangeDiff_1.viewChangeDiffCmd),
        vscode.commands.registerCommand("xanoscript.viewRemoteDiff", viewRemoteDiff_1.viewRemoteDiffCmd),
        vscode.commands.registerCommand("xanoscript.openChangedFile", openFile_1.openChangedFileCmd),
        vscode.commands.registerCommand("xanoscript.discardChanges", discardChanges_1.discardChangesCmd),
        vscode.commands.registerCommand("xanoscript.runTests", runWorkflowTest_1.runWorkflowTestCmd),
        vscode.commands.registerCommand("xanoscript.pullChanges", pull_1.pullCmd),
        vscode.commands.registerCommand("xanoscript.pushChanges", push_1.pushCmd),
        vscode.commands.registerCommand("xanoscript.pushFileChanges", pushOne_1.pushOneCmd),
        vscode.commands.registerCommand("xanoscript.stashChanges", stashChanges_1.stashChangesCmd),
        vscode.commands.registerCommand("xanoscript.applyStash", applyStash_1.applyStashCmd),
        vscode.commands.registerCommand("xanoscript.resetAndPull", resetAndPull_1.resetAndPullCmd),
        vscode.commands.registerCommand("xanoscript.generateSDK", generateSDK_1.generateSDKCmd),
        vscode.commands.registerCommand("xanoscript.unStageRecord", unstageRecord_1.unstageRecordCmd),
        vscode.commands.registerCommand("xanoscript.stageRecord", stageRecord_1.stageRecordCmd),
        vscode.commands.registerCommand("xanoscript.stageAllRecords", stageAllRecords_1.stageAllRecordsCmd),
        vscode.commands.registerCommand("xanoscript.unstageAllRecords", unstageAllRecords_1.unstageAllRecordsCmd),
        vscode.commands.registerCommand("xanoscript.selectWorkspace", selectWorkspace_1.selectWorkspaceCmd),
        vscode.commands.registerCommand("xanoscript.selectBranch", selectBranch_1.selectBranchCmd),
        // DBO tables commands
        vscode.commands.registerCommand("xanoscript.createTable", createTable_1.createTableCmd),
        // Task commands
        vscode.commands.registerCommand("xanoscript.createTask", createTask_1.createTaskCmd),
        vscode.commands.registerCommand("xanoscript.createCustomFunction", createCustomFunction_1.createCustomFunctionCmd),
        // API Group commands
        vscode.commands.registerCommand("xanoscript.createApiGroup", createApiGroup_1.createApiGroupCmd),
        // API Group endpoint commands
        vscode.commands.registerCommand("xanoscript.createApiEndpoint", createApiEndpoint_1.createApiEndpointCmd),
        // API CRUD endpoint commands
        vscode.commands.registerCommand("xanoscript.generateCrudEndpoint", createCrudEndpoint_1.createCrudEndpointCmd),
        // Workflow Test commands
        vscode.commands.registerCommand("xanoscript.createWorkflowTest", createWorkflowTest_1.createWorkflowTestCmd),
        // Agent commands
        vscode.commands.registerCommand("xanoscript.createAgent", createAgent_1.createAgentCmd),
        // MCP Server commands
        vscode.commands.registerCommand("xanoscript.createMcpServer", createMcpServer_1.createMcpServerCmd),
        // Table Trigger commands
        vscode.commands.registerCommand("xanoscript.createTableTrigger", createTableTrigger_1.createTableTriggerCmd),
        // Agent Trigger commands
        vscode.commands.registerCommand("xanoscript.createAgentTrigger", createAgentTrigger_1.createAgentTriggerCmd),
        // MCP Server Trigger commands
        vscode.commands.registerCommand("xanoscript.createMcpServerTrigger", createMcpServerTrigger_1.createMcpServerTriggerCmd),
        // Middleware commands
        vscode.commands.registerCommand("xanoscript.createMiddleware", createMiddleware_1.createMiddlewareCmd),
        // Realtime Channel commands
        vscode.commands.registerCommand("xanoscript.createRealtimeChannel", createRealtimeChannel_1.createRealtimeChannelCmd),
        // Realtime Trigger commands
        vscode.commands.registerCommand("xanoscript.createRealtimeTrigger", createRealtimeTrigger_1.createRealtimeTriggerCmd),
        vscode.commands.registerCommand("xanoscript.openXanoscript", openXanoscriptEditor_1.openXanoscriptEditorCmd),
    ];
    // Register all the commands in the context to be disposed
    // when the plugin is deactivated
    context.subscriptions.push(...commands);
};
exports.registerCommands = registerCommands;
//# sourceMappingURL=registerCommands.js.map