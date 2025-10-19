import { PushToken } from "../../../lexer/redis.js";

/**
 * redis.push {
 *   package_key = "1"
 *   key = "list"
 *   value = "second"
 * } as $x5
 * @param {import('../../base_parser.js').XanoBaseParser} $
 */
export function redisPushFn($) {
  return () => {
    const requiredAttrs = ["key", "value", "package_key"];
    const optionalAttrs = ["description", "disabled"];

    $.sectionStack.push("redisPushFn");
    const fnToken = $.CONSUME(PushToken); // "push"
    $.SUBRULE($.functionAttrReq, {
      ARGS: [fnToken, requiredAttrs, optionalAttrs],
    });
    $.SUBRULE($.asVariable, { ARGS: [fnToken] });
    $.sectionStack.pop();
  };
}
