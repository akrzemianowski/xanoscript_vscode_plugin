"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMiddlewareInfo = exports.getWorkflowTestInfo = exports.getToolInfo = exports.getTaskInfo = exports.getApiGroupInfo = exports.getTableTriggerInfo = exports.getTableInfo = exports.getMcpTriggerServer = exports.getMcpServerTriggerInfo = exports.getMcpServer = exports.getAgentTriggerInfo = exports.getAgentInfo = exports.getRealtimeTriggerInfo = exports.getRealtimeInfo = exports.getAddOnInfo = exports.getFunctionInfo = exports.getSimpleSignature = void 0;
exports.getApiEndpointInfo = getApiEndpointInfo;
/**
 * Get a simple signature for a function, task, or other object.
 *
 * This would not work on more complex signatures like query accepting
 * additional parameters.
 * @param keyword The keyword to match (e.g. "function", "task").
 * @returns A function that takes the content and returns the path.
 */
const getSimpleSignature = (keyword) => (content) => {
    const objectInfo = content.match(new RegExp(`${keyword}\\s+["']?([a-zA-Z0-9_/ ]+)["']?\\s*{`));
    if (!objectInfo) {
        throw new Error(`No ${keyword} found in the content: ${content.split("\n")[0]}`);
    }
    const path = objectInfo[1].trim();
    return { path };
};
exports.getSimpleSignature = getSimpleSignature;
exports.getFunctionInfo = (0, exports.getSimpleSignature)("function");
exports.getAddOnInfo = (0, exports.getSimpleSignature)("add_on");
exports.getRealtimeInfo = (0, exports.getSimpleSignature)("realtime");
exports.getRealtimeTriggerInfo = (0, exports.getSimpleSignature)("realtime_trigger");
exports.getAgentInfo = (0, exports.getSimpleSignature)("agent");
exports.getAgentTriggerInfo = (0, exports.getSimpleSignature)("agent_trigger");
exports.getMcpServer = (0, exports.getSimpleSignature)("mcp_server");
exports.getMcpServerTriggerInfo = (0, exports.getSimpleSignature)("mcp_server_trigger");
exports.getMcpTriggerServer = (0, exports.getSimpleSignature)("mcp_trigger");
exports.getTableInfo = (0, exports.getSimpleSignature)("table");
exports.getTableTriggerInfo = (0, exports.getSimpleSignature)("table_trigger");
exports.getApiGroupInfo = (0, exports.getSimpleSignature)("api_group");
exports.getTaskInfo = (0, exports.getSimpleSignature)("task");
exports.getToolInfo = (0, exports.getSimpleSignature)("tool");
exports.getWorkflowTestInfo = (0, exports.getSimpleSignature)("workflow_test");
exports.getMiddlewareInfo = (0, exports.getSimpleSignature)("middleware");
function getApiEndpointInfo(content) {
    // query "fo%20o/bar" verb=DELETE {\n}
    // query "fo o/bar" verb=DELETE {\n}
    // query foo/{user_id} verb=POST {\n}
    const apiEndpointInfo = content.match(/query\s+["']?([a-zA-Z0-9_/{} ]+)["']?\s+verb=([A-Z]+)\s*{/);
    if (!apiEndpointInfo) {
        throw new Error(`No API endpoint found in the content:  ${content.split("\n")[0]}`);
    }
    const path = apiEndpointInfo[1].trim();
    const verb = apiEndpointInfo[2].trim();
    return { verb, path };
}
//# sourceMappingURL=getFileInfo.js.map