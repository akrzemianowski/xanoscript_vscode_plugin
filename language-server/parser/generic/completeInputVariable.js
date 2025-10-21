import { DotToken, Identifier } from "../../lexer/tokens.js";
import { InputVariable } from "../../lexer/variables.js";

/**
 *
 * @param {import('../base_parser.js').XanoBaseParser} $
 * @returns
 */
export function completeInputVariable($) {
  return () => {
    $.CONSUME(InputVariable);
    $.CONSUME(DotToken);
    $.CONSUME(Identifier);
    $.SUBRULE($.chainedIdentifier);
  };
}
