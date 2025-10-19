import { IncrToken } from "../../../lexer/redis.js";

/**
 * redis.incr {
 *   package_key = "1"
 *   key = "counter"
 *   by = 1
 * } as $x3
 * @param {import('../../base_parser.js').XanoBaseParser} $
 */
export function redisIncrFn($) {
  return () => {
    const requiredAttrs = ["package_key", "key", "by"];
    const optionalAttrs = ["description", "disabled"];

    $.sectionStack.push("redisIncrFn");
    const fnToken = $.CONSUME(IncrToken); // "incr"
    $.SUBRULE($.functionAttrReq, {
      ARGS: [fnToken, requiredAttrs, optionalAttrs],
    });
    $.SUBRULE($.asVariable, { ARGS: [fnToken] });
    $.sectionStack.pop();
  };
}
