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
exports.createCrudEndpoint = exports.createCrudEndpointCmd = void 0;
const vscode = require("vscode");
const registry_1 = require("../registry/registry");
const lodash_1 = require("lodash");
const openXanoscriptEditor_1 = require("./openXanoscriptEditor");
const config_1 = require("../config");
const createApiGroup_1 = require("./createApiGroup");
const path_1 = require("path");
const extractTableSchema_1 = require("../tooling/extractTableSchema");
function createCrudEndpointCmd() {
    return __awaiter(this, void 0, void 0, function* () {
        const actions = yield vscode.window.showQuickPick([
            { label: "create", description: "Create a new record" },
            { label: "read", description: "Returns an existing record" },
            { label: "update", description: "Update an existing record" },
            { label: "delete", description: "Delete an existing record" },
            { label: "list", description: "Returns a list of records" },
        ], {
            placeHolder: "Select the CRUD action",
            canPickMany: true,
        });
        if (!actions || actions.length === 0) {
            vscode.window.showErrorMessage("CRUD action is required");
            return;
        }
        const registryIndex = yield (0, registry_1.getRegistryIndex)();
        const tables = registryIndex["table"] || [];
        if (tables.length === 0) {
            vscode.window.showErrorMessage("No tables to associate with. Please create a table first.");
            return;
        }
        const table = yield vscode.window.showQuickPick(tables.map((table) => ({
            label: table.name,
        })), {
            placeHolder: "Select the table to associate with",
        });
        if (!table) {
            vscode.window.showErrorMessage("No table selected");
            return;
        }
        const apiGroups = registryIndex["api_group"] || [];
        const apiGroupLabels = apiGroups.map((apiGroup) => ({
            label: apiGroup.name,
        }));
        // add a separator + add new api group option
        apiGroupLabels.push({
            label: "New",
            kind: vscode.QuickPickItemKind.Separator,
        });
        apiGroupLabels.push({
            label: "$(plus) API Group",
            description: "Create a new API Group",
        });
        const apiGroup = yield vscode.window.showQuickPick(apiGroupLabels, {
            placeHolder: "Select the API group to host the endpoint in",
            ignoreFocusOut: true,
        });
        if (!apiGroup) {
            vscode.window.showErrorMessage("No API group selected");
            return;
        }
        let apiGroupName = apiGroup.label;
        if (apiGroupName === "$(plus) API Group") {
            apiGroupName = yield vscode.window.showInputBox({
                prompt: "Enter the API Group name",
                placeHolder: "e.g., Webhooks",
            });
            if (!apiGroupName || apiGroupName.trim() === "") {
                vscode.window.showErrorMessage("API Group Name is required");
                return;
            }
        }
        for (const actionItem of actions) {
            yield createCrudEndpoint({
                action: actionItem.label,
                table: table.label,
                apiGroup: apiGroupName,
            });
        }
    });
}
exports.createCrudEndpointCmd = createCrudEndpointCmd;
const validActions = ["create", "read", "list", "delete", "update"];
function createCrudEndpoint(args) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!validActions.includes(args.action)) {
            vscode.window.showErrorMessage("Invalid CRUD action");
            return;
        }
        // create the api group if it doesn't exist
        const registryIndex = yield (0, registry_1.getRegistryIndex)();
        let { apiGroup } = args;
        const apiGroups = registryIndex["api_group"] || [];
        const apiGroupLabels = apiGroups.map((apiGroup) => apiGroup.name);
        if (!apiGroupLabels.includes(args.apiGroup)) {
            apiGroup = yield (0, createApiGroup_1.createApiGroupCmd)(args.apiGroup);
        }
        switch (args.action) {
            case "delete":
                yield createCrudFile(Object.assign(Object.assign({}, getDeleteCrudEndpointContent(args.table)), { apiGroup }));
                break;
            case "read":
                yield createCrudFile(Object.assign(Object.assign({}, getReadCrudEndpointContent(args.table)), { apiGroup }));
                break;
            case "list":
                yield createCrudFile(Object.assign(Object.assign({}, getListCrudEndpointContent(args.table)), { apiGroup }));
                break;
            case "update":
                yield createCrudFile(Object.assign(Object.assign({}, getUpdateCrudEndpointContent(args.table)), { apiGroup }));
                break;
            case "create":
                yield createCrudFile(Object.assign(Object.assign({}, (yield getCreateCrudEndpointContent(args.table))), { apiGroup }));
                break;
            default:
                vscode.window.showErrorMessage("Invalid CRUD action");
                return;
        }
    });
}
exports.createCrudEndpoint = createCrudEndpoint;
const createCrudFile = (args) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { content, filename, apiGroup } = args;
    const uri = vscode.Uri.file(((_a = vscode.workspace.workspaceFolders) === null || _a === void 0 ? void 0 : _a[0].uri.fsPath) +
        `/apis/${apiGroup}/${filename}`);
    try {
        // check if the file exist
        const fileStat = yield vscode.workspace.fs.stat(uri).then((stat) => stat, () => null);
        if (fileStat) {
            vscode.window.showErrorMessage(`File ${filename} already exists. Aborting to prevent overwrite.`);
            return;
        }
        yield vscode.workspace.fs.writeFile(uri, Buffer.from(content, "utf8"));
        // open the file in the editor
        (0, openXanoscriptEditor_1.openXanoscriptUri)(uri);
        // show success message
        vscode.window.showInformationMessage(`CRUD endpoint ${filename} created successfully`);
        yield (0, registry_1.scanRegistry)([uri.path.slice(config_1.ROOT_PATH.length + 1)]);
    }
    catch (error) {
        vscode.window.showErrorMessage(`Failed to create CRUD endpoint: ${error}`);
        return;
    }
});
function getDeleteCrudEndpointContent(table) {
    const snakeCaseTable = (0, lodash_1.snakeCase)(table);
    const recordId = `${snakeCaseTable}_id`;
    const filename = `${snakeCaseTable}_${recordId}_DELETE.xs`;
    const content = `query ${snakeCaseTable}/{${recordId}} verb=DELETE {
  description = "Delete ${table} record."

  input {
    int ${recordId}? filters=min:1
  }

  stack {
    db.del "${table}" {
      field_name = "id"
      field_value = $input.${recordId}
    }
  }

  response = null
  history = {inherit: true}
}`;
    return { content, filename };
}
function getReadCrudEndpointContent(table) {
    const snakeCaseTable = (0, lodash_1.snakeCase)(table);
    const recordId = `${snakeCaseTable}_id`;
    const filename = `${snakeCaseTable}_${recordId}_GET.xs`;
    const content = `query ${snakeCaseTable}/{${recordId}} verb=GET {
  description = "Read ${table} record."

  input {
    int ${recordId}? filters=min:1
  }

  stack {
    db.get "${table}" {
      field_name = "id"
      field_value = $input.${recordId}
    } as $record
  }

  response = $var.record
  
  history = {inherit: true}
}`;
    return { content, filename };
}
function getListCrudEndpointContent(table) {
    const snakeCaseTable = (0, lodash_1.snakeCase)(table);
    const filename = `${snakeCaseTable}_GET.xs`;
    const content = `query ${snakeCaseTable} verb=GET {
  description = "Query all ${table} records"

  input {
    int page?
  }

  stack {
    db.query "${table}" {
      return = {
        type: "list", 
        paging: {
          page: $input.page, 
          per_page: 30
        }
      }
    } as $${snakeCaseTable}_records
  }

  response = $${snakeCaseTable}_records
  history = {inherit: true}
}`;
    return { content, filename };
}
function getUpdateCrudEndpointContent(table) {
    const snakeCaseTable = (0, lodash_1.snakeCase)(table);
    const recordId = `${snakeCaseTable}_id`;
    const filename = `${snakeCaseTable}_${recordId}_PATCH.xs`;
    const content = `query ${snakeCaseTable}/{${recordId}} verb=PATCH {
  description = "Update ${table} record."

  input {
    int ${recordId}? filters=min:1
    dblink {
      table = "${table}"
    }
  }

  stack {
    util.get_input {
      encoding = "json"
    } as $raw_input
  
    db.patch test_database {
      field_name = "id"
      field_value = $input.${recordId}
      data = \`$input|pick:($raw_input|keys)\`|filter_null|filter_empty_text
    } as $${snakeCaseTable}_updated_record
  }

  response = $${snakeCaseTable}_updated_record
  history = {inherit: true}
}`;
    return { content, filename };
}
function getCreateCrudEndpointContent(table) {
    return __awaiter(this, void 0, void 0, function* () {
        const snakeCaseTable = (0, lodash_1.snakeCase)(table);
        const filename = `${snakeCaseTable}_POST.xs`;
        // we need to retrieve all the columns for the table to create the input schema
        const columns = (yield getTableColumns(table))
            // remove any trailing ?
            .map((col) => (col.endsWith("?") ? col.slice(0, -1) : col))
            // remove id column
            .filter((col) => col !== "id")
            // make it an assignment line for the db.add data block
            .map((col) => `${col}: $input.${col}`)
            // make it muiltiline
            .join("\n        ");
        const content = `query marketing_campaign verb=POST {
  description = "Add marketing_campaign record"

  input {
    dblink {
      table = "marketing_campaign"
    }
  }

  stack {
    db.add marketing_campaign {
      data = {
        ${columns}
      }
    } as $model
  }

  response = $model
  history = {inherit: true}
}`;
        return { content, filename };
    });
}
function getTableColumns(tableName) {
    return __awaiter(this, void 0, void 0, function* () {
        const registry = yield (0, registry_1.getRegistry)();
        const tables = registry.filter((item) => item.type === "table");
        for (const table of tables) {
            // read the file content to get the columns
            const tableContent = yield vscode.workspace.fs.readFile(vscode.Uri.file((0, path_1.join)(config_1.ROOT_PATH, table.path)));
            const tableContentStr = Buffer.from(tableContent).toString("utf8");
            if (tableContentStr.startsWith(`table ${tableName} `) ||
                tableContentStr.startsWith(`table "${tableName}" `)) {
                // Extract column names from the table content
                const columns = (0, extractTableSchema_1.extractTableSchema)(tableContentStr);
                return Object.keys(columns);
            }
        }
        return [];
    });
}
//# sourceMappingURL=createCrudEndpoint.js.map