"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XanoObjectType = exports.XanoStatus = void 0;
var XanoStatus;
(function (XanoStatus) {
    XanoStatus["NEW"] = "new";
    XanoStatus["UNCHANGED"] = "unchanged";
    XanoStatus["CHANGED"] = "changed";
    XanoStatus["ERROR"] = "error";
    XanoStatus["NOTFOUND"] = "notfound";
})(XanoStatus || (exports.XanoStatus = XanoStatus = {}));
var XanoObjectType;
(function (XanoObjectType) {
    XanoObjectType["FUNCTION"] = "function";
    XanoObjectType["TABLE"] = "table";
    XanoObjectType["API_GROUP"] = "api_group";
    XanoObjectType["API_ENDPOINT"] = "api_endpoint";
    XanoObjectType["TASK"] = "task";
    XanoObjectType["TOOL"] = "tool";
    XanoObjectType["WORKFLOW_TEST"] = "workflow_test";
    XanoObjectType["TABLE_TRIGGER"] = "table_trigger";
    XanoObjectType["MCP_SERVER"] = "mcp_server";
    XanoObjectType["MCP_SERVER_TRIGGER"] = "mcp_server_trigger";
    XanoObjectType["AGENT"] = "agent";
    XanoObjectType["AGENT_TRIGGER"] = "agent_trigger";
    XanoObjectType["ADD_ON"] = "add_on";
    XanoObjectType["MIDDLEWARE"] = "middleware";
    XanoObjectType["REALTIME_CHANNEL"] = "realtime_channel";
    XanoObjectType["REALTIME_TRIGGER"] = "realtime_trigger";
    XanoObjectType["UNKNOWN"] = "unknown";
})(XanoObjectType || (exports.XanoObjectType = XanoObjectType = {}));
//# sourceMappingURL=types.js.map