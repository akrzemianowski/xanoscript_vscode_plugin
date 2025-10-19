"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOneRecordQuery = void 0;
const lodash_1 = require("lodash");
/**
 * Generates a xanoscript endpoint to retrieve a single record from a database table.
 *
 * This is a template to help AI edit instead of creating a new function from scratch.
 *
 * @param tableName The name of the database table.
 * @param objectId The ID of the object to retrieve.
 * @returns The generated function code and path.
 */
function getOneRecordQuery(apiGroupName, tableName, objectId) {
    const safeTableName = (0, lodash_1.snakeCase)(tableName);
    const safeObjectId = (0, lodash_1.snakeCase)(objectId);
    const code = `
query "${tableName}/{${safeObjectId}}" verb=GET {
  input {
    int ${safeObjectId} filters=min:1
  }

  stack {
    db.get "${tableName}" {
      description = "Get a single ${tableName} record by ID"
      field_name = "id"
      field_value = $input.${safeObjectId}
    } as $model
  
    precondition ($model != null) {
      description = "Throw not found error if requested ${tableName} record was not found"
      error_type = "notfound"
      error = "Not Found"
    }
  }

  response {
    value = $model
  }

  history = {inherit: true}
}`;
    return {
        code: code.trim(),
        path: `${apiGroupName}/${safeTableName}_${safeObjectId}_GET.xs`,
    };
}
exports.getOneRecordQuery = getOneRecordQuery;
//# sourceMappingURL=getOneRecord.js.map