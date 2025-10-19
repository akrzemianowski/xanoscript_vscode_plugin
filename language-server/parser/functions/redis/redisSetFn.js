import { SetToken } from "../../../lexer/redis.js";

/**
 * redis.set {
 *   key = "name"
 *   data = "xano"
 *   ttl = 0
 * }
 * @param {import('../../base_parser.js').XanoBaseParser} $
 */
export function redisSetFn($) {
  return () => {
    const requiredAttrs = ["key", "data", "ttl"];
    const optionalAttrs = ["description", "disabled"];

    $.sectionStack.push("redisSetFn");
    const fnToken = $.CONSUME(SetToken); // "set"
    $.SUBRULE($.functionAttrReq, {
      ARGS: [fnToken, requiredAttrs, optionalAttrs],
    });
    $.sectionStack.pop();
  };
}
