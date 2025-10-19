import { KeysToken } from "../../../lexer/redis.js";

/**
 * redis.keys {
 *   search = "name*"
 * } as $keys1
 * @param {import('../../base_parser.js').XanoBaseParser} $
 */
export function redisKeysFn($) {
  return () => {
    const requiredAttrs = ["search"];
    const optionalAttrs = ["description", "disabled"];

    $.sectionStack.push("redisKeysFn");
    const fnToken = $.CONSUME(KeysToken); // "keys"
    $.SUBRULE($.functionAttrReq, {
      ARGS: [fnToken, requiredAttrs, optionalAttrs],
    });
    $.SUBRULE($.asVariable, { ARGS: [fnToken] });
    $.sectionStack.pop();
  };
}
