import { GetInputToken } from "../../../lexer/util.js";

/**
 * @param {import('../../base_parser.js').XanoBaseParser} $
 */
export function utilGetInputFn($) {
  // util.get_input as $x3
  return () => {
    const requiredAttrs = ["encoding"];
    const optionalAttrs = ["description", "disabled"];

    $.sectionStack.push("utilGetInputFn");
    const fnToken = $.CONSUME(GetInputToken); // "get_input"
    $.SUBRULE($.functionAttrReq, {
      ARGS: [fnToken, requiredAttrs, optionalAttrs],
    });
    $.SUBRULE($.asVariable, { ARGS: [fnToken] });
    $.sectionStack.pop();
  };
}
