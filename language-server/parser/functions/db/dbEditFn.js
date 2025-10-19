import { EditToken } from "../../../lexer/db.js";
import { StringLiteral } from "../../../lexer/literal.js";
import { Identifier } from "../../../lexer/tokens.js";

/**
 * @param {import('../base_parser.js').XanoBaseParser} $
 */
export function dbEditFn($) {
  return () => {
    const requiredAttrs = ["field_value", "field_name", "data"];
    const optionalAttrs = ["description", "disabled", "addon"];

    $.sectionStack.push("dbEditFn");
    const fnToken = $.CONSUME(EditToken); // "edit"
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
        {
          allowArray: ["addon"],
          types: {
            data: "object",
            description: "string",
            disabled: "boolean",
            field_name: "string",
          },
        },
      ],
    });
    $.SUBRULE($.asVariable, { ARGS: [fnToken] });
    $.sectionStack.pop();
  };
}
