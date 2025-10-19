import { MergeToken } from "../../../lexer/arrays.js";

// array.merge {
//   value = "test"
// }
/**
 * @param {import('../../base_parser.js').XanoBaseParser} $
 */
export function arrayMergeFn($) {
  return () => {
    $.sectionStack.push("arrayMergeFn");
    $.CONSUME(MergeToken); // "merge"
    $.SUBRULE($.variableOnly);
    $.SUBRULE($.arrayValueOnly);
    $.sectionStack.pop();
  };
}
