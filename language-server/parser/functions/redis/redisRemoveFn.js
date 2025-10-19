import { RemoveToken } from "../../../lexer/redis.js";

/**
 * redis.remove {
 *   key = "list"
 *   value = "FIRST"
 *   count = ""
 * }
 * @param {import('../../base_parser.js').XanoBaseParser} $
 */
export function redisRemoveFn($) {
  return () => {
    const requiredAttrs = ["key", "value", "count"];
    const optionalAttrs = ["description", "disabled"];

    $.sectionStack.push("redisRemoveFn");
    const fnToken = $.CONSUME(RemoveToken); // "remove"
    $.SUBRULE($.functionAttrReq, {
      ARGS: [fnToken, requiredAttrs, optionalAttrs],
    });
    $.sectionStack.pop();
  };
}
