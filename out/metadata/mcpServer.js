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
exports.fetchMcpServer = fetchMcpServer;
exports.updateMcpServer = updateMcpServer;
exports.fetchMcpServers = fetchMcpServers;
exports.createMcpServerFromXs = createMcpServerFromXs;
exports.createMcpServer = createMcpServer;
exports.deleteMcpServer = deleteMcpServer;
const request_1 = require("./request");
const config_1 = require("../config");
const vscode = require("vscode");
/**
 * Return the Xanoscript version of a given MCP Server within your workspace.
 *
 * @param instanceName unique name of the instance abfc-1234-efgh
 * @param workspaceId the workspace ID within the instance
 * @param mcpServerId the MCP server ID to fetch the Xanoscript from
 * @returns
 */
function fetchMcpServer(instanceName, workspaceId, mcpServerId) {
    const vsconfig = vscode.workspace.getConfiguration("xanoscript");
    const draftMode = vsconfig.get("draftMode", false);
    const queryParams = new URLSearchParams();
    queryParams.set("include_draft", draftMode ? "true" : "false");
    queryParams.set("include_xanoscript", "true");
    return (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/mcp_server/${mcpServerId}?${queryParams.toString()}`);
}
/**
 * Update the Xanoscript version of a given MCP Server within your workspace.
 *
 * @param instanceName unique name of the instance abfc-1234-efgh
 * @param workspaceId the workspace ID within the instance
 * @param mcpServerId the MCP server ID to fetch the Xanoscript from
 * @param script the new Xanoscript to update the MCP server with
 */
function updateMcpServer(instanceName, workspaceId, mcpServerId, script) {
    return __awaiter(this, void 0, void 0, function* () {
        const vsconfig = vscode.workspace.getConfiguration("xanoscript");
        const draftMode = vsconfig.get("draftMode", false);
        const queryParams = new URLSearchParams();
        queryParams.set("publish", draftMode ? "false" : "true");
        queryParams.set("include_draft", draftMode ? "true" : "false");
        queryParams.set("include_xanoscript", "true");
        yield (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/mcp_server/${mcpServerId}?${queryParams.toString()}`, {
            method: "PUT",
            body: script,
            headers: {
                "Content-Type": "text/x-xanoscript",
            },
        });
        return fetchMcpServer(instanceName, workspaceId, mcpServerId);
    });
}
/**
 * Fetch the list of MCP servers within your workspace.
 *
 * @param instanceName unique name of the instance abfc-1234-efgh
 * @param workspaceId the workspace ID within the instance
 * @returns list of MCP server objects
 */
function fetchMcpServers(instanceName, workspaceId) {
    return __awaiter(this, void 0, void 0, function* () {
        let nextPage = 1;
        const mcpServers = [];
        const vsconfig = vscode.workspace.getConfiguration("xanoscript");
        const draftMode = vsconfig.get("draftMode", false);
        const queryParams = new URLSearchParams();
        queryParams.set("include_draft", draftMode ? "true" : "false");
        queryParams.set("per_page", "20");
        queryParams.set("branch", encodeURIComponent(config_1.config.branch));
        queryParams.set("include_xanoscript", "true");
        while (nextPage) {
            queryParams.set("page", nextPage.toString());
            const response = yield (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/mcp_server?${queryParams.toString()}`);
            mcpServers.push(...response.items);
            nextPage = response.nextPage;
        }
        return mcpServers;
    });
}
/**
 * Create a new MCP server using XanoScript
 * @param instanceName unique name of the instance abfc-1234-efgh
 * @param workspaceId the workspace ID within the instance
 * @param script the XanoScript to create the MCP server with
 */
function createMcpServerFromXs(instanceName, workspaceId, script) {
    return __awaiter(this, void 0, void 0, function* () {
        const queryParams = new URLSearchParams();
        queryParams.set("branch", config_1.config.branch);
        queryParams.set("include_xanoscript", "true");
        return (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/mcp_server?${queryParams.toString()}`, {
            method: "POST",
            body: script,
            headers: {
                "Content-Type": "text/x-xanoscript",
            },
        });
    });
}
/**
 * Create a new MCP Server within your workspace.
 * @param instanceName unique name of the instance abfc-1234-efgh
 * @param workspaceId the workspace ID within the instance
 * @param name the name of the MCP server
 */
function createMcpServer(instanceName, workspaceId, name) {
    return __awaiter(this, void 0, void 0, function* () {
        const queryParams = new URLSearchParams();
        queryParams.set("branch", config_1.config.branch);
        queryParams.set("include_xanoscript", "true");
        // name should start with a letter and contain only letters, numbers, and underscores
        if (!/^[a-zA-Z][a-zA-Z0-9_]*$/.test(name)) {
            throw new Error("MCP server name must start with a letter and contain only letters, numbers, and underscores");
        }
        const script = `mcp_server ${name} {
  input {
    text message_id
  }
  stack {
  }
}`;
        return (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/mcp_server?${queryParams.toString()}`, {
            method: "POST",
            body: script,
            headers: {
                "Content-Type": "text/x-xanoscript",
            },
        });
    });
}
/**
 * Delete a MCP server within your workspace.
 * @param instanceName unique name of the instance abfc-1234-efgh
 * @param workspaceId the workspace ID within the instance
 * @param mcpServerId the MCP server ID to delete
 */
function deleteMcpServer(instanceName, workspaceId, mcpServerId) {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/mcp_server/${mcpServerId}`, {
            method: "DELETE",
        });
    });
}
//# sourceMappingURL=mcpServer.js.map