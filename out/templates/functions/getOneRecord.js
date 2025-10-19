"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOneRecordFunction = void 0;
const lodash_1 = require("lodash");
/**
 * Generates a xanoscript function to retrieve a single record from a database table.
 *
 * This is a template to help AI edit instead of creating a new function from scratch.
 *
 * @param tableName The name of the database table.
 * @param objectId The ID of the object to retrieve.
 * @returns The generated function code and path.
 */
function getOneRecordFunction(tableName, objectId) {
    const safeTableName = (0, lodash_1.snakeCase)(tableName);
    const safeObjectId = (0, lodash_1.snakeCase)(objectId);
    const path = `${safeTableName}/get_one_${safeTableName}`;
    const code = `
function ${path} {
  input {
    int ${safeObjectId} filters=min:1
  }

  stack {
    db.get "${tableName}" {
      description = "Get a single ${tableName} record by ID"
      field_name = "id"
      field_value = $input.${safeObjectId}
    } as $model
  }

  response {
    value = $model
  }

  history = {inherit: true}
}`;
    return {
        code: code.trim(),
        path: path + ".xs",
    };
}
exports.getOneRecordFunction = getOneRecordFunction;
//# sourceMappingURL=getOneRecord.js.map