import { ToThrowToken } from "../../../lexer/expect.js";

/**
 * @param {import('../../base_parser.js').XanoBaseParser} $
 */
export function workflowExpectToThrowFn($) {
  const requiredAttrs = [];
  const optionalAttrs = ["value"];

  return () => {
    $.sectionStack.push("workflowExpectToThrowFn");
    const fnToken = $.CONSUME(ToThrowToken); // "to_throw"
    $.SUBRULE($.functionAttrReq, {
      ARGS: [fnToken, requiredAttrs, optionalAttrs],
    });
    $.sectionStack.pop();
  };
}
