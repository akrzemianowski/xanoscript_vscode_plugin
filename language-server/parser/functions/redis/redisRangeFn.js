import { RangeToken } from "../../../lexer/redis.js";

/**
 * redis.range {
 *   key = "list"
 *   start = 0
 *   stop = 1
 * } as $x10
 * @param {import('../../base_parser.js').XanoBaseParser} $
 */
export function redisRangeFn($) {
  return () => {
    const requiredAttrs = ["key", "start", "stop"];
    const optionalAttrs = ["description", "disabled"];

    $.sectionStack.push("redisRangeFn");
    const fnToken = $.CONSUME(RangeToken); // "range"
    $.SUBRULE($.functionAttrReq, {
      ARGS: [fnToken, requiredAttrs, optionalAttrs],
    });
    $.SUBRULE($.asVariable, { ARGS: [fnToken] });
    $.sectionStack.pop();
  };
}
