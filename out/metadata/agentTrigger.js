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
exports.fetchAgentTrigger = fetchAgentTrigger;
exports.updateAgentTriggerScript = updateAgentTriggerScript;
exports.fetchAgentTriggers = fetchAgentTriggers;
exports.createAgentTriggerFromXs = createAgentTriggerFromXs;
exports.createAgentTrigger = createAgentTrigger;
exports.deleteAgentTrigger = deleteAgentTrigger;
exports.updateAgentTriggerSecurity = updateAgentTriggerSecurity;
const request_1 = require("./request");
const config_1 = require("../config");
const vscode = require("vscode");
/**
 * Return the Xanoscript version of a given Agent Trigger within your workspace.
 *
 * @param instanceName unique name of the instance abfc-1234-efgh
 * @param workspaceId the workspace ID within the instance
 * @param triggerId the agent trigger ID to fetch the Xanoscript from
 * @returns
 */
function fetchAgentTrigger(instanceName, workspaceId, triggerId) {
    const vsconfig = vscode.workspace.getConfiguration("xanoscript");
    const draftMode = vsconfig.get("draftMode", false);
    const queryParams = new URLSearchParams();
    queryParams.set("include_draft", draftMode ? "true" : "false");
    queryParams.set("include_xanoscript", "true");
    return (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/agent/trigger/${triggerId}?${queryParams.toString()}`);
}
/**
 * Update the Xanoscript version of a given Agent Trigger within your workspace.
 *
 * @param instanceName unique name of the instance abfc-1234-efgh
 * @param workspaceId the workspace ID within the instance
 * @param triggerId the agent trigger ID to fetch the Xanoscript from
 * @param script the new Xanoscript to update the agent trigger with
 */
function updateAgentTriggerScript(instanceName, workspaceId, triggerId, script) {
    return __awaiter(this, void 0, void 0, function* () {
        const vsconfig = vscode.workspace.getConfiguration("xanoscript");
        const draftMode = vsconfig.get("draftMode", false);
        const queryParams = new URLSearchParams();
        queryParams.set("publish", draftMode ? "false" : "true");
        queryParams.set("include_draft", draftMode ? "true" : "false");
        queryParams.set("include_xanoscript", "true");
        return (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/agent/trigger/${triggerId}?${queryParams.toString()}`, {
            method: "PUT",
            body: script,
            headers: {
                "Content-Type": "text/x-xanoscript",
            },
        });
    });
}
/**
 * Fetch the list of agent triggers within your workspace.
 *
 * @param instanceName unique name of the instance abfc-1234-efgh
 * @param workspaceId the workspace ID within the instance
 * @returns list of agent trigger objects
 */
function fetchAgentTriggers(instanceName, workspaceId) {
    return __awaiter(this, void 0, void 0, function* () {
        let nextPage = 1;
        const agentTriggers = [];
        const vsconfig = vscode.workspace.getConfiguration("xanoscript");
        const draftMode = vsconfig.get("draftMode", false);
        const queryParams = new URLSearchParams();
        queryParams.set("include_draft", draftMode ? "true" : "false");
        queryParams.set("per_page", "20");
        queryParams.set("branch", config_1.config.branch);
        queryParams.set("include_xanoscript", "true");
        while (nextPage) {
            queryParams.set("page", nextPage.toString());
            const response = yield (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/agent/trigger?${queryParams.toString()}`);
            agentTriggers.push(...response.items);
            nextPage = response.nextPage;
        }
        return agentTriggers;
    });
}
/**
 * Create a new agent trigger using XanoScript
 * @param instanceName unique name of the instance abfc-1234-efgh
 * @param workspaceId the workspace ID within the instance
 * @param script the XanoScript to create the agent trigger with
 */
function createAgentTriggerFromXs(instanceName, workspaceId, script) {
    return __awaiter(this, void 0, void 0, function* () {
        const queryParams = new URLSearchParams();
        queryParams.set("branch", config_1.config.branch);
        queryParams.set("include_xanoscript", "true");
        return (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/agent/trigger?${queryParams.toString()}`, {
            method: "POST",
            body: script,
            headers: {
                "Content-Type": "text/x-xanoscript",
            },
        });
    });
}
/**
 * Create a new Agent Trigger within your workspace.
 * @param instanceName unique name of the instance abfc-1234-efgh
 * @param workspaceId the workspace ID within the instance
 * @param name the name of the agent trigger
 */
function createAgentTrigger(instanceName, workspaceId, name) {
    return __awaiter(this, void 0, void 0, function* () {
        const queryParams = new URLSearchParams();
        queryParams.set("branch", config_1.config.branch);
        queryParams.set("include_xanoscript", "true");
        // name should start with a letter and contain only letters, numbers, and underscores
        if (!/^[a-zA-Z][a-zA-Z0-9_]*$/.test(name)) {
            throw new Error("Agent trigger name must start with a letter and contain only letters, numbers, and underscores");
        }
        const script = `agent_trigger ${name} {
  agent = "agent_name"
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
    var $x1 {
      value = 123
    }
  }
  actions = {connection: true}
}`;
        return (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/agent/trigger?${queryParams.toString()}`, {
            method: "POST",
            body: script,
            headers: {
                "Content-Type": "text/x-xanoscript",
            },
        });
    });
}
/**
 * Delete an agent trigger within your workspace.
 * @param instanceName unique name of the instance abfc-1234-efgh
 * @param workspaceId the workspace ID within the instance
 * @param triggerId the agent trigger ID to delete
 */
function deleteAgentTrigger(instanceName, workspaceId, triggerId) {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/agent/trigger/${triggerId}`, {
            method: "DELETE",
        });
    });
}
/**
 * Update agent trigger security configuration and access controls.
 * @param instanceName unique name of the instance abfc-1234-efgh
 * @param workspaceId the workspace ID within the instance
 * @param triggerId the agent trigger ID to update security for
 * @param securityConfig the security configuration object
 * @returns
 */
function updateAgentTriggerSecurity(instanceName, workspaceId, triggerId, securityConfig) {
    return (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/agent/trigger/${triggerId}/security`, {
        method: "PUT",
        body: JSON.stringify(securityConfig),
        headers: {
            "Content-Type": "application/json",
        },
    });
}
//# sourceMappingURL=agentTrigger.js.map