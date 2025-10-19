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
exports.deleteApiEndpoint = exports.deleteApiGroup = exports.createApiGroupFromXs = exports.createApiGroup = exports.createApiEndpoint = exports.createApiEndpointFromXs = exports.updateApiEndpoint = exports.updateApiGroup = exports.fetchApiEndpoints = exports.fetchApiEndpoint = exports.fetchApiGroupsContent = exports.fetchApiGroups = void 0;
const config_1 = require("../config");
const vscode = require("vscode");
const request_1 = require("./request");
/**
 * Fetch all the API groups within a workspace.
 *
 * Note that we are automatically picking the selected branch from the store.
 *
 * @param instanceName unique name of the instance abfc-1234-efgh
 * @param workspaceId the workspace ID within the instance
 * @returns
 */
function fetchApiGroups(instanceName, workspaceId) {
    return __awaiter(this, void 0, void 0, function* () {
        let nextPage = 1;
        const apiGroups = [];
        const queryParams = new URLSearchParams();
        queryParams.set("per_page", "20");
        queryParams.set("branch", config_1.config.branch);
        queryParams.set("include_xanoscript", "true");
        while (nextPage) {
            queryParams.set("page", nextPage.toString());
            const response = yield (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/apigroup?${queryParams.toString()}`);
            apiGroups.push(...response.items);
            nextPage = response.nextPage;
        }
        return apiGroups;
    });
}
exports.fetchApiGroups = fetchApiGroups;
/**
 * Fetch the content of a specific API group
 *
 * @param instanceName unique name of the instance abfc-1234-efgh
 * @param workspaceId the workspace ID within the instance
 * @param apiGroupId the API group ID
 * @returns
 */
function fetchApiGroupsContent(instanceName, workspaceId, apiGroupId) {
    return __awaiter(this, void 0, void 0, function* () {
        let nextPage = 1;
        const apiEndpoints = [];
        const vsconfig = vscode.workspace.getConfiguration("xanoscript");
        const draftMode = vsconfig.get("draftMode", false);
        const queryParams = new URLSearchParams();
        queryParams.set("include_draft", draftMode ? "true" : "false");
        queryParams.set("per_page", "20");
        queryParams.set("include_xanoscript", "true");
        while (nextPage) {
            queryParams.set("page", nextPage.toString());
            const response = yield (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/apigroup/${apiGroupId}/api?${queryParams.toString()}`);
            apiEndpoints.push(...response.items);
            nextPage = response.nextPage;
        }
        return apiEndpoints;
    });
}
exports.fetchApiGroupsContent = fetchApiGroupsContent;
/**
 * Fetch the content of a specific API endpoint with its XanoScript definition
 * @param instanceName unique name of the instance abfc-1234-efgh
 * @param workspaceId the workspace ID within the instance
 * @param apiGroupId the API group ID
 * @param apiId the API endpoint ID
 * @returns
 */
function fetchApiEndpoint(instanceName, workspaceId, apiGroupId, apiId) {
    return __awaiter(this, void 0, void 0, function* () {
        const vsconfig = vscode.workspace.getConfiguration("xanoscript");
        const draftMode = vsconfig.get("draftMode", false);
        const queryParams = new URLSearchParams();
        queryParams.set("include_draft", draftMode ? "true" : "false");
        queryParams.set("include_xanoscript", "true");
        return (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/apigroup/${apiGroupId}/api/${apiId}?${queryParams.toString()}`);
    });
}
exports.fetchApiEndpoint = fetchApiEndpoint;
/**
 * Fetch the content of a specific API endpoint with its XanoScript definition
 * @param instanceName unique name of the instance abfc-1234-efgh
 * @param workspaceId the workspace ID within the instance
 * @param apiGroupId the API group ID
 * @param apiId the API endpoint ID
 * @returns
 */
function fetchApiEndpoints(instanceName, workspaceId) {
    return __awaiter(this, void 0, void 0, function* () {
        const apiGroups = yield fetchApiGroups(instanceName, workspaceId);
        const endpoints = [];
        for (const apiGroup of apiGroups) {
            const apis = yield fetchApiGroupsContent(instanceName, workspaceId, apiGroup.id);
            for (const api of apis) {
                endpoints.push(Object.assign(Object.assign({}, api), { apiGroup }));
            }
        }
        return endpoints;
    });
}
exports.fetchApiEndpoints = fetchApiEndpoints;
/**
 * Update the content of a specific API endpoint with XanoScript
 * @param instanceName unique name of the instance abfc-1234-efgh
 * @param workspaceId the workspace ID within the instance
 * @param apiGroupId the API group ID
 * @param xanoscript XanoScript to update the API endpoint with
 * @returns
 */
function updateApiGroup(instanceName, workspaceId, apiGroupId, xanoscript) {
    return __awaiter(this, void 0, void 0, function* () {
        const queryParams = new URLSearchParams();
        queryParams.set("include_xanoscript", "true");
        // this endpoint does not return anything on success
        return (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/apigroup/${apiGroupId}?${queryParams.toString()}`, {
            method: "PUT",
            body: xanoscript,
            headers: {
                "Content-Type": "text/x-xanoscript",
            },
        });
    });
}
exports.updateApiGroup = updateApiGroup;
/**
 * Update the configuration of a specific API group with XanoScript
 * @param instanceName unique name of the instance abfc-1234-efgh
 * @param workspaceId the workspace ID within the instance
 * @param apiGroupId the API group ID
 * @param apiId the API endpoint ID
 * @param xanoscript XanoScript to update the API endpoint with
 * @returns
 */
function updateApiEndpoint(instanceName, workspaceId, apiGroupId, apiId, xanoscript) {
    return __awaiter(this, void 0, void 0, function* () {
        const vsconfig = vscode.workspace.getConfiguration("xanoscript");
        const draftMode = vsconfig.get("draftMode", false);
        const queryParams = new URLSearchParams();
        queryParams.set("publish", draftMode ? "false" : "true");
        queryParams.set("include_draft", draftMode ? "true" : "false");
        queryParams.set("include_xanoscript", "true");
        return (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/apigroup/${apiGroupId}/api/${apiId}?${queryParams.toString()}`, {
            method: "PUT",
            body: xanoscript,
            headers: {
                "Content-Type": "text/x-xanoscript",
            },
        });
    });
}
exports.updateApiEndpoint = updateApiEndpoint;
/**
 * Create a new blank API endpoint within an API group
 * @param instanceName unique name of the instance abfc-1234-efgh
 * @param workspaceId the workspace ID within the instance
 * @param apiGroupId the API group ID
 * @param xanoscript the XanoScript to create the API endpoint with
 */
function createApiEndpointFromXs(instanceName, workspaceId, apiGroupId, xanoscript) {
    return __awaiter(this, void 0, void 0, function* () {
        const queryParams = new URLSearchParams();
        queryParams.set("include_xanoscript", "true");
        return (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/apigroup/${apiGroupId}/api?${queryParams.toString()}`, {
            method: "POST",
            body: xanoscript,
            headers: {
                "Content-Type": "text/x-xanoscript",
            },
        });
    });
}
exports.createApiEndpointFromXs = createApiEndpointFromXs;
/**
 * Create a new blank API endpoint within an API group
 * @param instanceName unique name of the instance abfc-1234-efgh
 * @param workspaceId the workspace ID within the instance
 * @param apiGroupId the API group ID
 * @param name the name of the API endpoint
 * @param verb the HTTP verb/method of the API endpoint (GET, POST, PUT, DELETE, etc.)
 */
function createApiEndpoint(instanceName, workspaceId, apiGroupId, name, verb) {
    return __awaiter(this, void 0, void 0, function* () {
        const queryParams = new URLSearchParams();
        queryParams.set("include_xanoscript", "true");
        const xanoscript = `query ${name} verb=${verb} {
  input
  stack
  response {
    value = null
  }
}`;
        return (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/apigroup/${apiGroupId}/api?${queryParams.toString()}`, {
            method: "POST",
            body: xanoscript,
            headers: {
                "Content-Type": "text/x-xanoscript",
            },
        });
    });
}
exports.createApiEndpoint = createApiEndpoint;
/**
 * Create a new API group within a workspace
 * @param instanceName unique name of the instance abfc-1234-efgh
 * @param workspaceId the workspace ID within the instance
 * @param name the name of the API group
 * @param description the description of the API group (optional)
 * @param swagger whether to enable the swagger UI for the API group (optional)
 */
function createApiGroup(instanceName, workspaceId, name, description = "", swagger = true) {
    return __awaiter(this, void 0, void 0, function* () {
        const branch = encodeURIComponent(config_1.config.branch);
        return (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/apigroup`, {
            method: "POST",
            body: JSON.stringify({
                name,
                description,
                swagger,
                branch,
                include_xanoscript: true,
            }),
        });
    });
}
exports.createApiGroup = createApiGroup;
/**
 * Create a new API group within a workspace
 * @param instanceName unique name of the instance abfc-1234-efgh
 * @param workspaceId the workspace ID within the instance
 * @param xanoscript the XanoScript to create the API group with
 */
function createApiGroupFromXs(instanceName, workspaceId, xanoscript) {
    return __awaiter(this, void 0, void 0, function* () {
        const queryParams = new URLSearchParams();
        queryParams.set("branch", encodeURIComponent(config_1.config.branch));
        queryParams.set("include_xanoscript", "true");
        return (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/apigroup?${queryParams.toString()}`, {
            method: "POST",
            body: xanoscript,
            headers: {
                "Content-Type": "text/x-xanoscript",
            },
        });
    });
}
exports.createApiGroupFromXs = createApiGroupFromXs;
/**
 * Delete an API group within a workspace
 * @param instanceName unique name of the instance abfc-1234-efgh
 * @param workspaceId the workspace ID within the instance
 * @param apiGroupId the API group ID
 * @returns
 */
function deleteApiGroup(instanceName, workspaceId, apiGroupId) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/apigroup/${apiGroupId}`, {
            method: "DELETE",
        });
    });
}
exports.deleteApiGroup = deleteApiGroup;
/**
 * Delete an API endpoint within an API group
 * @param instanceName unique name of the instance abfc-1234-efgh
 * @param workspaceId the workspace ID within the instance
 * @param apiGroupId the API group ID
 * @param apiId the API endpoint ID
 * @returns
 */
function deleteApiEndpoint(instanceName, workspaceId, apiGroupId, apiId) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/apigroup/${apiGroupId}/api/${apiId}`, {
            method: "DELETE",
        });
    });
}
exports.deleteApiEndpoint = deleteApiEndpoint;
//# sourceMappingURL=api.js.map