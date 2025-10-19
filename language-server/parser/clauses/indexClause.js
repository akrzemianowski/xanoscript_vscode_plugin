import { EqualToken } from "../../lexer/control.js";
import { IndexToken } from "../../lexer/tokens.js";

/**
 * @param {import('../base_parser.js').XanoBaseParser} $
 * @returns
 */
export function indexClause($) {
  return () => {
    $.sectionStack.push("indexClause");
    const parent = $.CONSUME(IndexToken); // "index"
    $.CONSUME(EqualToken); // "="
    $.SUBRULE($.arrayOfObjectAttrReq, {
      ARGS: [
        parent,
        ["type", "field"],
        ["name"],
        {
          types: {
            type: "string",
          },
        },
      ],
    });

    $.sectionStack.pop();
  };
}
