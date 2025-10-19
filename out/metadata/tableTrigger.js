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
exports.deleteTableTrigger = exports.createTableTrigger = exports.createTableTriggerFromXs = exports.fetchTableTriggers = exports.updateTableTrigger = exports.fetchTableTrigger = void 0;
const request_1 = require("./request");
const config_1 = require("../config");
const vscode = require("vscode");
const lodash_1 = require("lodash");
/**
 * Return the Xanoscript version of a given Table Trigger within your workspace.
 *
 * @param instanceName unique name of the instance abfc-1234-efgh
 * @param workspaceId the workspace ID within the instance
 * @param triggerId the table trigger ID to fetch the Xanoscript from
 * @returns
 */
function fetchTableTrigger(instanceName, workspaceId, triggerId) {
    const vsconfig = vscode.workspace.getConfiguration("xanoscript");
    const draftMode = vsconfig.get("draftMode", false);
    const queryParams = new URLSearchParams();
    queryParams.set("include_draft", draftMode ? "true" : "false");
    queryParams.set("include_xanoscript", "true");
    return (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/table/trigger/${triggerId}?${queryParams.toString()}`);
}
exports.fetchTableTrigger = fetchTableTrigger;
/**
 * Update the Xanoscript version of a given Table Trigger within your workspace.
 *
 * @param instanceName unique name of the instance abfc-1234-efgh
 * @param workspaceId the workspace ID within the instance
 * @param triggerId the table trigger ID to fetch the Xanoscript from
 * @param script the new Xanoscript to update the table trigger with
 */
function updateTableTrigger(instanceName, workspaceId, triggerId, script) {
    return __awaiter(this, void 0, void 0, function* () {
        const vsconfig = vscode.workspace.getConfiguration("xanoscript");
        const draftMode = vsconfig.get("draftMode", false);
        const queryParams = new URLSearchParams();
        queryParams.set("publish", draftMode ? "false" : "true");
        queryParams.set("include_draft", draftMode ? "true" : "false");
        queryParams.set("include_xanoscript", "true");
        return (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/table/trigger/${triggerId}?${queryParams.toString()}`, {
            method: "PUT",
            body: script,
            headers: {
                "Content-Type": "text/x-xanoscript",
            },
        });
    });
}
exports.updateTableTrigger = updateTableTrigger;
/**
 * Fetch the list of table triggers within your workspace.
 *
 * @param instanceName unique name of the instance abfc-1234-efgh
 * @param workspaceId the workspace ID within the instance
 * @returns list of table trigger objects
 */
function fetchTableTriggers(instanceName, workspaceId) {
    return __awaiter(this, void 0, void 0, function* () {
        let nextPage = 1;
        const tableTriggers = [];
        const vsconfig = vscode.workspace.getConfiguration("xanoscript");
        const draftMode = vsconfig.get("draftMode", false);
        const queryParams = new URLSearchParams();
        queryParams.set("include_draft", draftMode ? "true" : "false");
        queryParams.set("per_page", "20");
        queryParams.set("branch", encodeURIComponent(config_1.config.branch));
        queryParams.set("include_xanoscript", "true");
        while (nextPage) {
            queryParams.set("page", nextPage.toString());
            const response = yield (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/table/trigger?${queryParams.toString()}`);
            tableTriggers.push(...response.items);
            nextPage = response.nextPage;
        }
        return tableTriggers;
    });
}
exports.fetchTableTriggers = fetchTableTriggers;
/**
 * Create a new table trigger using XanoScript
 * @param instanceName unique name of the instance abfc-1234-efgh
 * @param workspaceId the workspace ID within the instance
 * @param script the XanoScript to create the table trigger with
 */
function createTableTriggerFromXs(instanceName, workspaceId, script) {
    return __awaiter(this, void 0, void 0, function* () {
        const queryParams = new URLSearchParams();
        queryParams.set("branch", config_1.config.branch);
        queryParams.set("include_xanoscript", "true");
        return (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/table/trigger?${queryParams.toString()}`, {
            method: "POST",
            body: script,
            headers: {
                "Content-Type": "text/x-xanoscript",
            },
        });
    });
}
exports.createTableTriggerFromXs = createTableTriggerFromXs;
/**
 * Create a new Table Trigger within your workspace.
 * @param instanceName unique name of the instance abfc-1234-efgh
 * @param workspaceId the workspace ID within the instance
 * @param name the name of the table trigger
 */
function createTableTrigger(instanceName, workspaceId, name) {
    return __awaiter(this, void 0, void 0, function* () {
        const vsconfig = vscode.workspace.getConfiguration("xanoscript");
        const draftMode = vsconfig.get("draftMode", false);
        const queryParams = new URLSearchParams();
        queryParams.set("publish", draftMode ? "false" : "true");
        queryParams.set("include_draft", draftMode ? "true" : "false");
        queryParams.set("include_xanoscript", "true");
        queryParams.set("branch", config_1.config.branch);
        // name should start with a letter and contain only letters, numbers, and underscores
        if (!/^[a-zA-Z][a-zA-Z0-9_]*$/.test(name)) {
            throw new Error("Table trigger name must start with a letter and contain only letters, numbers, and underscores");
        }
        const script = `table_trigger ${name} {
  dbtable = "${(0, lodash_1.snakeCase)(name)}"
  input {
    json new
    json old
    enum action {
      values = ["insert", "update", "delete", "truncate"]
    }
    text datasource
  }
  stack {
  }
  actions = {insert: true, update: true}
}`;
        return (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/table/trigger?${queryParams.toString()}`, {
            method: "POST",
            body: script,
            headers: {
                "Content-Type": "text/x-xanoscript",
            },
        });
    });
}
exports.createTableTrigger = createTableTrigger;
/**
 * Delete a table trigger within your workspace.
 * @param instanceName unique name of the instance abfc-1234-efgh
 * @param workspaceId the workspace ID within the instance
 * @param triggerId the table trigger ID to delete
 */
function deleteTableTrigger(instanceName, workspaceId, triggerId) {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/table/trigger/${triggerId}`, {
            method: "DELETE",
        });
    });
}
exports.deleteTableTrigger = deleteTableTrigger;
//# sourceMappingURL=tableTrigger.js.map