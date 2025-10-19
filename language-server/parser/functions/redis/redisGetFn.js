import { GetToken } from "../../../lexer/redis.js";

/**
 * redis.get {
 *   key = "xano"
 * } as $x1
 * @param {import('../../base_parser.js').XanoBaseParser} $
 */
export function redisGetFn($) {
  return () => {
    const requiredAttrs = ["key"];
    const optionalAttrs = ["description", "disabled"];

    $.sectionStack.push("redisGetFn");
    const fnToken = $.CONSUME(GetToken); // "get"
    $.SUBRULE($.functionAttrReq, {
      ARGS: [fnToken, requiredAttrs, optionalAttrs],
    });
    $.SUBRULE($.asVariable, { ARGS: [fnToken] });
    $.sectionStack.pop();
  };
}
