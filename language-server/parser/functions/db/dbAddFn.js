import { AddToken } from "../../../lexer/db.js";
import { StringLiteral } from "../../../lexer/literal.js";
import { Identifier } from "../../../lexer/tokens.js";

/**
 * @param {import('../base_parser.js').XanoBaseParser} $
 */
export function dbAddFn($) {
  return () => {
    const requiredAttrs = ["data"];
    const optionalAttrs = ["description", "disabled", "addon"];

    $.sectionStack.push("dbAddFn");
    const fnToken = $.CONSUME(AddToken); // "edit"
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
        { allowObject: ["data"], allowArray: ["data", "addon"] },
      ],
    });
    $.SUBRULE($.asVariable, { ARGS: [fnToken] });
    $.sectionStack.pop();
  };
}
