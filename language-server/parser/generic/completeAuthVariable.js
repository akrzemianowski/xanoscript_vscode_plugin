import { DotToken, Identifier } from "../../lexer/tokens.js";
import { AuthVariable } from "../../lexer/variables.js";

/**
 *
 * @param {import('../base_parser.js').XanoBaseParser} $
 * @returns
 */
export function completeAuthVariable($) {
  return () => {
    $.CONSUME(AuthVariable);
    $.CONSUME(DotToken);
    $.CONSUME(Identifier);
    $.SUBRULE($.chainedIdentifier);
  };
}
