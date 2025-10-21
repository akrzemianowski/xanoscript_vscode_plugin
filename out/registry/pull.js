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
exports.isPulling = isPulling;
exports.pull = pull;
exports.getMatchingNewFileIndex = getMatchingNewFileIndex;
const vscode = require("vscode");
const types_1 = require("./types");
const path_1 = require("path");
const fsUtils_1 = require("./fsUtils");
const config_1 = require("../config");
const registry_1 = require("./registry");
const dbo_1 = require("../metadata/dbo");
const customFunction_1 = require("../metadata/customFunction");
const task_1 = require("../metadata/task");
const tool_1 = require("../metadata/tool");
const api_1 = require("../metadata/api");
const lodash_1 = require("lodash");
const changesTreeDataProvider_1 = require("../view/changes/changesTreeDataProvider");
const login_1 = require("../commands/login");
const diff_1 = require("diff");
const remoteContentProvider_1 = require("../view/changes/remoteContentProvider");
const push_1 = require("./push");
const getFileInfo_1 = require("./getFileInfo");
const xsUtils_1 = require("./xsUtils");
const workflowTest_1 = require("../metadata/workflowTest");
const agent_1 = require("../metadata/agent");
const agentTrigger_1 = require("../metadata/agentTrigger");
const mcpServer_1 = require("../metadata/mcpServer");
const mcpServerTrigger_1 = require("../metadata/mcpServerTrigger");
const tableTrigger_1 = require("../metadata/tableTrigger");
const addon_1 = require("../metadata/addon");
const middleware_1 = require("../metadata/middleware");
const realtime_1 = require("../metadata/realtime");
let pulling = false;
function isPulling() {
    return pulling;
}
/**
 * Pull remote changes from Xano into the local Xano script filesystem
 *
 * @param config
 * @param records
 * @param getRecord
 * @returns null if the file has been deleted, otherwise the updated registry record
 */
function pull() {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, login_1.assertUserIsAuthenticated)();
        if (isPulling()) {
            vscode.window.showErrorMessage("You cannot pull changes while pulling changes from Xano. Wait until the current pull is finished.");
            return;
        }
        yield vscode.window
            .withProgress({
            location: vscode.ProgressLocation.Notification,
            title: "Pulling Changes from Xano",
            cancellable: true,
        }, (progress, token) => __awaiter(this, void 0, void 0, function* () {
            if ((0, push_1.isPushing)()) {
                vscode.window.showErrorMessage("You cannot pull changes while pushing changes to Xano. Wait until the push is finished.");
                return;
            }
            pulling = true;
            const registry = yield (0, registry_1.getRegistry)();
            // store the list of object by IDs that we pulled from Xano
            // this will be used to delete the local files that are not in Xano anymore
            const remoteObjects = {
                table: [],
                function: [],
                task: [],
                tool: [],
                api_endpoint: [],
                api_group: [],
                workflow_test: [],
                agent: [],
                agent_trigger: [],
                mcp_server: [],
                mcp_server_trigger: [],
                table_trigger: [],
                add_on: [],
                middleware: [],
                realtime_channel: [],
                realtime_trigger: [],
                unknown: [],
            };
            const fileOperations = [];
            const increment = 100 / (Object.keys(remoteObjects).length + 1); // +1 for the final save
            let percent_progress = 0;
            const updateProgress = (message) => {
                percent_progress += increment;
                progress.report({
                    increment: increment,
                    message: `${Math.round(percent_progress)}% completed (${message})`,
                });
            };
            updateProgress("tables");
            const tables = yield (0, dbo_1.fetchTables)(config_1.config.instanceName, config_1.config.workspaceId).catch((error) => {
                vscode.window.showWarningMessage(`Failed to fetch tables: ${error.message || error}`);
                return [];
            });
            if (token.isCancellationRequested) {
                pulling = false;
                return;
            }
            updateProgress("custom functions");
            const customFns = yield (0, customFunction_1.fetchCustomFunctions)(config_1.config.instanceName, config_1.config.workspaceId).catch((error) => {
                vscode.window.showWarningMessage(`Failed to fetch custom functions: ${error.message || error}`);
                return [];
            });
            if (token.isCancellationRequested) {
                pulling = false;
                return;
            }
            updateProgress("tasks");
            const tasks = yield (0, task_1.fetchTasks)(config_1.config.instanceName, config_1.config.workspaceId).catch((error) => {
                vscode.window.showWarningMessage(`Failed to fetch tasks: ${error.message || error}`);
                return [];
            });
            if (token.isCancellationRequested) {
                pulling = false;
                return;
            }
            updateProgress("tools");
            const tools = yield (0, tool_1.fetchTools)(config_1.config.instanceName, config_1.config.workspaceId).catch((error) => {
                vscode.window.showWarningMessage(`Failed to fetch tools: ${error.message || error}`);
                return [];
            });
            if (token.isCancellationRequested) {
                pulling = false;
                return;
            }
            updateProgress("api groups");
            const apiGroups = yield (0, api_1.fetchApiGroups)(config_1.config.instanceName, config_1.config.workspaceId).catch((error) => {
                vscode.window.showWarningMessage(`Failed to fetch api groups: ${error.message || error}`);
                return [];
            });
            if (token.isCancellationRequested) {
                pulling = false;
                return;
            }
            updateProgress("api endpoints");
            const apiEndpoints = yield (0, api_1.fetchApiEndpoints)(config_1.config.instanceName, config_1.config.workspaceId).catch((error) => {
                vscode.window.showWarningMessage(`Failed to fetch api endpoints: ${error.message || error}`);
                return [];
            });
            if (token.isCancellationRequested) {
                pulling = false;
                return;
            }
            let workflowTests = [];
            let agents = [];
            let agentTriggers = [];
            let mcpServers = [];
            let mcpServerTriggers = [];
            let tableTriggers = [];
            let addOns = [];
            let middlewares = [];
            let realtimeChannels = [];
            let realtimeTriggers = [];
            // TODO: disable once 2.0 is out
            updateProgress("workflow_tests");
            workflowTests = yield (0, workflowTest_1.fetchWorkflowTests)(config_1.config.instanceName, config_1.config.workspaceId).catch((error) => {
                vscode.window.showWarningMessage(`Failed to fetch workflow tests: ${error.message || error}`);
                return [];
            });
            if (token.isCancellationRequested) {
                pulling = false;
                return;
            }
            updateProgress("agents");
            agents = yield (0, agent_1.fetchAgents)(config_1.config.instanceName, config_1.config.workspaceId).catch((error) => {
                vscode.window.showWarningMessage(`Failed to fetch agents: ${error.message || error}`);
                return [];
            });
            if (token.isCancellationRequested) {
                pulling = false;
                return;
            }
            updateProgress("agent triggers");
            agentTriggers = yield (0, agentTrigger_1.fetchAgentTriggers)(config_1.config.instanceName, config_1.config.workspaceId).catch((error) => {
                vscode.window.showWarningMessage(`Failed to fetch agent triggers: ${error.message || error}`);
                return [];
            });
            if (token.isCancellationRequested) {
                pulling = false;
                return;
            }
            updateProgress("MCP servers");
            mcpServers = yield (0, mcpServer_1.fetchMcpServers)(config_1.config.instanceName, config_1.config.workspaceId).catch((error) => {
                vscode.window.showWarningMessage(`Failed to fetch MCP servers: ${error.message || error}`);
                return [];
            });
            if (token.isCancellationRequested) {
                pulling = false;
                return;
            }
            updateProgress("MCP server triggers");
            mcpServerTriggers = yield (0, mcpServerTrigger_1.fetchMcpServerTriggers)(config_1.config.instanceName, config_1.config.workspaceId).catch((error) => {
                vscode.window.showWarningMessage(`Failed to fetch MCP server triggers: ${error.message || error}`);
                return [];
            });
            if (token.isCancellationRequested) {
                pulling = false;
                return;
            }
            updateProgress("table triggers");
            tableTriggers = yield (0, tableTrigger_1.fetchTableTriggers)(config_1.config.instanceName, config_1.config.workspaceId).catch((error) => {
                vscode.window.showWarningMessage(`Failed to fetch table triggers: ${error.message || error}`);
                return [];
            });
            if (token.isCancellationRequested) {
                pulling = false;
                return;
            }
            updateProgress("addons");
            addOns = yield (0, addon_1.fetchAddOns)(config_1.config.instanceName, config_1.config.workspaceId).catch((error) => {
                vscode.window.showWarningMessage(`Failed to fetch addons: ${error.message || error}`);
                return [];
            });
            if (token.isCancellationRequested) {
                pulling = false;
                return;
            }
            updateProgress("middlewares");
            middlewares = yield (0, middleware_1.fetchMiddlewares)(config_1.config.instanceName, config_1.config.workspaceId).catch((error) => {
                vscode.window.showWarningMessage(`Failed to fetch middlewares: ${error.message || error}`);
                return [];
            });
            if (token.isCancellationRequested) {
                pulling = false;
                return;
            }
            updateProgress("realtime channels");
            realtimeChannels = yield (0, realtime_1.fetchRealtimeChannels)(config_1.config.instanceName, config_1.config.workspaceId).catch((error) => {
                var _a;
                if (!((_a = error.message) === null || _a === void 0 ? void 0 : _a.startsWith("Please enable"))) {
                    vscode.window.showWarningMessage(`Failed to fetch realtime channels: ${error.message || error}`);
                }
                return [];
            });
            if (token.isCancellationRequested) {
                pulling = false;
                return;
            }
            updateProgress("realtime triggers");
            realtimeTriggers = yield (0, realtime_1.fetchRealtimeTriggers)(config_1.config.instanceName, config_1.config.workspaceId).catch((error) => {
                vscode.window.showWarningMessage(`Failed to fetch realtime triggers: ${error.message || error}`);
                return [];
            });
            if (token.isCancellationRequested) {
                pulling = false;
                return;
            }
            // --- from this point, we don't allow cancelling anymore ---
            for (const apiGroup of apiGroups) {
                try {
                    yield pullObject(fileOperations, registry, apiGroup, types_1.XanoObjectType.API_GROUP, (obj) => (0, path_1.join)(config_1.config.paths.apis, obj.name, `api_group.xs`));
                    remoteObjects.api_group.push(apiGroup.id);
                }
                catch (error) {
                    console.error(`Error fetching <apiGroup:${apiGroup.id}>`, error);
                }
            }
            for (const workflowTest of workflowTests) {
                try {
                    yield pullObject(fileOperations, registry, workflowTest, types_1.XanoObjectType.WORKFLOW_TEST, (obj) => (0, path_1.join)(config_1.config.paths.workflowTests, `${obj.id}_${obj.name}.xs`));
                    remoteObjects.workflow_test.push(workflowTest.id);
                }
                catch (error) {
                    console.error(`Error fetching <workflowTest:${workflowTest.id}>`, error);
                }
            }
            for (const apiEndpoint of apiEndpoints) {
                try {
                    yield pullObject(fileOperations, registry, apiEndpoint, types_1.XanoObjectType.API_ENDPOINT, (obj) => (0, path_1.join)(config_1.config.paths.apis, apiEndpoint.apiGroup.name, `${obj.id}_${(0, lodash_1.snakeCase)(obj.name)}_${obj.verb}.xs`));
                    remoteObjects.api_endpoint.push(apiEndpoint.id);
                }
                catch (error) {
                    console.error(`Error fetching <api:${apiEndpoint.id}>`, error);
                }
            }
            for (const table of tables) {
                try {
                    yield pullObject(fileOperations, registry, table, types_1.XanoObjectType.TABLE, (table) => (0, path_1.join)(config_1.config.paths.tables, `${table.id}_${table.name}.xs`));
                    remoteObjects.table.push(table.id);
                }
                catch (error) {
                    console.error(`Error fetching <table:${table.id}>`, error);
                }
            }
            for (const customFn of customFns) {
                try {
                    yield pullObject(fileOperations, registry, customFn, types_1.XanoObjectType.FUNCTION, (fn) => {
                        const pathParts = fn.name.split("/");
                        // extract the function name from the path
                        const functionName = pathParts.pop() || "";
                        // create the path to the function file
                        return (0, path_1.join)(config_1.config.paths.functions, pathParts.join("/"), fn.id + "_" + functionName + ".xs");
                    });
                    remoteObjects.function.push(customFn.id);
                }
                catch (error) {
                    console.error(`Error fetching <function:${customFn.id}>`, error);
                }
            }
            for (const task of tasks) {
                try {
                    yield pullObject(fileOperations, registry, task, types_1.XanoObjectType.TASK, (task) => (0, path_1.join)(config_1.config.paths.tasks, `${task.id}_${task.name}.xs`));
                    remoteObjects.task.push(task.id);
                }
                catch (error) {
                    console.error(`Error fetching <task:${task.id}>`, error);
                }
            }
            for (const tool of tools) {
                try {
                    yield pullObject(fileOperations, registry, tool, types_1.XanoObjectType.TOOL, (tool) => (0, path_1.join)(config_1.config.paths.tools, `${tool.id}_${tool.name}.xs`));
                    remoteObjects.tool.push(tool.id);
                }
                catch (error) {
                    console.error(`Error fetching <tool:${tool.id}>`, error);
                }
            }
            for (const agent of agents) {
                try {
                    yield pullObject(fileOperations, registry, agent, types_1.XanoObjectType.AGENT, (obj) => (0, path_1.join)(config_1.config.paths.agents, `${obj.id}_${(0, lodash_1.snakeCase)(obj.name)}.xs`));
                    remoteObjects.agent.push(agent.id);
                }
                catch (error) {
                    console.error(`Error fetching <agent:${agent.id}>`, error);
                }
            }
            for (const agentTrigger of agentTriggers) {
                try {
                    yield pullObject(fileOperations, registry, agentTrigger, types_1.XanoObjectType.AGENT_TRIGGER, (obj) => (0, path_1.join)(config_1.config.paths.agentTriggers, `${obj.id}_${(0, lodash_1.snakeCase)(obj.name)}.xs`));
                    remoteObjects.agent_trigger.push(agentTrigger.id);
                }
                catch (error) {
                    console.error(`Error fetching <agentTrigger:${agentTrigger.id}>`, error);
                }
            }
            for (const server of mcpServers) {
                try {
                    yield pullObject(fileOperations, registry, server, types_1.XanoObjectType.MCP_SERVER, (obj) => (0, path_1.join)(config_1.config.paths.mcpServers, `${obj.id}_${(0, lodash_1.snakeCase)(obj.name)}.xs`));
                    remoteObjects.mcp_server.push(server.id);
                }
                catch (error) {
                    console.error(`Error fetching <server:${server.id}>`, error);
                }
            }
            for (const trigger of mcpServerTriggers) {
                try {
                    yield pullObject(fileOperations, registry, trigger, types_1.XanoObjectType.MCP_SERVER_TRIGGER, (obj) => (0, path_1.join)(config_1.config.paths.mcpServerTriggers, `${obj.id}_${(0, lodash_1.snakeCase)(obj.name)}.xs`));
                    remoteObjects.mcp_server_trigger.push(trigger.id);
                }
                catch (error) {
                    console.error(`Error fetching <mcpServerTrigger:${trigger.id}>`, error);
                }
            }
            for (const trigger of tableTriggers) {
                try {
                    yield pullObject(fileOperations, registry, trigger, types_1.XanoObjectType.TABLE_TRIGGER, (obj) => (0, path_1.join)(config_1.config.paths.tableTriggers, `${obj.id}_${(0, lodash_1.snakeCase)(obj.name)}.xs`));
                    remoteObjects.table_trigger.push(trigger.id);
                }
                catch (error) {
                    console.error(`Error fetching <trigger:${trigger.id}>`, error);
                }
            }
            for (const addOn of addOns) {
                try {
                    yield pullObject(fileOperations, registry, addOn, types_1.XanoObjectType.ADD_ON, (obj) => (0, path_1.join)(config_1.config.paths.addOns, `${obj.id}_${(0, lodash_1.snakeCase)(obj.name)}.xs`));
                    remoteObjects.add_on.push(addOn.id);
                }
                catch (error) {
                    console.error(`Error fetching <add_on:${addOn.id}>`, error);
                }
            }
            for (const middleware of middlewares) {
                try {
                    yield pullObject(fileOperations, registry, middleware, types_1.XanoObjectType.MIDDLEWARE, (obj) => (0, path_1.join)(config_1.config.paths.middlewares, `${obj.id}_${(0, lodash_1.snakeCase)(obj.name)}.xs`));
                    remoteObjects.middleware.push(middleware.id);
                }
                catch (error) {
                    console.error(`Error fetching <middleware:${middleware.id}>`, error);
                }
            }
            for (const channel of realtimeChannels) {
                try {
                    yield pullObject(fileOperations, registry, channel, types_1.XanoObjectType.REALTIME_CHANNEL, (obj) => (0, path_1.join)(config_1.config.paths.realtimeChannels, `${obj.id}_${(0, lodash_1.snakeCase)(obj.name)}.xs`));
                    remoteObjects.realtime_channel.push(channel.id);
                }
                catch (error) {
                    console.error(`Error fetching <realtime_channel:${channel.id}>`, error);
                }
            }
            for (const trigger of realtimeTriggers) {
                try {
                    yield pullObject(fileOperations, registry, trigger, types_1.XanoObjectType.REALTIME_TRIGGER, (obj) => (0, path_1.join)(config_1.config.paths.realtimeTriggers, `${obj.id}_${(0, lodash_1.snakeCase)(obj.name)}.xs`));
                    remoteObjects.realtime_trigger.push(trigger.id);
                }
                catch (error) {
                    console.error(`Error fetching <realtime_trigger:${trigger.id}>`, error);
                }
            }
            let keepAllLocalChanges = false;
            let deleteAllChanges = false;
            // we can now delete all unchanged files which don't exist on the server
            // note that we are parsing the registry from the end to the beginning
            // so we can delete the files without affecting the indexes
            for (let index = registry.length - 1; index > -1; index--) {
                const record = registry[index];
                // if the record is new, we don't need to delete it
                if (record.status === types_1.XanoStatus.NEW) {
                    continue;
                }
                const found = remoteObjects[record.type].includes(record.id);
                if (found) {
                    // if the record is found in the remote objects, we don't need to delete it
                    continue;
                }
                if (record.status === types_1.XanoStatus.UNCHANGED) {
                    // delete the local file
                    const localFileUri = vscode.Uri.file((0, path_1.join)(config_1.ROOT_PATH, record.path));
                    try {
                        yield (0, fsUtils_1.deleteFile)(localFileUri.path);
                        // delete the record from the registry
                        registry.splice(index, 1);
                    }
                    catch (error) {
                        console.error(`Error deleting local file ${record.path}`, error);
                    }
                }
                else {
                    if (deleteAllChanges) {
                        // if we are deleting all changes, we don't need to ask the user
                        const localFileUri = vscode.Uri.file((0, path_1.join)(config_1.ROOT_PATH, record.path));
                        yield (0, fsUtils_1.deleteFile)(localFileUri.path);
                        registry.splice(index, 1);
                        continue;
                    }
                    if (keepAllLocalChanges) {
                        // marking it as new if you decide to keep it
                        record.status = types_1.XanoStatus.NEW;
                        record.original = "";
                        record.id = 0;
                        continue;
                    }
                    // ask the user if they want to keep the local modified file or delete it
                    const decision = yield vscode.window.showWarningMessage(`The file "${record.path}" was deleted on Xano, but you've made local changes. Would you like to keep your local version?`, { modal: true }, { title: "Keep as New File", isCloseAffordance: false }, { title: "Delete Local Changes", isCloseAffordance: false }, { title: "Keep All as New Files", isCloseAffordance: false }, { title: "Delete All Changes", isCloseAffordance: false });
                    if ((decision === null || decision === void 0 ? void 0 : decision.title) === "Delete All Changes") {
                        deleteAllChanges = true;
                    }
                    if ((decision === null || decision === void 0 ? void 0 : decision.title) === "Keep All as New Files") {
                        keepAllLocalChanges = true;
                    }
                    if ((decision === null || decision === void 0 ? void 0 : decision.title) === "Delete All Changes" ||
                        (decision === null || decision === void 0 ? void 0 : decision.title) === "Delete Local Changes") {
                        const localFileUri = vscode.Uri.file((0, path_1.join)(config_1.ROOT_PATH, record.path));
                        yield (0, fsUtils_1.deleteFile)(localFileUri.path);
                        registry.splice(index, 1);
                    }
                    else {
                        // marking it as new if you decide to keep it
                        record.status = types_1.XanoStatus.NEW;
                        record.original = "";
                        record.id = 0;
                    }
                }
            }
            // write all the files at once
            const uniqFileOperations = (0, lodash_1.uniqBy)(fileOperations, ({ filePath }) => filePath);
            for (const fileOperation of uniqFileOperations) {
                switch (fileOperation.operation) {
                    case "update":
                    case "create":
                        if (fileOperation.fileType === vscode.FileType.Directory) {
                            yield (0, fsUtils_1.createDirectory)(fileOperation.filePath);
                        }
                        else {
                            yield (0, fsUtils_1.writeFile)(fileOperation.filePath, fileOperation.content);
                        }
                        break;
                    case "conflict":
                        remoteContentProvider_1.remoteContentProvider.updateContent(fileOperation.filePath, fileOperation.content);
                        vscode.commands.executeCommand("xanoscript.viewRemoteDiff", fileOperation.filePath);
                        break;
                    default:
                        console.error(`Unknown file operation ${fileOperation.operation}`);
                }
            }
            yield (0, registry_1.saveRegistry)(registry);
            changesTreeDataProvider_1.changesProvider.refresh();
        }))
            .then(() => (pulling = false), () => (pulling = false));
    });
}
function pullObject(fileOperations, registry, obj, objType, objPath) {
    return __awaiter(this, void 0, void 0, function* () {
        // check if the record is in the registry
        let recordIdx = registry.findIndex((record) => record.id === obj.id && record.type === objType);
        if (recordIdx === -1) {
            recordIdx = yield getMatchingNewFileIndex(registry, obj, objType);
            if (recordIdx > -1) {
                // check if they have the same content
                const isIdentical = yield compareWithLocalFile(obj, registry[recordIdx]);
                registry[recordIdx] = Object.assign(Object.assign({}, registry[recordIdx]), { status: isIdentical ? types_1.XanoStatus.UNCHANGED : types_1.XanoStatus.CHANGED, id: obj.id, original: Buffer.from(yield (0, xsUtils_1.getXanoscriptContent)(objType, obj)).toString("base64"), sha256: (0, fsUtils_1.getFileHash)(yield (0, xsUtils_1.getXanoscriptContent)(objType, obj)) });
                if (!isIdentical) {
                    fileOperations.push({
                        operation: "conflict",
                        content: yield (0, xsUtils_1.getXanoscriptContent)(objType, obj),
                        fileType: vscode.FileType.File,
                        filePath: registry[recordIdx].path,
                    });
                }
                return;
            }
        }
        const registryRecord = registry[recordIdx];
        if (!registryRecord) {
            const record = yield newRegistryRecord(fileOperations, obj, objType, objPath);
            registry.push(record);
        }
        else {
            const record = yield updateExistingRegistryRecord(fileOperations, registryRecord, yield (0, xsUtils_1.getXanoscriptContent)(objType, obj));
            registry[recordIdx] = record;
        }
    });
}
function newRegistryRecord(fileOperations, obj, objType, path) {
    return __awaiter(this, void 0, void 0, function* () {
        if (typeof path === "function") {
            path = path(obj);
        }
        else {
            path = (0, path_1.join)(path, obj.name + ".xs");
        }
        const record = {
            id: obj.id,
            type: objType,
            path,
            status: types_1.XanoStatus.UNCHANGED,
            staged: false,
        };
        const localFilePath = (0, path_1.join)(config_1.ROOT_PATH, record.path);
        record.sha256 = (0, fsUtils_1.getFileHash)(yield (0, xsUtils_1.getXanoscriptContent)(objType, obj));
        record.original = Buffer.from(yield (0, xsUtils_1.getXanoscriptContent)(objType, obj)).toString("base64");
        fileOperations.push({
            operation: "create",
            content: yield (0, xsUtils_1.getXanoscriptContent)(objType, obj),
            fileType: vscode.FileType.File,
            filePath: localFilePath,
        });
        return record;
    });
}
/**
 * Update an existing registry record with the new content from the remote server
 * @param record
 * @param script
 * @returns
 */
function updateExistingRegistryRecord(fileOperations, record, script) {
    return __awaiter(this, void 0, void 0, function* () {
        // retrieve the local file
        const localFilePath = (0, path_1.join)(config_1.ROOT_PATH, record.path);
        // check if the local file exists
        const fileExists = yield (0, fsUtils_1.stat)(localFilePath);
        let localContent = "";
        if (fileExists) {
            localContent = yield (0, fsUtils_1.readFile)(localFilePath);
            // in case the registry is out of sync (like a terminal file change we didn't catch)
            // we'll update the status of the file using a runtime hash of the local file
            if (record.sha256 !== (0, fsUtils_1.getFileHash)(localContent)) {
                record.status = types_1.XanoStatus.CHANGED;
            }
            else {
                record.status = types_1.XanoStatus.UNCHANGED;
            }
        }
        else {
            record.status = types_1.XanoStatus.NOTFOUND;
        }
        if (record.status === types_1.XanoStatus.UNCHANGED) {
            record.sha256 = (0, fsUtils_1.getFileHash)(script);
            record.original = Buffer.from(script).toString("base64");
            fileOperations.push({
                operation: "update",
                content: script,
                fileType: vscode.FileType.File,
                filePath: localFilePath,
            });
        }
        else if (record.status === types_1.XanoStatus.CHANGED ||
            record.status === types_1.XanoStatus.NOTFOUND) {
            const patch = (0, diff_1.createPatch)(localFilePath, Buffer.from(record.original || "", "base64").toString("utf-8"), localContent);
            const patchedScript = (0, diff_1.applyPatch)(script, patch);
            // patchedScript is null if the patch failed (when facing merge a conflict)
            if (patchedScript) {
                record.sha256 = (0, fsUtils_1.getFileHash)(script);
                record.original = Buffer.from(script).toString("base64");
                fileOperations.push({
                    operation: "update",
                    content: patchedScript,
                    fileType: vscode.FileType.File,
                    filePath: localFilePath,
                });
            }
            else {
                fileOperations.push({
                    operation: "conflict",
                    content: script,
                    fileType: vscode.FileType.File,
                    filePath: localFilePath,
                });
                remoteContentProvider_1.remoteContentProvider.updateContent(record.path, script);
                vscode.commands.executeCommand("xanoscript.viewRemoteDiff", record.path);
            }
        }
        return record;
    });
}
/**
 * Get the index of the first new file in the registry that matches the given object
 *
 * This allows us to detect if a new file has been created locally where the path
 * to the file might not match the name of the object, so we interpret the content
 * of the file to determine its name (and verb for API endpoints).
 *
 * This allows us to merge unpushed local changes with the remote changes.
 *
 * @param registry
 * @param obj
 * @param objType
 * @returns
 */
function getMatchingNewFileIndex(registry, obj, objType) {
    return __awaiter(this, void 0, void 0, function* () {
        for (let index = 0; index < registry.length; index++) {
            const record = registry[index];
            if (record.type === objType && record.status === types_1.XanoStatus.NEW) {
                const content = yield (0, fsUtils_1.readFile)(record.path);
                let isMatch = false;
                if (objType === types_1.XanoObjectType.API_ENDPOINT) {
                    const { verb, path } = (0, getFileInfo_1.getApiEndpointInfo)(content);
                    isMatch =
                        path === obj.name && verb == obj.verb;
                }
                else if (objType === types_1.XanoObjectType.TABLE) {
                    isMatch = (0, getFileInfo_1.getTableInfo)(content).path === obj.name;
                }
                else if (objType === types_1.XanoObjectType.FUNCTION) {
                    isMatch = (0, getFileInfo_1.getFunctionInfo)(content).path === obj.name;
                }
                else if (objType === types_1.XanoObjectType.TASK) {
                    isMatch = (0, getFileInfo_1.getTaskInfo)(content).path === obj.name;
                }
                else if (objType === types_1.XanoObjectType.TOOL) {
                    isMatch = (0, getFileInfo_1.getToolInfo)(content).path === obj.name;
                }
                else if (objType === types_1.XanoObjectType.API_GROUP) {
                    isMatch = (0, getFileInfo_1.getApiGroupInfo)(content).path === obj.name;
                }
                else if (objType === types_1.XanoObjectType.WORKFLOW_TEST) {
                    isMatch = (0, getFileInfo_1.getWorkflowTestInfo)(content).path === obj.name;
                }
                else if (objType === types_1.XanoObjectType.AGENT) {
                    isMatch = (0, getFileInfo_1.getAgentInfo)(content).path === obj.name;
                }
                else if (objType === types_1.XanoObjectType.MCP_SERVER) {
                    isMatch = (0, getFileInfo_1.getMcpServer)(content).path === obj.name;
                }
                else if (objType === types_1.XanoObjectType.AGENT_TRIGGER) {
                    isMatch = (0, getFileInfo_1.getAgentTriggerInfo)(content).path === obj.name;
                }
                else if (objType === types_1.XanoObjectType.TABLE_TRIGGER) {
                    isMatch = (0, getFileInfo_1.getTableTriggerInfo)(content).path === obj.name;
                }
                else if (objType === types_1.XanoObjectType.MCP_SERVER_TRIGGER) {
                    isMatch = (0, getFileInfo_1.getMcpServerTriggerInfo)(content).path === obj.name;
                }
                else if (objType === types_1.XanoObjectType.ADD_ON) {
                    isMatch = (0, getFileInfo_1.getAddOnInfo)(content).path === obj.name;
                }
                else if (objType === types_1.XanoObjectType.MIDDLEWARE) {
                    isMatch = (0, getFileInfo_1.getMiddlewareInfo)(content).path === obj.name;
                }
                else if (objType === types_1.XanoObjectType.REALTIME_CHANNEL) {
                    isMatch = (0, getFileInfo_1.getRealtimeInfo)(content).path === obj.name;
                }
                else if (objType === types_1.XanoObjectType.REALTIME_TRIGGER) {
                    isMatch = (0, getFileInfo_1.getRealtimeTriggerInfo)(content).path === obj.name;
                }
                if (isMatch) {
                    return index;
                }
            }
        }
        return -1;
    });
}
/**
 * Compare a remote xanoscript with a local file
 * @param obj XanoObject the remote Xanoscript record
 * @param registryRecord RegistryRecord The local registry record
 * @returns true if the remote and local files have the same content
 */
function compareWithLocalFile(obj, registryRecord) {
    return __awaiter(this, void 0, void 0, function* () {
        const localFilePath = (0, path_1.join)(config_1.ROOT_PATH, registryRecord.path);
        const localScript = yield (0, fsUtils_1.readFile)(localFilePath);
        return obj.xanoscript.status === "ok" && obj.xanoscript.value === localScript;
    });
}
//# sourceMappingURL=pull.js.map