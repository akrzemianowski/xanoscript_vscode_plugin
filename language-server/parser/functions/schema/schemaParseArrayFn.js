import { first } from "lodash-es";
import { CommaToken, LSquare, RSquare } from "../../../lexer/control.js";
import { NewlineToken } from "../../../lexer/tokens.js";

/**
 * @param {import('../../base_parser.js').XanoBaseParser} $
 */
export function schemaParseArrayFn($) {
  return (token, schema) => {
    let needSeparator = false;

    $.CONSUME(LSquare); // "["
    $.MANY(() => {
      $.MANY1(() => {
        needSeparator = false;
        $.CONSUME(NewlineToken);
      });

      if (needSeparator) {
        $.addInvalidValueError(
          "Expected a comma, a new line or closing bracket"
        );
      }
      $.SUBRULE($.schemaFn, { ARGS: [token, first(schema)] });
      needSeparator = true;

      $.MANY2(() => {
        needSeparator = false;
        $.CONSUME1(NewlineToken);
      });
      $.OPTION(() => {
        needSeparator = false;
        return $.CONSUME1(CommaToken);
      });
    });
    $.CONSUME(RSquare); // "]"
  };
}

/**
 *
 * @param {*} attr
 * @returns
 */
export function schemaExpectArray(attr) {
  if (typeof attr !== "object" || !Array.isArray(attr)) return false;
  return attr.length == 1;
}
