import { EqualToken } from "../../lexer/control.js";
import { ResponseToken } from "../../lexer/tokens.js";

/**
 * response = $entries
 * @param {import('../base_parser.js').XanoBaseParser} $
 * @returns
 */
export function responseClause($) {
  return () => {
    $.sectionStack.push("responseClause");
    $.CONSUME(ResponseToken); // "response"
    $.CONSUME(EqualToken); // "="
    $.SUBRULE($.valueExpression);
    $.sectionStack.pop();
  };
}
