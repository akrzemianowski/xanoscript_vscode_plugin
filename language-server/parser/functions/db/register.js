import { dbAddFn } from "./dbAddFn.js";
import { dbAddOrEditFn } from "./dbAddOrEditFn.js";
import { dbDelFn } from "./dbDelFn.js";
import { dbDirectQueryFn } from "./dbDirectQueryFn.js";
import { dbEditFn } from "./dbEditFn.js";
import { dbExternalDirectQueryFn } from "./dbExternalDirectQueryFn.js";
import { dbExternalFn } from "./dbExternalFn.js";
import { dbGetFn } from "./dbGetFn.js";
import { dbHasFn } from "./dbHasFn.js";
import { dbPatchFn } from "./dbPatchFn.js";
import { dbQueryFn } from "./dbQueryFn.js";
import { dbSchemaFn } from "./dbSchemaFn.js";
import { dbSetDatasourceFn } from "./dbSetDatasourceFn.js";
import { dbTransactionFn } from "./dbTransactionFn.js";
import { dbTruncateFn } from "./dbTruncateFn.js";

/**
 * Registers all the parsers in this folder
 * @param {import('../base_parser.js').XanoBaseParser} $
 */
export const register = ($) => {
  $.dbAddFn = $.RULE("dbAddFn", dbAddFn($));
  $.dbDelFn = $.RULE("dbDelFn", dbDelFn($));
  $.dbDirectQueryFn = $.RULE("dbDirectQueryFn", dbDirectQueryFn($));
  $.dbEditFn = $.RULE("dbEditFn", dbEditFn($));
  $.dbExternalDirectQueryFn = $.RULE(
    "dbExternalDirectQueryFn",
    dbExternalDirectQueryFn($)
  );
  $.dbExternalFn = $.RULE("dbExternalFn", dbExternalFn($));
  $.dbGetFn = $.RULE("dbGetFn", dbGetFn($));
  $.dbHasFn = $.RULE("dbHasFn", dbHasFn($));
  $.dbPatchFn = $.RULE("dbPatchFn", dbPatchFn($));
  $.dbQueryFn = $.RULE("dbQueryFn", dbQueryFn($));
  $.dbSchemaFn = $.RULE("dbSchemaFn", dbSchemaFn($));
  $.dbSetDatasourceFn = $.RULE("dbSetDatasourceFn", dbSetDatasourceFn($));
  $.dbTransactionFn = $.RULE("dbTransactionFn", dbTransactionFn($));
  $.dbTruncateFn = $.RULE("dbTruncateFn", dbTruncateFn($));
  $.dbAddOrEditFn = $.RULE("dbAddOrEditFn", dbAddOrEditFn($));
};
