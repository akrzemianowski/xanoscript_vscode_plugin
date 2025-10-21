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
exports.fetchTable = fetchTable;
exports.updateTable = updateTable;
exports.fetchTables = fetchTables;
exports.fetchTablesForAI = fetchTablesForAI;
exports.createTable = createTable;
exports.createTableFromXs = createTableFromXs;
exports.deleteTable = deleteTable;
exports.batchAddRecordsToTable = batchAddRecordsToTable;
const vscode = require("vscode");
const request_1 = require("./request");
const lodash_1 = require("lodash");
/**
 * Return the Xanoscript version of a given Table within your workspace.
 * @param tableId the table ID to fetch the Xanoscript from
 * @returns
 */
function fetchTable(instanceName, workspaceId, tableId) {
    const queryParams = new URLSearchParams();
    queryParams.set("include_xanoscript", "true");
    return (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/table/${tableId}?${queryParams.toString()}`);
}
/**
 * Update the Xanoscript version of a given Table within your workspace.
 * @param instanceName unique name of the instance abfc-1234-efgh
 * @param workspaceId the workspace ID within the instance
 * @param tableId the table ID to fetch the Xanoscript from
 * @param xanoscript the new Xanoscript to update the table with
 * @returns
 */
function updateTable(instanceName, workspaceId, tableId, xanoscript) {
    const queryParams = new URLSearchParams();
    queryParams.set("include_xanoscript", "true");
    return (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/table/${tableId}?${queryParams.toString()}`, {
        method: "PUT",
        body: xanoscript,
        headers: {
            "Content-Type": "text/x-xanoscript",
        },
    });
}
/**
 * Fetch the list of tables within your workspace.
 * @returns list of table objects
 */
function fetchTables(instanceName_1, workspaceId_1) {
    return __awaiter(this, arguments, void 0, function* (instanceName, workspaceId, include_xanoscript = true) {
        let nextPage = 1;
        const tables = [];
        const queryParams = new URLSearchParams();
        queryParams.set("include_xanoscript", include_xanoscript ? "true" : "false");
        queryParams.set("per_page", "20");
        while (nextPage) {
            queryParams.set("page", nextPage.toString());
            const response = yield (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/table?${queryParams.toString()}`);
            tables.push(...response.items);
            nextPage = response.nextPage;
        }
        return tables;
    });
}
function fetchTablesForAI(instanceName, workspaceId) {
    return __awaiter(this, void 0, void 0, function* () {
        const tables = yield fetchTables(instanceName, workspaceId, false);
        return tables.map((table) => ({
            id: table.id,
            name: table.name,
            description: table.description,
            schema: table.schema,
        }));
    });
}
/**
 * create a new table within your workspace.
 * @param instanceName unique name of the instance abfc-1234-efgh
 * @param workspaceId the workspace ID within the instance
 * @param name the name of the table
 * @param description the description of the table
 * @param auth whether the table requires authentication
 * @returns
 */
function createTable(instanceName, workspaceId, name, description, auth) {
    return __awaiter(this, void 0, void 0, function* () {
        const queryParams = new URLSearchParams();
        queryParams.set("include_xanoscript", "true");
        const vsconfig = vscode.workspace.getConfiguration("xanoscript");
        const tablePrimaryKeyType = vsconfig.get("tablePrimaryKeyType", "int");
        const xanoscript = `table ${(0, lodash_1.snakeCase)(name)} {
  description = "${description}"
  auth = ${auth ? "true" : "false"}

  schema {
    ${tablePrimaryKeyType} id
    timestamp created_at?=now
  }

  index = [
    {type: "primary", field: [{name: "id"}]}
    {type: "btree", field: [{name: "created_at", op: "desc"}]}
  ]
}`;
        return createTableFromXs(instanceName, workspaceId, xanoscript);
    });
}
/**
 * create a new table within your workspace.
 * @param instanceName unique name of the instance abfc-1234-efgh
 * @param workspaceId the workspace ID within the instance
 * @param xanoscript the XanoScript to create the table with
 * @returns
 */
function createTableFromXs(instanceName, workspaceId, xanoscript) {
    return __awaiter(this, void 0, void 0, function* () {
        const queryParams = new URLSearchParams();
        queryParams.set("include_xanoscript", "true");
        const response = yield (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/table?${queryParams.toString()}`, {
            method: "POST",
            body: xanoscript,
            headers: {
                "Content-Type": "text/x-xanoscript",
            },
        });
        if (!response) {
            throw new Error("Table creation failed");
        }
        return fetchTable(instanceName, workspaceId, response.id);
    });
}
/**
 * Delete a table within your workspace.
 * @param instanceName unique name of the instance abfc-1234-efgh
 * @param workspaceId the workspace ID within the instance
 * @param tableId
 */
function deleteTable(instanceName, workspaceId, tableId) {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/table/${tableId}`, {
            method: "DELETE",
        });
    });
}
/**
 * Add records as a batch to a given table within your workspace.
 * @param instanceName unique name of the instance abfc-1234-efgh
 * @param workspaceId the workspace ID within the instance
 * @param tableId the table ID to add records to
 * @param records the records to add (array of objects)
 * @returns
 */
function batchAddRecordsToTable(instanceName, workspaceId, datasource, tableId, rows) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/table/${tableId}/content/bulk`, {
            method: "POST",
            body: JSON.stringify({ items: rows, allow_id_field: false }),
            headers: {
                "x-data-source": datasource,
                "Content-Type": "application/json",
            },
        });
    });
}
//# sourceMappingURL=dbo.js.map