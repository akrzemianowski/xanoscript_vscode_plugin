import { UnshiftToken } from "../../../lexer/redis.js";

/**
 * redis.unshift {
 *   key = "list"
 *   value = "zero"
 * } as $x6
 * @param {import('../../base_parser.js').XanoBaseParser} $
 */
export function redisUnshiftFn($) {
  return () => {
    const requiredAttrs = ["key", "value"];
    const optionalAttrs = ["description", "disabled"];

    $.sectionStack.push("redisUnshiftFn");
    const fnToken = $.CONSUME(UnshiftToken); // "unshift"
    $.SUBRULE($.functionAttrReq, {
      ARGS: [fnToken, requiredAttrs, optionalAttrs],
    });
    $.SUBRULE($.asVariable, { ARGS: [fnToken] });
    $.sectionStack.pop();
  };
}
