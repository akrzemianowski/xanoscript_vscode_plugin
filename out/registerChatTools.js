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
exports.registerChatTools = registerChatTools;
const vscode = require("vscode");
const static_1 = require("./metadata/static");
const config_1 = require("./config");
const api_1 = require("./metadata/api");
const path_1 = require("path");
const push_1 = require("./registry/push");
const stageAllRecords_1 = require("./commands/stageAllRecords");
const dbo_1 = require("./metadata/dbo");
const generateSDK_1 = require("./commands/generateSDK");
const createCrudEndpoint_1 = require("./commands/createCrudEndpoint");
const getWorkspaceObjects_1 = require("./tooling/getWorkspaceObjects");
function registerChatTools(context) {
    context.subscriptions.push(vscode.lm.registerTool("upload_static_files_to_xano", new UploadStaticFilesToXanoLm()));
    context.subscriptions.push(vscode.lm.registerTool("get_xano_api_specifications", new GetXanoApiSpecificationsLm()));
    context.subscriptions.push(vscode.lm.registerTool("push_all_changes_to_xano", new PushAllChangesLm()));
    context.subscriptions.push(vscode.lm.registerTool("get_all_xano_tables", new GetAllTablesLm()));
    context.subscriptions.push(vscode.lm.registerTool("get_objects_specification", new GetWorkspaceObjectsLm()));
    context.subscriptions.push(vscode.lm.registerTool("generate_xanoscript_crud_endpoint", new GenerateCrudEndpointLm()));
    context.subscriptions.push(vscode.lm.registerTool("generate_xano_api_sdk", new GenerateXanoApiSdkLm()));
    context.subscriptions.push(vscode.lm.registerTool("batch_add_records_to_xano_table", new BatchAddRecordsToTableLm()));
    context.subscriptions.push(vscode.lm.registerTool("push_current_file_to_xano", new InvokeFileCommandLM("Push Current File to Xano", "xanoscript.pushFileChanges", "File pushed to Xano", "Failed to push file to Xano")));
}
class BatchAddRecordsToTableLm {
    invoke(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const { tableId, rows } = options.input;
            const dataSource = options.input.dataSource || "live";
            const ids = yield (0, dbo_1.batchAddRecordsToTable)(config_1.config.instanceName, config_1.config.workspaceId, dataSource, tableId, rows);
            return new vscode.LanguageModelToolResult([
                new vscode.LanguageModelTextPart(`Successfully added ${rows.length} records to table ID ${tableId}\nIDs: ${JSON.stringify(ids)}`),
            ]);
        });
    }
    prepareInvocation(options) {
        var _a, _b;
        const confirmationMessages = {
            title: `Batch Add Records to Table"}`,
            message: new vscode.MarkdownString((_a = options.input.invocationMessage) !== null && _a !== void 0 ? _a : `Are you sure you want to add records to the specified table?`),
        };
        return {
            invocationMessage: (_b = options.input.invocationMessage) !== null && _b !== void 0 ? _b : "Adding records to table...",
            confirmationMessages,
        };
    }
}
class GetAllTablesLm {
    invoke() {
        return __awaiter(this, void 0, void 0, function* () {
            const tables = yield (0, dbo_1.fetchTables)(config_1.config.instanceName, config_1.config.workspaceId, false);
            return new vscode.LanguageModelToolResult([
                new vscode.LanguageModelTextPart(JSON.stringify(tables, null, 2)),
            ]);
        });
    }
    prepareInvocation() {
        const confirmationMessages = {
            title: "Get All Tables",
            message: new vscode.MarkdownString(`Retrieve all the tables and their schema from your Xano Workspace?`),
        };
        return {
            invocationMessage: "Retrieving all tables...",
            confirmationMessages,
        };
    }
}
class GenerateXanoApiSdkLm {
    invoke(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const outputPath = options.input.outputDir || (0, path_1.join)("static", "src", "api");
            yield (0, generateSDK_1.generateSDK)(outputPath);
            return new vscode.LanguageModelToolResult([
                new vscode.LanguageModelTextPart(`Successfully generated Xano API SDK at ${outputPath}`),
            ]);
        });
    }
    prepareInvocation(options) {
        const confirmationMessages = {
            title: "Generate Xano API SDK",
            message: new vscode.MarkdownString(`Confirm you want to generate the Xano API SDK in ${options.input.outputDir}?`),
        };
        return {
            invocationMessage: `Generating SDK in ${options.input.outputDir}...`,
            confirmationMessages,
        };
    }
}
class UploadStaticFilesToXanoLm {
    invoke(options, token) {
        return __awaiter(this, void 0, void 0, function* () {
            const upload = yield (0, static_1.uploadStaticContent)(config_1.config.instanceName, config_1.config.workspaceId, options.input.name, options.input.description, token);
            if (upload === "cancelled") {
                return new vscode.LanguageModelToolResult([
                    new vscode.LanguageModelTextPart("upload canceled"),
                ]);
            }
            if (upload.custom_url) {
                return new vscode.LanguageModelToolResult([
                    new vscode.LanguageModelTextPart(`upload successful at ${upload.custom_url}`),
                ]);
            }
            return new vscode.LanguageModelToolResult([
                new vscode.LanguageModelTextPart(`upload successful at ${upload.default_url}`),
            ]);
        });
    }
    /*
     * Could also accept arguments
     *
     * prepareInvocation(
     *   options: vscode.LanguageModelToolInvocationPrepareOptions<StaticUploadParams>
     *   token: vscode.CancellationToken
     * )
     */
    prepareInvocation() {
        const confirmationMessages = {
            title: "Upload Static Content",
            message: new vscode.MarkdownString(`Are you sure you want to upload static content?`),
        };
        return {
            invocationMessage: "Uploading static content...",
            confirmationMessages,
        };
    }
}
class PushAllChangesLm {
    invoke() {
        return __awaiter(this, void 0, void 0, function* () {
            const stage = yield (0, stageAllRecords_1.stageAllRecordsCmd)();
            if (!stage) {
                throw new Error("No changes to push to Xano");
            }
            const results = yield (0, push_1.push)();
            console.log("Push results:", results);
            if (results.failed.length > 0) {
                const message = `Some changes failed to push to Xano:\n${results.failed
                    .map((f) => `- ${f.path}: ${f.error}`)
                    .join("\n")}`;
                throw new Error(message);
            }
            return new vscode.LanguageModelToolResult([
                new vscode.LanguageModelTextPart("All changes pushed to Xano"),
            ]);
        });
    }
    prepareInvocation() {
        const confirmationMessages = {
            title: "Push All Changes to Xano",
            message: new vscode.MarkdownString(`Are you sure you want to push all changes to Xano?`),
        };
        return {
            invocationMessage: "Pushing all changes to Xano...",
            confirmationMessages,
        };
    }
}
class GetWorkspaceObjectsLm {
    invoke(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const objects = yield (0, getWorkspaceObjects_1.getWorkspaceObjects)(options.input.category);
            return new vscode.LanguageModelToolResult([
                new vscode.LanguageModelTextPart(`[${objects.join(",\n")}]`),
            ]);
        });
    }
}
class GetXanoApiSpecificationsLm {
    invoke() {
        return __awaiter(this, void 0, void 0, function* () {
            const apiGroups = yield (0, api_1.fetchApiGroups)(config_1.config.instanceName, config_1.config.workspaceId);
            const swaggerJson = [];
            for (const apiGroup of apiGroups) {
                // fix the link by removing the trailing : at the end
                const swaggerLink = apiGroup.documentation.link.replace(":?", "?");
                yield fetch(swaggerLink, {
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                })
                    .then((response) => response.json())
                    .then((spec) => {
                    swaggerJson.push(JSON.stringify(spec, null, 2));
                });
            }
            return new vscode.LanguageModelToolResult([
                new vscode.LanguageModelTextPart(`[${swaggerJson.join(",\n")}]`),
            ]);
        });
    }
    prepareInvocation() {
        const confirmationMessages = {
            title: "Get All Backend API Specifications",
            message: new vscode.MarkdownString(`Retrieve all backend API specifications?`),
        };
        return {
            invocationMessage: "Retrieving all backend API specifications...",
            confirmationMessages,
        };
    }
}
class GenerateCrudEndpointLm {
    invoke(options) {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, createCrudEndpoint_1.createCrudEndpoint)(options.input);
            return new vscode.LanguageModelToolResult([
                new vscode.LanguageModelTextPart(`Successfully created endpoint ${options.input.action} (${options.input.table}) function`),
            ]);
        });
    }
    prepareInvocation(options) {
        const confirmationMessages = {
            title: `Create ${options.input.action} endpoint for Table ${options.input.table}`,
            message: new vscode.MarkdownString(`Are you sure you want to create a CRUD endpoint?`),
        };
        return {
            invocationMessage: `Creating ${options.input.action}@${options.input.table} endpoint...`,
            confirmationMessages,
        };
    }
}
class InvokeFileCommandLM {
    constructor(title, command, success, failure) {
        this.title = title;
        this.command = command;
        this.success = success;
        this.failure = failure;
    }
    invoke(options) {
        return __awaiter(this, void 0, void 0, function* () {
            // open the newly created file in the editor
            const success = yield vscode.commands.executeCommand(this.command, options.input.path);
            if (!success) {
                throw new Error(this.failure);
            }
            return new vscode.LanguageModelToolResult([
                new vscode.LanguageModelTextPart(this.success),
            ]);
        });
    }
    prepareInvocation() {
        const confirmationMessages = {
            title: this.title,
            message: new vscode.MarkdownString(`Are you sure you want to invoke this command?`),
        };
        return {
            invocationMessage: "Invoking command...",
            confirmationMessages,
        };
    }
}
//# sourceMappingURL=registerChatTools.js.map