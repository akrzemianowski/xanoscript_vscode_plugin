import { DelToken } from "../../../lexer/redis.js";

/**
 * redis.del {
 *   key = "name"
 * }
 * @param {import('../../base_parser.js').XanoBaseParser} $
 */
export function redisDelFn($) {
  return () => {
    const requiredAttrs = ["key"];
    const optionalAttrs = ["description", "disabled"];

    $.sectionStack.push("redisDelFn");
    const fnToken = $.CONSUME(DelToken); // "del"
    $.SUBRULE($.functionAttrReq, {
      ARGS: [fnToken, requiredAttrs, optionalAttrs],
    });
    $.sectionStack.pop();
  };
}
