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
exports.deleteMiddleware = exports.createMiddlewareFromXs = exports.createMiddleware = exports.updateMiddleware = exports.fetchMiddleware = exports.fetchMiddlewares = void 0;
const lodash_1 = require("lodash");
const config_1 = require("../config");
const request_1 = require("./request");
const vscode = require("vscode");
/**
 * Fetch all the Middlewares within a workspace
 *
 * @param instanceName unique name of the instance abfc-1234-efgh
 * @param workspaceId the workspace ID within the instance
 * @returns
 */
function fetchMiddlewares(instanceName, workspaceId) {
    return __awaiter(this, void 0, void 0, function* () {
        let nextPage = 1;
        const middlewares = [];
        const vsconfig = vscode.workspace.getConfiguration("xanoscript");
        const draftMode = vsconfig.get("draftMode", false);
        const queryParams = new URLSearchParams();
        queryParams.set("include_draft", draftMode ? "true" : "false");
        queryParams.set("per_page", "20");
        queryParams.set("branch", encodeURIComponent(config_1.config.branch));
        queryParams.set("include_xanoscript", "true");
        while (nextPage) {
            queryParams.set("page", nextPage.toString());
            const response = yield (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/middleware?${queryParams.toString()}`);
            middlewares.push(...response.items);
            nextPage = response.nextPage;
        }
        return middlewares;
    });
}
exports.fetchMiddlewares = fetchMiddlewares;
/**
 * Fetch a middleware with its XanoScript definition
 *
 * @param instanceName unique name of the instance abfc-1234-efgh
 * @param workspaceId the workspace ID within the instance
 * @param middlewareId the middleware ID
 * @returns
 */
function fetchMiddleware(instanceName, workspaceId, middlewareId) {
    return __awaiter(this, void 0, void 0, function* () {
        const config = vscode.workspace.getConfiguration("xanoscript");
        const draftMode = config.get("draftMode", false);
        const queryParams = new URLSearchParams();
        queryParams.set("include_draft", draftMode ? "true" : "false");
        queryParams.set("include_xanoscript", "true");
        return (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/middleware/${middlewareId}?${queryParams.toString()}`);
    });
}
exports.fetchMiddleware = fetchMiddleware;
/**
 * Update a middleware with XanoScript
 *
 * @param instanceName unique name of the instance abfc-1234-efgh
 * @param workspaceId the workspace ID within the instance
 * @param middlewareId the middleware ID
 * @param xanoscript XanoScript to update the middleware with
 * @returns
 */
function updateMiddleware(instanceName, workspaceId, middlewareId, xanoscript) {
    return __awaiter(this, void 0, void 0, function* () {
        const vsconfig = vscode.workspace.getConfiguration("xanoscript");
        const draftMode = vsconfig.get("draftMode", false);
        const queryParams = new URLSearchParams();
        queryParams.set("publish", draftMode ? "false" : "true");
        queryParams.set("include_draft", draftMode ? "true" : "false");
        queryParams.set("include_xanoscript", "true");
        return (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/middleware/${middlewareId}?${queryParams.toString()}`, {
            method: "PUT",
            body: xanoscript,
            headers: {
                "Content-Type": "text/x-xanoscript",
            },
        });
    });
}
exports.updateMiddleware = updateMiddleware;
/**
 * Create a new middleware using XanoScript template
 *
 * @param instanceName unique name of the instance abfc-1234-efgh
 * @param workspaceId the workspace ID within the instance
 * @param name the name of the middleware
 */
function createMiddleware(instanceName, workspaceId, name) {
    return __awaiter(this, void 0, void 0, function* () {
        const xanoscript = `middleware "${name}" {
  canonical = "${(0, lodash_1.snakeCase)(name)}"
  
  input {
    // Define input variables here
  }
  
  stack {
    // Add your middleware logic here
  }
  
  response {
    // Define response structure here
  }
}`;
        const queryParams = new URLSearchParams();
        queryParams.set("branch", config_1.config.branch);
        queryParams.set("include_xanoscript", "true");
        return (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/middleware?${queryParams.toString()}`, {
            method: "POST",
            body: xanoscript,
            headers: {
                "Content-Type": "text/x-xanoscript",
            },
        });
    });
}
exports.createMiddleware = createMiddleware;
/**
 * Create a new middleware using XanoScript
 *
 * @param instanceName unique name of the instance abfc-1234-efgh
 * @param workspaceId the workspace ID within the instance
 * @param xanoscript the XanoScript to create the middleware with
 */
function createMiddlewareFromXs(instanceName, workspaceId, xanoscript) {
    return __awaiter(this, void 0, void 0, function* () {
        const queryParams = new URLSearchParams();
        queryParams.set("branch", encodeURIComponent(config_1.config.branch));
        queryParams.set("include_xanoscript", "true");
        return (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/middleware?${queryParams.toString()}`, {
            method: "POST",
            body: xanoscript,
            headers: {
                "Content-Type": "text/x-xanoscript",
            },
        });
    });
}
exports.createMiddlewareFromXs = createMiddlewareFromXs;
/**
 * Delete a middleware
 *
 * @param instanceName unique name of the instance abfc-1234-efgh
 * @param workspaceId the workspace ID within the instance
 * @param middlewareId the middleware ID
 */
function deleteMiddleware(instanceName, workspaceId, middlewareId) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/middleware/${middlewareId}`, {
            method: "DELETE",
        });
    });
}
exports.deleteMiddleware = deleteMiddleware;
//# sourceMappingURL=middleware.js.map