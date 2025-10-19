import { ShiftToken } from "../../../lexer/redis.js";

/**
 * redis.shift {
 *   key = "list"
 * } as $x8
 * @param {import('../../base_parser.js').XanoBaseParser} $
 */
export function redisShiftFn($) {
  return () => {
    const requiredAttrs = ["key"];
    const optionalAttrs = ["description", "disabled"];

    $.sectionStack.push("redisShiftFn");
    const fnToken = $.CONSUME(ShiftToken); // "shift"
    $.SUBRULE($.functionAttrReq, {
      ARGS: [fnToken, requiredAttrs, optionalAttrs],
    });
    $.SUBRULE($.asVariable, { ARGS: [fnToken] });
    $.sectionStack.pop();
  };
}
