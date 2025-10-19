import { EveryToken } from "../../../lexer/arrays.js";

/**
 * @param {import('../../base_parser.js').XanoBaseParser} $
 */
export function arrayEveryFn($) {
  return () => {
    $.sectionStack.push("arrayEveryFn");
    $.CONSUME(EveryToken); // "every"
    $.SUBRULE($.arrayValueIfAs);
    $.sectionStack.pop();
  };
}
