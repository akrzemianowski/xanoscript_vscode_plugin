import { DirectQueryToken } from "../../../lexer/db.js";

/**
 * @param {import('../base_parser.js').XanoBaseParser} $
 */
export function dbExternalDirectQueryFn($) {
  return () => {
    const requiredAttrs = ["code", "response_type", "connection_string"];
    const optionalAttrs = ["description", "disabled", "arg"];
    $.sectionStack.push("dbExternalDirectQueryFn");
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
