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
exports.XsNotFoundError = exports.XsSyntaxError = exports.metadataRequest = exports.metadataXanoRequest = exports.metadataInstanceRequest = void 0;
const vscode = require("vscode");
const cache_1 = require("./cache");
const secrets_1 = require("../secrets");
/**
 * Makes a request to an instance Metadata API using your configured workspace ID, access Token and
 * workspace domain.
 * @param instanceName the instance name like abfc-1234-efgh
 * @param path the path to the metadata endpoint
 * @param params the request parameters (same as fetch)
 * @returns
 */
function metadataInstanceRequest(instanceName, path, params) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!instanceName) {
            throw new Error("metadataInstanceRequest(): No instance name provided");
        }
        // add default values to the params and extract the values we need for
        // the request
        const instanceDomain = yield (0, cache_1.getInstanceDomainFromCache)(instanceName);
        const scheme = instanceDomain.startsWith("localhost") ? "http" : "https";
        const url = `${scheme}://${instanceDomain}/api:meta/${path}`;
        return metadataRequest(url, params);
    });
}
exports.metadataInstanceRequest = metadataInstanceRequest;
/**
 * Makes a request to Xano main Metadata API using your access Token.
 * Here you can fetch instances, auth status and snippet informations.
 * @param path the path to the metadata endpoint
 * @param params the request parameters (same as fetch)
 * @returns
 */
function metadataXanoRequest(path, params) {
    return __awaiter(this, void 0, void 0, function* () {
        const config = vscode.workspace.getConfiguration("xanoscript");
        const apiUrl = config.get("xanoUrl", "https://app.xano.com");
        const url = `${apiUrl}/api:meta/${path}`;
        return metadataRequest(url, params);
    });
}
exports.metadataXanoRequest = metadataXanoRequest;
/**
 * Open a request to the metadata API using your access token.
 * @param url
 * @param params
 * @returns
 */
function metadataRequest(url, params) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const accessToken = yield (0, secrets_1.getAccessToken)();
        const isFormData = (params === null || params === void 0 ? void 0 : params.body) instanceof FormData;
        const response = yield (!isFormData
            ? fetch(url, Object.assign(Object.assign({}, params), { headers: Object.assign({ Authorization: `Bearer ${accessToken}`, "Content-Type": "application/json" }, params === null || params === void 0 ? void 0 : params.headers) }))
            : fetch(url, Object.assign(Object.assign({}, params), { headers: {
                    Authorization: `Bearer ${accessToken}`,
                } })));
        if (!response.ok) {
            // check if the response is of type JSON
            if ((_a = response.headers.get("content-type")) === null || _a === void 0 ? void 0 : _a.includes("application/json")) {
                const jsonResponse = (yield response.json());
                if (jsonResponse && jsonResponse.code === "ERROR_CODE_SYNTAX_ERROR") {
                    throw new XsSyntaxError("Syntax error", jsonResponse);
                }
                else if (response.status === 404) {
                    throw new XsNotFoundError(`Resource not found: ${url}: [HTTP-${response.status}] ${response.statusText} ${JSON.stringify(jsonResponse)}`);
                }
                else {
                    if (jsonResponse.message) {
                        console.log("API Error fetching", url);
                        throw new Error(jsonResponse.message);
                    }
                    else {
                        throw new Error(`Failed to fetch ${url}: [HTTP-${response.status}] ${response.statusText} ${JSON.stringify(jsonResponse)}`);
                    }
                }
            }
            else {
                const text = yield response.text();
                console.log("API Error fetching", url, text);
                throw new Error(`Unknown Error: ${url}: [HTTP-${response.status}] ${response.statusText} ${text}`);
            }
        }
        try {
            const json = yield response.json();
            return json;
        }
        catch (_b) {
            vscode.window.showErrorMessage(`Failed to parse JSON response from ${url}: ${response.statusText} \n ${response.text()}`);
            throw new Error(response.statusText);
        }
    });
}
exports.metadataRequest = metadataRequest;
class XsSyntaxError extends Error {
    constructor(message, syntaxError) {
        super(message);
        this.syntaxError = syntaxError;
        this.name = "SyntaxError";
    }
}
exports.XsSyntaxError = XsSyntaxError;
class XsNotFoundError extends Error {
    constructor(message) {
        super(message);
        this.name = "NotFoundError";
    }
}
exports.XsNotFoundError = XsNotFoundError;
//# sourceMappingURL=request.js.map