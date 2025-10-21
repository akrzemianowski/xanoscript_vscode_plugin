import { DotToken, Identifier } from "../../lexer/tokens.js";
import { LongFormVariable } from "../../lexer/variables.js";

/**
 * matches the long form variable definition like
 * $var.x
 * $var.x.y.z
 * $var.x[1].y
 *
 * @param {import('../base_parser.js').XanoBaseParser} $
 * @returns
 */
export function longFormVariable($) {
  return () => {
    $.CONSUME(LongFormVariable);
    $.CONSUME(DotToken);
    $.CONSUME(Identifier);
    $.SUBRULE($.chainedIdentifier);
  };
}
