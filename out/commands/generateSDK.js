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
exports.generateSDK = exports.generateSDKCmd = void 0;
const vscode = require("vscode");
const api_1 = require("../metadata/api");
const config_1 = require("../config");
const path_1 = require("path");
const OpenAPI = require("ts-openapi-codegen");
function generateSDKCmd(outputPath) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!outputPath) {
            outputPath = yield vscode.window.showInputBox({
                prompt: "Enter output directory name",
                placeHolder: "e.g., static/src/sdk",
            });
        }
        if (!outputPath) {
            vscode.window.showErrorMessage("Output directory is required");
            return;
        }
        try {
            yield generateSDK(outputPath);
            vscode.window.showInformationMessage("SDK generated successfully");
        }
        catch (error) {
            vscode.window.showErrorMessage("Failed to generate SDK");
            console.error("Failed to generate SDK", error);
        }
    });
}
exports.generateSDKCmd = generateSDKCmd;
function generateSDK(outputPath) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const apiGroups = yield (0, api_1.fetchApiGroups)(config_1.config.instanceName, config_1.config.workspaceId);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const paths = {};
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let jsonSpec = {};
        let serverUrl = "";
        for (const apiGroup of apiGroups) {
            // fix the link by removing the trailing : at the end
            const swaggerLink = apiGroup.documentation.link.replace(":?", "?");
            const response = yield fetch(swaggerLink, {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            });
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            jsonSpec = (yield response.json());
            const apiURL = new URL((_a = jsonSpec.servers[0]) === null || _a === void 0 ? void 0 : _a.url);
            serverUrl = apiURL.origin;
            const apiGroupPath = apiURL.pathname;
            for (const path in jsonSpec.paths) {
                paths[`${apiGroupPath}${path}`] = jsonSpec.paths[path];
            }
        }
        yield OpenAPI.generate({
            input: Object.assign(Object.assign({}, jsonSpec), { paths, servers: [{ url: serverUrl }] }),
            output: (0, path_1.join)(config_1.ROOT_PATH, outputPath),
            httpClient: OpenAPI.HttpClient.FETCH,
            useUnionTypes: true,
            exportCore: true,
            exportSchemas: false,
            exportServices: true,
            typePrefix: "Xano",
            clean: true,
            write: true,
        });
    });
}
exports.generateSDK = generateSDK;
//# sourceMappingURL=generateSDK.js.map