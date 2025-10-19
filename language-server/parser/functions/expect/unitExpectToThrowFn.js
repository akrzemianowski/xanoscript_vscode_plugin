import { ToThrowToken } from "../../../lexer/expect.js";

/**
 * @param {import('../../base_parser.js').XanoBaseParser} $
 */
export function unitExpectToThrowFn($) {
  const requiredAttrs = [];
  const optionalAttrs = ["exception"];

  return () => {
    $.sectionStack.push("unitExpectToThrowFn");
    const fnToken = $.CONSUME(ToThrowToken); // "to_throw"
    $.SUBRULE($.functionAttrReq, {
      ARGS: [fnToken, requiredAttrs, optionalAttrs],
    });
    $.sectionStack.pop();
  };
}
