import { HasToken } from "../../../lexer/redis.js";

/**
 * redis.has {
 *   key = "name"
 * } as $x2
 * @param {import('../../base_parser.js').XanoBaseParser} $
 */
export function redisHasFn($) {
  return () => {
    const requiredAttrs = ["key"];
    const optionalAttrs = ["description", "disabled"];

    $.sectionStack.push("redisHasFn");
    const fnToken = $.CONSUME(HasToken); // "has"
    $.SUBRULE($.functionAttrReq, {
      ARGS: [fnToken, requiredAttrs, optionalAttrs],
    });
    $.SUBRULE($.asVariable, { ARGS: [fnToken] });
    $.sectionStack.pop();
  };
}
