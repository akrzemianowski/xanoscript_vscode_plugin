import { arrayEveryFn } from "./arrayEveryFn.js";
import { arrayFilterCountFn } from "./arrayFilterCountFn.js";
import { arrayFilterFn } from "./arrayFilterFn.js";
import { arrayFindFn } from "./arrayFindFn.js";
import { arrayFindIndexFn } from "./arrayFindIndexFn.js";
import { arrayHasFn } from "./arrayHasFn.js";
import { arrayMergeFn } from "./arrayMergeFn.js";
import { arrayNoValueAs } from "./arrayNoValueAs.js";
import { arrayPopFn } from "./arrayPopFn.js";
import { arrayPushFn } from "./arrayPushFn.js";
import { arrayShiftFn } from "./arrayShiftFn.js";
import { arrayUnshiftFn } from "./arrayUnshiftFn.js";
import { arrayValueAs } from "./arrayValueAs.js";
import { arrayValueIfAs } from "./arrayValueIfAs.js";
import { arrayValueOnly } from "./arrayValueOnly.js";
import { valueAttrOnly } from "./valueAttrOnly.js";

/**
 * Registers all the parsers in this folder
 * @param {import('../base_parser.js').XanoBaseParser} $
 */
export const register = ($) => {
  $.arrayEveryFn = $.RULE("arrayEveryFn", arrayEveryFn($));
  $.arrayFilterCountFn = $.RULE("arrayFilterCountFn", arrayFilterCountFn($));
  $.arrayFilterFn = $.RULE("arrayFilterFn", arrayFilterFn($));
  $.arrayFindFn = $.RULE("arrayFindFn", arrayFindFn($));
  $.arrayFindIndexFn = $.RULE("arrayFindIndexFn", arrayFindIndexFn($));
  $.arrayHasFn = $.RULE("arrayHasFn", arrayHasFn($));
  $.arrayMergeFn = $.RULE("arrayMergeFn", arrayMergeFn($));
  $.arrayNoValueAs = $.RULE("arrayNoValueAs", arrayNoValueAs($));
  $.arrayPopFn = $.RULE("arrayPopFn", arrayPopFn($));
  $.arrayPushFn = $.RULE("arrayPushFn", arrayPushFn($));
  $.arrayShiftFn = $.RULE("arrayShiftFn", arrayShiftFn($));
  $.arrayUnshiftFn = $.RULE("arrayUnshiftFn", arrayUnshiftFn($));
  $.arrayValueAs = $.RULE("arrayValueAs", arrayValueAs($));
  $.arrayValueIfAs = $.RULE("arrayValueIfAs", arrayValueIfAs($));
  $.arrayValueOnly = $.RULE("arrayValueOnly", arrayValueOnly($));
  $.valueAttrOnly = $.RULE("valueAttrOnly", valueAttrOnly($));
};
