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
exports.deleteWorkflowTest = exports.runWorkflowTestFromXs = exports.createWorkflowTestFromXs = exports.createWorkflowTest = exports.updateWorkflowTest = exports.fetchWorkflowTest = exports.fetchWorkflowTests = void 0;
const config_1 = require("../config");
const request_1 = require("./request");
const vscode = require("vscode");
/**
 * Fetch all the Workflow Tests within a workspace
 *
 * @param instanceName unique name of the instance abfc-1234-efgh
 * @param workspaceId the workspace ID within the instance
 * @returns
 */
function fetchWorkflowTests(instanceName, workspaceId) {
    return __awaiter(this, void 0, void 0, function* () {
        let nextPage = 1;
        const customFunctions = [];
        const vsconfig = vscode.workspace.getConfiguration("xanoscript");
        const draftMode = vsconfig.get("draftMode", false);
        const queryParams = new URLSearchParams();
        queryParams.set("include_draft", draftMode ? "true" : "false");
        queryParams.set("per_page", "20");
        queryParams.set("branch", encodeURIComponent(config_1.config.branch));
        while (nextPage) {
            queryParams.set("page", nextPage.toString());
            const response = yield (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/workflow_test?${queryParams.toString()}`);
            customFunctions.push(...response.items);
            nextPage = response.nextPage;
        }
        return customFunctions;
    });
}
exports.fetchWorkflowTests = fetchWorkflowTests;
/**
 * Fetch a workflow test with its XanoScript definition
 *
 * @param instanceName unique name of the instance abfc-1234-efgh
 * @param workspaceId the workspace ID within the instance
 * @param workflowTestId the workflow test ID
 * @returns
 */
function fetchWorkflowTest(instanceName, workspaceId, workflowTestId) {
    return __awaiter(this, void 0, void 0, function* () {
        const config = vscode.workspace.getConfiguration("xanoscript");
        const draftMode = config.get("draftMode", false);
        const queryParams = new URLSearchParams();
        queryParams.set("include_draft", draftMode ? "true" : "false");
        queryParams.set("include_xanoscript", "true");
        return (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/workflow_test/${workflowTestId}?${queryParams.toString()}`);
    });
}
exports.fetchWorkflowTest = fetchWorkflowTest;
/**
 * Update a workflow test with XanoScript
 *
 * @param instanceName unique name of the instance abfc-1234-efgh
 * @param workspaceId the workspace ID within the instance
 * @param workflowTestId the workflow test ID
 * @param script XanoScript to update the workflow test with
 * @returns
 */
function updateWorkflowTest(instanceName, workspaceId, workflowTestId, xanoscript) {
    return __awaiter(this, void 0, void 0, function* () {
        const vsconfig = vscode.workspace.getConfiguration("xanoscript");
        const draftMode = vsconfig.get("draftMode", false);
        const queryParams = new URLSearchParams();
        queryParams.set("publish", draftMode ? "false" : "true");
        queryParams.set("include_draft", draftMode ? "true" : "false");
        queryParams.set("include_xanoscript", "true");
        yield (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/workflow_test/${workflowTestId}?${queryParams.toString()}`, {
            method: "PUT",
            body: xanoscript,
            headers: {
                "Content-Type": "text/x-xanoscript",
            },
        });
        // TODO: once the PUT is updated to return the updated workflow test, we can remove this
        return fetchWorkflowTest(instanceName, workspaceId, workflowTestId);
    });
}
exports.updateWorkflowTest = updateWorkflowTest;
/**
 * Create a new workflow test using XanoScript
 *
 * @param instanceName unique name of the instance abfc-1234-efgh
 * @param workspaceId the workspace ID within the instance
 * @param name the name of the workflow test
 */
function createWorkflowTest(instanceName, workspaceId, name) {
    return __awaiter(this, void 0, void 0, function* () {
        const queryParams = new URLSearchParams();
        queryParams.set("branch", config_1.config.branch);
        queryParams.set("include_xanoscript", "true");
        const xanoscript = `workflow_test "${name}" {
  stack {
    expect.to_be_true (1 == 1)
  }
}`;
        return (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/workflow_test?${queryParams.toString()}`, {
            method: "POST",
            body: xanoscript,
            headers: {
                "Content-Type": "text/x-xanoscript",
            },
        });
    });
}
exports.createWorkflowTest = createWorkflowTest;
/**
 * Create a new workflow test using XanoScript
 *
 * @param instanceName unique name of the instance abfc-1234-efgh
 * @param workspaceId the workspace ID within the instance
 * @param xanoscript the XanoScript to create the workflow test with
 */
function createWorkflowTestFromXs(instanceName, workspaceId, xanoscript) {
    return __awaiter(this, void 0, void 0, function* () {
        const queryParams = new URLSearchParams();
        queryParams.set("branch", config_1.config.branch);
        queryParams.set("include_xanoscript", "true");
        return (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/workflow_test?${queryParams.toString()}`, {
            method: "POST",
            body: xanoscript,
            headers: {
                "Content-Type": "text/x-xanoscript",
            },
        });
    });
}
exports.createWorkflowTestFromXs = createWorkflowTestFromXs;
/**
 * Run a workflow test using XanoScript
 *
 * @param instanceName unique name of the instance abfc-1234-efgh
 * @param workspaceId the workspace ID within the instance
 * @param xanoscript the XanoScript to create the workflow test with
 */
function runWorkflowTestFromXs(instanceName, workspaceId, xanoscript) {
    return __awaiter(this, void 0, void 0, function* () {
        const queryParams = new URLSearchParams();
        queryParams.set("branch", config_1.config.branch);
        return (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/workflow_test/run?${queryParams.toString()}`, {
            method: "POST",
            body: xanoscript,
            headers: {
                "Content-Type": "text/x-xanoscript",
                "x-data-source": "",
            },
        });
    });
}
exports.runWorkflowTestFromXs = runWorkflowTestFromXs;
/**
 * Delete a workflow test
 *
 * @param instanceName unique name of the instance abfc-1234-efgh
 * @param workspaceId the workspace ID within the instance
 * @param workflowTestId the workflow test ID
 */
function deleteWorkflowTest(instanceName, workspaceId, workflowTestId) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/workflow_test/${workflowTestId}`, {
            method: "DELETE",
        });
    });
}
exports.deleteWorkflowTest = deleteWorkflowTest;
//# sourceMappingURL=workflowTest.js.map