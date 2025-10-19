import { DirectQueryToken } from "../../../lexer/db.js";

/**
 * @param {import('../base_parser.js').XanoBaseParser} $
 */
export function dbDirectQueryFn($) {
  return () => {
    const requiredAttrs = ["sql", "response_type"];
    const optionalAttrs = ["description", "disabled", "arg"];
    $.sectionStack.push("dbDirectQueryFn");
    const fnToken = $.CONSUME(DirectQueryToken); // "direct_query"
    $.SUBRULE($.functionAttrReq, {
      ARGS: [
        fnToken,
        requiredAttrs,
        optionalAttrs,
        { allowDuplicates: ["arg"] },
      ],
    });
    $.SUBRULE($.asVariable, { ARGS: [fnToken] });
    $.sectionStack.pop();
  };
}
