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
exports.deleteMcpServerTrigger = exports.createMcpServerTrigger = exports.createMcpServerTriggerFromXs = exports.fetchMcpServerTriggers = exports.updateMcpServerTriggerScript = exports.fetchMcpServerTrigger = void 0;
const request_1 = require("./request");
const config_1 = require("../config");
const vscode = require("vscode");
/**
 * Return the Xanoscript version of a given MCP Server Trigger within your workspace.
 *
 * @param instanceName unique name of the instance abfc-1234-efgh
 * @param workspaceId the workspace ID within the instance
 * @param triggerId the MCP server trigger ID to fetch the Xanoscript from
 * @returns
 */
function fetchMcpServerTrigger(instanceName, workspaceId, triggerId) {
    const vsconfig = vscode.workspace.getConfiguration("xanoscript");
    const draftMode = vsconfig.get("draftMode", false);
    const queryParams = new URLSearchParams();
    queryParams.set("include_draft", draftMode ? "true" : "false");
    queryParams.set("include_xanoscript", "true");
    return (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/mcp_server/trigger/${triggerId}?${queryParams.toString()}`);
}
exports.fetchMcpServerTrigger = fetchMcpServerTrigger;
/**
 * Update the Xanoscript version of a given MCP Server Trigger within your workspace.
 *
 * @param instanceName unique name of the instance abfc-1234-efgh
 * @param workspaceId the workspace ID within the instance
 * @param triggerId the MCP server trigger ID to fetch the Xanoscript from
 * @param script the new Xanoscript to update the MCP server trigger with
 */
function updateMcpServerTriggerScript(instanceName, workspaceId, triggerId, script) {
    return __awaiter(this, void 0, void 0, function* () {
        const vsconfig = vscode.workspace.getConfiguration("xanoscript");
        const draftMode = vsconfig.get("draftMode", false);
        const queryParams = new URLSearchParams();
        queryParams.set("publish", draftMode ? "false" : "true");
        queryParams.set("include_draft", draftMode ? "true" : "false");
        queryParams.set("include_xanoscript", "true");
        return (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/mcp_server/trigger/${triggerId}?${queryParams.toString()}`, {
            method: "PUT",
            body: script,
            headers: {
                "Content-Type": "text/x-xanoscript",
            },
        });
    });
}
exports.updateMcpServerTriggerScript = updateMcpServerTriggerScript;
/**
 * Fetch the list of MCP server triggers within your workspace.
 *
 * @param instanceName unique name of the instance abfc-1234-efgh
 * @param workspaceId the workspace ID within the instance
 * @param mcpServerIds array of MCP server IDs to fetch triggers for
 * @returns list of MCP server trigger objects
 */
function fetchMcpServerTriggers(instanceName, workspaceId) {
    return __awaiter(this, void 0, void 0, function* () {
        let nextPage = 1;
        const mcpServerTriggers = [];
        const vsconfig = vscode.workspace.getConfiguration("xanoscript");
        const draftMode = vsconfig.get("draftMode", false);
        const queryParams = new URLSearchParams();
        queryParams.set("include_draft", draftMode ? "true" : "false");
        queryParams.set("per_page", "20");
        queryParams.set("branch", encodeURIComponent(config_1.config.branch));
        queryParams.set("include_xanoscript", "true");
        while (nextPage) {
            queryParams.set("page", nextPage.toString());
            const response = yield (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/mcp_server/trigger?${queryParams.toString()}`);
            mcpServerTriggers.push(...response.items);
            nextPage = response.nextPage;
        }
        return mcpServerTriggers;
    });
}
exports.fetchMcpServerTriggers = fetchMcpServerTriggers;
/**
 * Create a new MCP server trigger using XanoScript
 * @param instanceName unique name of the instance abfc-1234-efgh
 * @param workspaceId the workspace ID within the instance
 * @param script the XanoScript to create the MCP server trigger with
 */
function createMcpServerTriggerFromXs(instanceName, workspaceId, script) {
    return __awaiter(this, void 0, void 0, function* () {
        const queryParams = new URLSearchParams();
        queryParams.set("branch", config_1.config.branch);
        queryParams.set("include_xanoscript", "true");
        return (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/mcp_server/trigger?${queryParams.toString()}`, {
            method: "POST",
            body: script,
            headers: {
                "Content-Type": "text/x-xanoscript",
            },
        });
    });
}
exports.createMcpServerTriggerFromXs = createMcpServerTriggerFromXs;
/**
 * Create a new MCP Server Trigger within your workspace.
 * @param instanceName unique name of the instance abfc-1234-efgh
 * @param workspaceId the workspace ID within the instance
 * @param name the name of the MCP server trigger
 */
function createMcpServerTrigger(instanceName, workspaceId, name) {
    return __awaiter(this, void 0, void 0, function* () {
        const queryParams = new URLSearchParams();
        queryParams.set("branch", config_1.config.branch);
        queryParams.set("include_xanoscript", "true");
        // name should start with a letter and contain only letters, numbers, and underscores
        if (!/^[a-zA-Z][a-zA-Z0-9_]*$/.test(name)) {
            throw new Error("MCP server trigger name must start with a letter and contain only letters, numbers, and underscores");
        }
        const script = `mcp_server_trigger "${name}" {
  description = "does something"

  input {
    object toolset {
      schema {
        int id
        text name
        text instructions
      }
    }
  
    object[] tools {
      schema {
        int id
        text name
        text instructions
      }
    }
  }

  stack {
    var $toolset {
      value = $input.toolset
    }
  
    var $tools {
      value = $input.tools
    }
  }

  response = {toolset: $var.toolset, tools: $tools}
  actions = {connection: true}
}`;
        return (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/mcp_server/trigger?${queryParams.toString()}`, {
            method: "POST",
            body: script,
            headers: {
                "Content-Type": "text/x-xanoscript",
            },
        });
    });
}
exports.createMcpServerTrigger = createMcpServerTrigger;
/**
 * Delete an MCP server trigger within your workspace.
 * @param instanceName unique name of the instance abfc-1234-efgh
 * @param workspaceId the workspace ID within the instance
 * @param triggerId the MCP server trigger ID to delete
 */
function deleteMcpServerTrigger(instanceName, workspaceId, triggerId) {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/mcp_server/trigger/${triggerId}`, {
            method: "DELETE",
        });
    });
}
exports.deleteMcpServerTrigger = deleteMcpServerTrigger;
//# sourceMappingURL=mcpServerTrigger.js.map