import { BranchToken, ColorToken } from "../lexer/branch.js";
import { EqualToken, LCurly, RCurly } from "../lexer/control.js";
import { StringLiteral } from "../lexer/literal.js";
import { Identifier, NewlineToken } from "../lexer/tokens.js";

export function branchDeclaration($) {
  return () => {
    let hasColor = false;
    let hasDescription = false;
    let hasMiddleware = false;

    $.sectionStack.push("branchDeclaration");
    $.CONSUME(BranchToken); // branch
    $.OR([
      { ALT: () => $.CONSUME(StringLiteral) },
      { ALT: () => $.CONSUME(Identifier) },
    ]);
    $.CONSUME(LCurly); // "{"
    $.MANY(() => {
      $.AT_LEAST_ONE(() => $.CONSUME(NewlineToken)); // at least one new line
      $.OR2([
        {
          GATE: () => !hasDescription,
          ALT: () => {
            hasDescription = true;
            $.SUBRULE($.descriptionFieldAttribute);
          },
        },
        {
          GATE: () => !hasColor,
          ALT: () => {
            hasColor = true;

            $.CONSUME(ColorToken); // "color"
            $.CONSUME(EqualToken); // "="
            $.CONSUME2(StringLiteral);
          },
        },
        {
          GATE: () => !hasMiddleware,
          ALT: () => {
            hasMiddleware = true;
            $.SUBRULE($.middlewareClause);
          },
        },
      ]);
    });

    $.MANY1(() => $.CONSUME1(NewlineToken)); // optional new line
    $.CONSUME(RCurly); // "}"
    $.MANY2(() => $.CONSUME2(NewlineToken)); // optional new line
    $.sectionStack.pop();
  };
}
