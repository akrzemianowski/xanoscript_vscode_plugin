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
exports.fetchCustomFunctions = fetchCustomFunctions;
exports.fetchCustomFunction = fetchCustomFunction;
exports.updateCustomFunction = updateCustomFunction;
exports.createCustomFunction = createCustomFunction;
exports.createCustomFunctionFromXs = createCustomFunctionFromXs;
exports.deleteCustomFunction = deleteCustomFunction;
const config_1 = require("../config");
const request_1 = require("./request");
const vscode = require("vscode");
/**
 * Fetch all the Custom Functions within a workspace
 *
 * @param instanceName unique name of the instance abfc-1234-efgh
 * @param workspaceId the workspace ID within the instance
 * @returns
 */
function fetchCustomFunctions(instanceName, workspaceId) {
    return __awaiter(this, void 0, void 0, function* () {
        let nextPage = 1;
        const customFunctions = [];
        const vsconfig = vscode.workspace.getConfiguration("xanoscript");
        const draftMode = vsconfig.get("draftMode", false);
        const queryParams = new URLSearchParams();
        queryParams.set("include_draft", draftMode ? "true" : "false");
        queryParams.set("include_xanoscript", "true");
        queryParams.set("per_page", "20");
        queryParams.set("branch", encodeURIComponent(config_1.config.branch));
        while (nextPage) {
            queryParams.set("page", nextPage.toString());
            const response = yield (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/function?${queryParams.toString()}`);
            customFunctions.push(...response.items);
            nextPage = response.nextPage;
        }
        return customFunctions;
    });
}
/**
 * Fetch a custom function with its XanoScript definition
 *
 * @param instanceName unique name of the instance abfc-1234-efgh
 * @param workspaceId the workspace ID within the instance
 * @param functionId the function ID
 * @returns
 */
function fetchCustomFunction(instanceName, workspaceId, functionId) {
    return __awaiter(this, void 0, void 0, function* () {
        const config = vscode.workspace.getConfiguration("xanoscript");
        const draftMode = config.get("draftMode", false);
        const queryParams = new URLSearchParams();
        queryParams.set("include_draft", draftMode ? "true" : "false");
        queryParams.set("include_xanoscript", "true");
        return (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/function/${functionId}?${queryParams.toString()}`);
    });
}
/**
 * Update a custom function with XanoScript
 *
 * @param instanceName unique name of the instance abfc-1234-efgh
 * @param workspaceId the workspace ID within the instance
 * @param functionId the function ID
 * @param script XanoScript to update the custom function with
 * @returns
 */
function updateCustomFunction(instanceName, workspaceId, functionId, xanoscript) {
    return __awaiter(this, void 0, void 0, function* () {
        const vsconfig = vscode.workspace.getConfiguration("xanoscript");
        const draftMode = vsconfig.get("draftMode", false);
        const queryParams = new URLSearchParams();
        queryParams.set("publish", draftMode ? "false" : "true");
        queryParams.set("include_xanoscript", "true");
        queryParams.set("include_draft", draftMode ? "true" : "false");
        yield (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/function/${functionId}?${queryParams.toString()}`, {
            method: "PUT",
            body: xanoscript,
            headers: {
                "Content-Type": "text/x-xanoscript",
            },
        });
        // TODO: once the PUT is updated to return the updated custom function, we can remove this
        return fetchCustomFunction(instanceName, workspaceId, functionId);
    });
}
/**
 * Create a new custom function using XanoScript
 *
 * @param instanceName unique name of the instance abfc-1234-efgh
 * @param workspaceId the workspace ID within the instance
 * @param name the name of the custom function
 */
function createCustomFunction(instanceName, workspaceId, name) {
    return __awaiter(this, void 0, void 0, function* () {
        const queryParams = new URLSearchParams();
        queryParams.set("branch", config_1.config.branch);
        queryParams.set("include_xanoscript", "true");
        const xanoscript = `function "${name}" {
  input {
    text some_argument? filters=trim {
      description = "what is this argument about?"
    }
  }

  stack {
    var some_variable {
      value = "with some value"
    }
  }

  response {
    value = $some_variable
  }
}`;
        return (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/function?${queryParams.toString()}`, {
            method: "POST",
            body: xanoscript,
            headers: {
                "Content-Type": "text/x-xanoscript",
            },
        });
    });
}
/**
 * Create a new custom function ysing XanoScript
 *
 * @param instanceName unique name of the instance abfc-1234-efgh
 * @param workspaceId the workspace ID within the instance
 * @param xanoscript the XanoScript to create the custom function with
 */
function createCustomFunctionFromXs(instanceName, workspaceId, xanoscript) {
    return __awaiter(this, void 0, void 0, function* () {
        const queryParams = new URLSearchParams();
        queryParams.set("branch", encodeURIComponent(config_1.config.branch));
        queryParams.set("include_xanoscript", "true");
        return (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/function?${queryParams.toString()}`, {
            method: "POST",
            body: xanoscript,
            headers: {
                "Content-Type": "text/x-xanoscript",
            },
        });
    });
}
/**
 * Delete a custom function
 *
 * @param instanceName unique name of the instance abfc-1234-efgh
 * @param workspaceId the workspace ID within the instance
 * @param functionId the function ID
 */
function deleteCustomFunction(instanceName, workspaceId, functionId) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/function/${functionId}`, {
            method: "DELETE",
        });
    });
}
//# sourceMappingURL=customFunction.js.map