import { RatelimitToken } from "../../../lexer/redis.js";

/**
 * redis.ratelimit {
 *   key = "list"
 *   max = 0
 *   ttl = 60
 *   error = ""
 * } as $ratelimit1
 * @param {import('../../base_parser.js').XanoBaseParser} $
 */
export function redisRateLimitFn($) {
  return () => {
    const requiredAttrs = ["key", "max", "ttl", "error"];
    const optionalAttrs = ["description", "disabled"];

    $.sectionStack.push("redisRateLimitFn");
    const fnToken = $.CONSUME(RatelimitToken); // "ratelimit"
    $.SUBRULE($.functionAttrReq, {
      ARGS: [fnToken, requiredAttrs, optionalAttrs],
    });
    $.SUBRULE($.asVariable, { ARGS: [fnToken] });
    $.sectionStack.pop();
  };
}
