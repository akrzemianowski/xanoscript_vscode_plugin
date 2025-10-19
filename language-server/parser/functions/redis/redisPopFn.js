import { PopToken } from "../../../lexer/redis.js";

/**
 * @param {import('../../base_parser.js').XanoBaseParser} $
 */
export function redisPopFn($) {
  // redis.pop {
  //   key = "list"
  // } as $x7
  return () => {
    const requiredAttrs = ["key"];
    const optionalAttrs = ["description", "disabled"];

    $.sectionStack.push("redisPopFn");
    const fnToken = $.CONSUME(PopToken); // "pop"
    $.SUBRULE($.functionAttrReq, {
      ARGS: [fnToken, requiredAttrs, optionalAttrs],
    });
    $.SUBRULE($.asVariable, { ARGS: [fnToken] });
    $.sectionStack.pop();
  };
}
