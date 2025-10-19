import { CountToken } from "../../../lexer/redis.js";

/**
 * redis.count {
 *   key = "list"
 * } as $x9
 * @param {import('../../base_parser.js').XanoBaseParser} $
 */
export function redisCountFn($) {
  return () => {
    const requiredAttrs = ["key"];
    const optionalAttrs = ["description", "disabled"];

    $.sectionStack.push("redisCountFn");
    const fnToken = $.CONSUME(CountToken); // "count"
    $.SUBRULE($.functionAttrReq, {
      ARGS: [fnToken, requiredAttrs, optionalAttrs],
    });
    $.SUBRULE($.asVariable, { ARGS: [fnToken] });
    $.sectionStack.pop();
  };
}
