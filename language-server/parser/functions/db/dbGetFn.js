import { GetToken } from "../../../lexer/db.js";
import { StringLiteral } from "../../../lexer/literal.js";
import { Identifier } from "../../../lexer/tokens.js";

/**
 * @param {import('../base_parser.js').XanoBaseParser} $
 */
export function dbGetFn($) {
  return () => {
    const requiredAttrs = ["field_value", "field_name"];
    const optionalAttrs = ["description", "disabled", "addon", "output"];

    $.sectionStack.push("dbGetFn");
    const fnToken = $.CONSUME(GetToken); // "get"
    $.OR({
      DEF: [
        { ALT: () => $.CONSUME(Identifier) }, // user
        { ALT: () => $.CONSUME1(StringLiteral) }, // "user table"
      ],
      ERR_MSG: "Expected a table name",
    });
    $.SUBRULE($.functionAttrReq, {
      ARGS: [
        fnToken,
        requiredAttrs,
        optionalAttrs,
        { allowArray: ["addon", "output"] },
      ],
    });
    $.SUBRULE($.asVariable, { ARGS: [fnToken] });
    $.sectionStack.pop();
  };
}
