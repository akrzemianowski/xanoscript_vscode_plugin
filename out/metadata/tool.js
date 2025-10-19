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
exports.deleteTool = exports.createTool = exports.createToolFromXs = exports.fetchTools = exports.updateToolScript = exports.fetchTool = void 0;
const request_1 = require("./request");
const config_1 = require("../config");
const vscode = require("vscode");
/**
 * Return the Xanoscript version of a given Tool within your workspace.
 *
 * @param instanceName unique name of the instance abfc-1234-efgh
 * @param workspaceId the workspace ID within the instance
 * @param toolId the tool ID to fetch the Xanoscript from
 * @returns
 */
function fetchTool(instanceName, workspaceId, toolId) {
    const vsconfig = vscode.workspace.getConfiguration("xanoscript");
    const draftMode = vsconfig.get("draftMode", false);
    const queryParams = new URLSearchParams();
    queryParams.set("include_draft", draftMode ? "true" : "false");
    queryParams.set("include_xanoscript", "true");
    return (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/tool/${toolId}?${queryParams.toString()}`);
}
exports.fetchTool = fetchTool;
/**
 * Update the Xanoscript version of a given Tool within your workspace.
 *
 * @param instanceName unique name of the instance abfc-1234-efgh
 * @param workspaceId the workspace ID within the instance
 * @param toolId the tool ID to fetch the Xanoscript from
 * @param script the new Xanoscript to update the tool with
 */
function updateToolScript(instanceName, workspaceId, toolId, script) {
    return __awaiter(this, void 0, void 0, function* () {
        const vsconfig = vscode.workspace.getConfiguration("xanoscript");
        const draftMode = vsconfig.get("draftMode", false);
        const queryParams = new URLSearchParams();
        queryParams.set("publish", draftMode ? "false" : "true");
        queryParams.set("include_draft", draftMode ? "true" : "false");
        queryParams.set("include_xanoscript", "true");
        return (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/tool/${toolId}?${queryParams.toString()}`, {
            method: "PUT",
            body: script,
            headers: {
                "Content-Type": "text/x-xanoscript",
            },
        });
    });
}
exports.updateToolScript = updateToolScript;
/**
 * Fetch the list of tools within your workspace.
 *
 * @param instanceName unique name of the instance abfc-1234-efgh
 * @param workspaceId the workspace ID within the instance
 * @returns list of tool objects
 */
function fetchTools(instanceName, workspaceId) {
    return __awaiter(this, void 0, void 0, function* () {
        let nextPage = 1;
        const tools = [];
        const vsconfig = vscode.workspace.getConfiguration("xanoscript");
        const draftMode = vsconfig.get("draftMode", false);
        const queryParams = new URLSearchParams();
        queryParams.set("include_draft", draftMode ? "true" : "false");
        queryParams.set("per_page", "20");
        queryParams.set("branch", encodeURIComponent(config_1.config.branch));
        queryParams.set("include_xanoscript", "true");
        while (nextPage) {
            queryParams.set("page", nextPage.toString());
            const response = yield (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/tool?${queryParams.toString()}`);
            tools.push(...response.items);
            nextPage = response.nextPage;
        }
        return tools;
    });
}
exports.fetchTools = fetchTools;
/**
 * Create a new tool using XanoScript
 * @param instanceName unique name of the instance abfc-1234-efgh
 * @param workspaceId the workspace ID within the instance
 * @param script the XanoScript to create the tool with
 */
function createToolFromXs(instanceName, workspaceId, script) {
    return __awaiter(this, void 0, void 0, function* () {
        const queryParams = new URLSearchParams();
        queryParams.set("branch", config_1.config.branch);
        queryParams.set("include_xanoscript", "true");
        return (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/tool?${queryParams.toString()}`, {
            method: "POST",
            body: script,
            headers: {
                "Content-Type": "text/x-xanoscript",
            },
        });
    });
}
exports.createToolFromXs = createToolFromXs;
/**
 * Create a new Tool within your workspace.
 * @param instanceName unique name of the instance abfc-1234-efgh
 * @param workspaceId the workspace ID within the instance
 * @param name the name of the tool
 * @param instructions the instructions for the tool (optional)
 */
function createTool(instanceName, workspaceId, name, instructions = "") {
    return __awaiter(this, void 0, void 0, function* () {
        const queryParams = new URLSearchParams();
        queryParams.set("branch", config_1.config.branch);
        queryParams.set("include_xanoscript", "true");
        // name should start with a letter and contain only letters, numbers, and underscores
        if (!/^[a-zA-Z][a-zA-Z0-9_]*$/.test(name)) {
            throw new Error("Tool name must start with a letter and contain only letters, numbers, and underscores");
        }
        const instructionsLine = instructions
            ? `  instructions = "${instructions.replace(/"/g, '\\"')}"\n\n`
            : "";
        const script = `tool ${name} {
${instructionsLine}  input {
  }

  stack {
  }

  response {
    value = null
  }

  tags = []
  history = {inherit: true}
}`;
        return (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/tool?${queryParams.toString()}`, {
            method: "POST",
            body: script,
            headers: {
                "Content-Type": "text/x-xanoscript",
            },
        });
    });
}
exports.createTool = createTool;
/**
 * Delete a tool within your workspace.
 * @param instanceName unique name of the instance abfc-1234-efgh
 * @param workspaceId the workspace ID within the instance
 * @param toolId the tool ID to delete
 */
function deleteTool(instanceName, workspaceId, toolId) {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/tool/${toolId}`, {
            method: "DELETE",
        });
    });
}
exports.deleteTool = deleteTool;
//# sourceMappingURL=tool.js.map