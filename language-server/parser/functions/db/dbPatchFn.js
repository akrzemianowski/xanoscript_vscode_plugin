import { PatchToken } from "../../../lexer/db.js";
import { StringLiteral } from "../../../lexer/literal.js";
import { Identifier } from "../../../lexer/tokens.js";

/**
 * @param {import('../base_parser.js').XanoBaseParser} $
 */
export function dbPatchFn($) {
  return () => {
    const requiredAttrs = ["field_value", "field_name", "data"];
    const optionalAttrs = ["description", "disabled", "addon"];

    $.sectionStack.push("dbPatchFn");
    const fnToken = $.CONSUME(PatchToken); // "patch"
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
