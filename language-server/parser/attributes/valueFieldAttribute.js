import { EqualToken } from "../../lexer/control.js";
import { ValueToken } from "../../lexer/tokens.js";

/**
 * Defines a value to be an expression
 * @param {import('../base_parser.js').XanoBaseParser} $
 */
export function valueFieldAttribute($) {
  return () => {
    $.sectionStack.push("valueFieldAttribute");
    $.CONSUME(ValueToken); // "value"
    $.CONSUME(EqualToken); // "="
    // TODO: We'll likely want to also block $var references
    $.SUBRULE($.valueExpression, { ARGS: [{ allowIdentifier: false }] }); // e.g., "A value of the field"
    $.sectionStack.pop();
  };
}
