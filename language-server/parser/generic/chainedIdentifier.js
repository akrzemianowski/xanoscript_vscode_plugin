import { LSquare, RSquare } from "../../lexer/control.js";
import { IntegerLiteral } from "../../lexer/literal.js";
import { DotToken, Identifier } from "../../lexer/tokens.js";

/**
 * to be used after a variable to reference their properties
 * like foo.bar.x[1].y[2].z
 * @param {import('../base_parser.js').XanoBaseParser} $
 * @returns
 */
export function chainedIdentifier($) {
  return () => {
    // because this rule is used just after a rule for $var.name
    // or $name, we want to first allow an optional array index
    // e.g., [123]
    $.OPTION(() => {
      $.CONSUME(LSquare);
      $.OR({
        DEF: [
          { ALT: () => $.SUBRULE($.completeInputVariable) }, // e.g., $input.index
          { ALT: () => $.SUBRULE($.longFormVariable) }, // e.g., $var.index
          { ALT: () => $.SUBRULE($.shortFormVariable) }, // e.g., $index
          { ALT: () => $.CONSUME(IntegerLiteral) }, // e.g., 123
        ],
        ERR_MSG: "Invalid array index",
      });
      $.CONSUME(RSquare);
    });

    // ...followed by any number of chained identifiers
    // starting with a dot.
    // e.g., .bar.x[1].y[2].z
    $.MANY(() => {
      $.CONSUME(DotToken);
      $.CONSUME(Identifier);
      $.OPTION1(() => {
        $.CONSUME1(LSquare);
        $.OR1({
          DEF: [
            { ALT: () => $.SUBRULE1($.completeInputVariable) }, // e.g., $input.index
            { ALT: () => $.SUBRULE1($.longFormVariable) }, // e.g., $var.index
            { ALT: () => $.SUBRULE1($.shortFormVariable) }, // e.g., $index
            { ALT: () => $.CONSUME1(IntegerLiteral) }, // e.g., 123
          ],
          ERR_MSG: "Invalid array index",
        });
        $.CONSUME1(RSquare);
      });
    });
  };
}
