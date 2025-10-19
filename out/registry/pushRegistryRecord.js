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
exports.pushRegistryRecord = void 0;
const vscode = require("vscode");
const registry_1 = require("./registry");
const dbo_1 = require("../metadata/dbo");
const config_1 = require("../config");
const types_1 = require("./types");
const path_1 = require("path");
const fsUtils_1 = require("./fsUtils");
const customFunction_1 = require("../metadata/customFunction");
const task_1 = require("../metadata/task");
const tool_1 = require("../metadata/tool");
const diagnostic_1 = require("../tooling/diagnostic");
const request_1 = require("../metadata/request");
const api_1 = require("../metadata/api");
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
/**
 * Push a single registry record to Xano
 * @param registry
 * @param record
 * @returns
 */
const pushRegistryRecord = (registry, record) => __awaiter(void 0, void 0, void 0, function* () {
    switch (record.type) {
        case types_1.XanoObjectType.TABLE:
            registry = yield pushRecord(registry, record, (script) => (0, dbo_1.createTableFromXs)(config_1.config.instanceName, config_1.config.workspaceId, script), (id, script) => (0, dbo_1.updateTable)(config_1.config.instanceName, config_1.config.workspaceId, id, script), (id) => (0, dbo_1.deleteTable)(config_1.config.instanceName, config_1.config.workspaceId, id));
            break;
        case types_1.XanoObjectType.FUNCTION:
            registry = yield pushRecord(registry, record, (script) => (0, customFunction_1.createCustomFunctionFromXs)(config_1.config.instanceName, config_1.config.workspaceId, script), (id, script) => (0, customFunction_1.updateCustomFunction)(config_1.config.instanceName, config_1.config.workspaceId, id, script), (functionId) => (0, customFunction_1.deleteCustomFunction)(config_1.config.instanceName, config_1.config.workspaceId, functionId));
            break;
        case types_1.XanoObjectType.TASK:
            registry = yield pushRecord(registry, record, (script) => (0, task_1.createTaskFromXs)(config_1.config.instanceName, config_1.config.workspaceId, script), (id, script) => (0, task_1.updateTaskScript)(config_1.config.instanceName, config_1.config.workspaceId, id, script), (taskId) => (0, task_1.deleteTask)(config_1.config.instanceName, config_1.config.workspaceId, taskId));
            break;
        case types_1.XanoObjectType.TOOL:
            registry = yield pushRecord(registry, record, (script) => (0, tool_1.createToolFromXs)(config_1.config.instanceName, config_1.config.workspaceId, script), (id, script) => (0, tool_1.updateToolScript)(config_1.config.instanceName, config_1.config.workspaceId, id, script), (toolId) => (0, tool_1.deleteTool)(config_1.config.instanceName, config_1.config.workspaceId, toolId));
            break;
        case types_1.XanoObjectType.WORKFLOW_TEST:
            registry = yield pushRecord(registry, record, (script) => (0, workflowTest_1.createWorkflowTestFromXs)(config_1.config.instanceName, config_1.config.workspaceId, script), (id, script) => (0, workflowTest_1.updateWorkflowTest)(config_1.config.instanceName, config_1.config.workspaceId, id, script), (workflowTestId) => (0, workflowTest_1.deleteWorkflowTest)(config_1.config.instanceName, config_1.config.workspaceId, workflowTestId));
            break;
        case types_1.XanoObjectType.API_GROUP:
            registry = yield pushRecord(registry, record, (script) => (0, api_1.createApiGroupFromXs)(config_1.config.instanceName, config_1.config.workspaceId, script), (id, script) => (0, api_1.updateApiGroup)(config_1.config.instanceName, config_1.config.workspaceId, id, script), (apiGroupId) => (0, api_1.deleteApiGroup)(config_1.config.instanceName, config_1.config.workspaceId, apiGroupId));
            break;
        case types_1.XanoObjectType.API_ENDPOINT:
            registry = yield pushRecord(registry, record, (script) => {
                const apiGroup = getApiGroupForPath(registry, record.path);
                if (!apiGroup || apiGroup.id === 0) {
                    throw new Error(`API group not found for ${record.path}. Please create the API group first.`);
                }
                return (0, api_1.createApiEndpointFromXs)(config_1.config.instanceName, config_1.config.workspaceId, apiGroup.id, script);
            }, (id, script) => {
                const apiGroup = getApiGroupForPath(registry, record.path);
                if (!apiGroup || apiGroup.id === 0) {
                    throw new Error(`API group not found for ${record.path}. Please create or stage its API group first.`);
                }
                return (0, api_1.updateApiEndpoint)(config_1.config.instanceName, config_1.config.workspaceId, apiGroup.id, id, script);
            }, (id) => __awaiter(void 0, void 0, void 0, function* () {
                const apiGroup = getApiGroupForPath(registry, record.path);
                // the api group doesn't exist anymore, we can delete the record locally
                if (apiGroup) {
                    return (0, api_1.deleteApiEndpoint)(config_1.config.instanceName, config_1.config.workspaceId, (apiGroup === null || apiGroup === void 0 ? void 0 : apiGroup.id) || 0, id);
                }
            }));
            break;
        case types_1.XanoObjectType.AGENT:
            registry = yield pushRecord(registry, record, (script) => (0, agent_1.createAgentFromXs)(config_1.config.instanceName, config_1.config.workspaceId, script), (agentId, script) => (0, agent_1.updateAgent)(config_1.config.instanceName, config_1.config.workspaceId, agentId, script), (agentId) => (0, agent_1.deleteAgent)(config_1.config.instanceName, config_1.config.workspaceId, agentId));
            break;
        case types_1.XanoObjectType.AGENT_TRIGGER:
            registry = yield pushRecord(registry, record, (script) => (0, agentTrigger_1.createAgentTriggerFromXs)(config_1.config.instanceName, config_1.config.workspaceId, script), (agentTriggerId, script) => (0, agentTrigger_1.updateAgentTriggerScript)(config_1.config.instanceName, config_1.config.workspaceId, agentTriggerId, script), (agentTriggerId) => (0, agentTrigger_1.deleteAgentTrigger)(config_1.config.instanceName, config_1.config.workspaceId, agentTriggerId));
            break;
        case types_1.XanoObjectType.MCP_SERVER:
            registry = yield pushRecord(registry, record, (script) => (0, mcpServer_1.createMcpServerFromXs)(config_1.config.instanceName, config_1.config.workspaceId, script), (mcpServerId, script) => (0, mcpServer_1.updateMcpServer)(config_1.config.instanceName, config_1.config.workspaceId, mcpServerId, script), (mcpServerId) => (0, mcpServer_1.deleteMcpServer)(config_1.config.instanceName, config_1.config.workspaceId, mcpServerId));
            break;
        case types_1.XanoObjectType.MCP_SERVER_TRIGGER:
            registry = yield pushRecord(registry, record, (script) => (0, mcpServerTrigger_1.createMcpServerTriggerFromXs)(config_1.config.instanceName, config_1.config.workspaceId, script), (mcpServerTriggerId, script) => (0, mcpServerTrigger_1.updateMcpServerTriggerScript)(config_1.config.instanceName, config_1.config.workspaceId, mcpServerTriggerId, script), (mcpServerTriggerId) => (0, mcpServerTrigger_1.deleteMcpServerTrigger)(config_1.config.instanceName, config_1.config.workspaceId, mcpServerTriggerId));
            break;
        case types_1.XanoObjectType.TABLE_TRIGGER:
            registry = yield pushRecord(registry, record, (script) => (0, tableTrigger_1.createTableTriggerFromXs)(config_1.config.instanceName, config_1.config.workspaceId, script), (tableTriggerId, script) => (0, tableTrigger_1.updateTableTrigger)(config_1.config.instanceName, config_1.config.workspaceId, tableTriggerId, script), (tableTriggerId) => (0, tableTrigger_1.deleteTableTrigger)(config_1.config.instanceName, config_1.config.workspaceId, tableTriggerId));
            break;
        case types_1.XanoObjectType.ADD_ON:
            registry = yield pushRecord(registry, record, (script) => (0, addon_1.createAddonFromXs)(config_1.config.instanceName, config_1.config.workspaceId, script), (addOnId, script) => (0, addon_1.updateAddon)(config_1.config.instanceName, config_1.config.workspaceId, addOnId, script), (addOnId) => (0, addon_1.deleteAddon)(config_1.config.instanceName, config_1.config.workspaceId, addOnId));
            break;
        case types_1.XanoObjectType.MIDDLEWARE:
            registry = yield pushRecord(registry, record, (script) => (0, middleware_1.createMiddlewareFromXs)(config_1.config.instanceName, config_1.config.workspaceId, script), (middlewareId, script) => (0, middleware_1.updateMiddleware)(config_1.config.instanceName, config_1.config.workspaceId, middlewareId, script), (middlewareId) => (0, middleware_1.deleteMiddleware)(config_1.config.instanceName, config_1.config.workspaceId, middlewareId));
            break;
        case types_1.XanoObjectType.REALTIME_CHANNEL:
            registry = yield pushRecord(registry, record, (script) => (0, realtime_1.createRealtimeChannelFromXs)(config_1.config.instanceName, config_1.config.workspaceId, script), (channelId, script) => (0, realtime_1.updateRealtimeChannel)(config_1.config.instanceName, config_1.config.workspaceId, channelId, script), (channelId) => (0, realtime_1.deleteRealtimeChannel)(config_1.config.instanceName, config_1.config.workspaceId, channelId));
            break;
        case types_1.XanoObjectType.REALTIME_TRIGGER:
            registry = yield pushRecord(registry, record, (script) => (0, realtime_1.createRealtimeTriggerFromXs)(config_1.config.instanceName, config_1.config.workspaceId, script), (triggerId, script) => (0, realtime_1.updateRealtimeTrigger)(config_1.config.instanceName, config_1.config.workspaceId, triggerId, script), (triggerId) => (0, realtime_1.deleteRealtimeTrigger)(config_1.config.instanceName, config_1.config.workspaceId, triggerId));
            break;
        default:
            console.error(`push(): Unknown record type: ${record.type}`);
            break;
    }
    return registry;
});
exports.pushRegistryRecord = pushRegistryRecord;
/**
 * Handle pushing changes to Xano
 * @param registry local file registry
 * @param record the record to push
 * @param createObject
 * @param updateObject
 * @param deleteObject
 * @returns
 */
function pushRecord(registry, record, createObject, updateObject, deleteObject) {
    return __awaiter(this, void 0, void 0, function* () {
        const fileUri = vscode.Uri.file((0, path_1.join)(config_1.ROOT_PATH, record.path));
        if (record.status === types_1.XanoStatus.NEW) {
            try {
                const content = yield vscode.workspace.fs.readFile(fileUri);
                console.info(`Pushing new <${record.type}:${record.id}>`, record.path);
                const obj = yield createObject(content.toString());
                yield vscode.workspace.fs.writeFile(fileUri, Buffer.from(yield (0, xsUtils_1.getXanoscriptContent)(record.type, obj), "utf-8"));
                return (0, registry_1.updateRegistryByPath)(registry, record.path, {
                    id: obj.id,
                    sha256: (0, fsUtils_1.getFileHash)(yield (0, xsUtils_1.getXanoscriptContent)(record.type, obj)),
                    original: Buffer.from(yield (0, xsUtils_1.getXanoscriptContent)(record.type, obj)).toString("base64"),
                    status: types_1.XanoStatus.UNCHANGED,
                    staged: false,
                });
            }
            catch (error) {
                if (error instanceof request_1.XsSyntaxError) {
                    // highlight the error in the editor
                    (0, diagnostic_1.addErrorToDiagnosticCollection)(diagnostic_1.diagnosticCollection, fileUri, error.syntaxError.payload.line, 0, error.syntaxError.payload.col, error.syntaxError.message);
                }
                vscode.window.showErrorMessage(`Error creating new ${record.type} on Xano: ${error}`);
                throw error;
            }
        }
        else if (record.status === types_1.XanoStatus.CHANGED) {
            try {
                const content = yield vscode.workspace.fs.readFile(fileUri);
                console.info(`Pushing update <${record.type}:${record.id}>`, record.path);
                const obj = yield updateObject(record.id, content.toString());
                yield vscode.workspace.fs.writeFile(fileUri, Buffer.from(yield (0, xsUtils_1.getXanoscriptContent)(record.type, obj), "utf-8"));
                return (0, registry_1.updateRegistryByPath)(registry, record.path, {
                    id: obj.id,
                    sha256: (0, fsUtils_1.getFileHash)(yield (0, xsUtils_1.getXanoscriptContent)(record.type, obj)),
                    original: Buffer.from(yield (0, xsUtils_1.getXanoscriptContent)(record.type, obj)).toString("base64"),
                    status: types_1.XanoStatus.UNCHANGED,
                    staged: false,
                });
            }
            catch (error) {
                if (error instanceof request_1.XsSyntaxError) {
                    // highlight the error in the editor
                    (0, diagnostic_1.addErrorToDiagnosticCollection)(diagnostic_1.diagnosticCollection, fileUri, error.syntaxError.payload.line, 0, error.syntaxError.payload.col, error.syntaxError.message);
                }
                vscode.window.showErrorMessage(`Error pushing ${record.path} changes to Xano: ${error}`);
                throw error;
            }
        }
        else if (record.status === types_1.XanoStatus.NOTFOUND) {
            // confirm you want to delete the file
            const confirmDelete = yield vscode.window.showWarningMessage(`The file ${record.path} was deleted locally. Do you want to delete it from the server?`, { modal: true }, { title: "Delete" });
            if (confirmDelete) {
                try {
                    yield deleteObject(record.id);
                    return (0, registry_1.removeRegistryByPath)(registry, record.path);
                }
                catch (error) {
                    // if the file isn't found then we can safely remove it from the registry
                    if (error instanceof request_1.XsNotFoundError) {
                        return (0, registry_1.removeRegistryByPath)(registry, record.path);
                    }
                    else {
                        vscode.window.showErrorMessage(`Error deleting ${record.path} on Xano: ${error}`);
                    }
                    throw error;
                }
            }
        }
        return registry;
    });
}
/**
 * Get the API group for a specific path
 * @param registry
 * @param path
 * @returns
 */
function getApiGroupForPath(registry, path) {
    const pathParts = path.split("/");
    // remove the last part of the path
    pathParts.pop();
    path = (0, path_1.join)(pathParts.join("/"), "api_group.xs");
    return (0, registry_1.getRegistryByPath)(registry, path);
}
//# sourceMappingURL=pushRegistryRecord.js.map