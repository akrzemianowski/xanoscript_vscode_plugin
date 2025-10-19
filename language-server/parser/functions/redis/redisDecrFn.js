import { DecrToken } from "../../../lexer/redis.js";

/**
 * redis.decr {
 *   key = "counter"
 *   by = 1
 * } as $x4
 * @param {import('../../base_parser.js').XanoBaseParser} $
 */
export function redisDecrFn($) {
  return () => {
    const requiredAttrs = ["key", "by"];
    const optionalAttrs = ["description", "disabled"];

    $.sectionStack.push("redisDecrFn");
    const fnToken = $.CONSUME(DecrToken); // "decr"
    $.SUBRULE($.functionAttrReq, {
      ARGS: [fnToken, requiredAttrs, optionalAttrs],
    });
    $.SUBRULE($.asVariable, { ARGS: [fnToken] });
    $.sectionStack.pop();
  };
}
