"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getManyRecordsQuery = void 0;
/**
 * Generates a xanoscript endpoint to retrieve a single record from a database table.
 *
 * This is a template to help AI edit instead of creating a new function from scratch.
 *
 * @param tableName The name of the database table.
 * @param objectId The ID of the object to retrieve.
 * @returns The generated function code and path.
 */
function getManyRecordsQuery(apiGroupName, tableName, publicApi = true) {
    const code = `
query ${tableName} verb=GET {
  ${publicApi ? 'auth = "user"' : ""}
  input {
    int page? {
      description = "page number (starts from 1)"
    }
    int per_page? {
      description = "number of items per page"
    }
    int offset? {
      description = "number of items to skip before starting to collect the result set"
    }
    object sort? {
      schema {
        text orderBy? filters=trim {
          description = "Field to sort by"
        }
        text sortBy?="created_at" filters=trim {
          description = "Sort direction (asc|desc)"
        }
      }
    }
  }

  stack {
    db.query "${tableName}" {
      return_list = {
        paging: {
          page    : 1
          per_page: 25
          totals  : true
          offset  : 0
          metadata: true
        }
      }
    
      external_simple = {
        page    : $input.page
        per_page: $input.per_page
        offset  : $input.offset
        sort    : $input.sort
      }
    
    } as $model
  }

  response {
    value = $model
  }

  history = {inherit: true}
}}`;
    return {
        code: code.trim(),
        path: `${apiGroupName}/${tableName}_GET.xs`,
    };
}
exports.getManyRecordsQuery = getManyRecordsQuery;
//# sourceMappingURL=getManyRecords.js.map