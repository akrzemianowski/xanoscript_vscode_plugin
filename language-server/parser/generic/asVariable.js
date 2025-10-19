import { AsToken } from "../../lexer/control.js";

/**
 * represent $var.x or $x, the only format accepting an assigment
 * @param {import('../base_parser.js').XanoBaseParser} $
 */
export function asVariable($) {
  /**
   * @param {import('chevrotain').IToken} parent
   **/
  return () => {
    $.OPTION(() => {
      $.CONSUME(AsToken); // "as"
      $.SUBRULE($.assignableVariableProperty);
    });
  };
}
