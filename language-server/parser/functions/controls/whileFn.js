import {
  EachToken,
  LCurly,
  LParent,
  RCurly,
  RParent,
  WhileToken,
} from "../../../lexer/control.js";
import { NewlineToken } from "../../../lexer/tokens.js";

/**
 * @param {import('../../base_parser.js').XanoBaseParser} $
 */
export function whileFn($) {
  return () => {
    let hasEach = false;
    $.sectionStack.push("whileFn");
    $.CONSUME(WhileToken); // "while"
    $.CONSUME(LParent); // "("
    $.SUBRULE($.valueExpression); // `$value > 10`
    $.CONSUME(RParent); // ")"
    $.OPTION(() => {
      $.CONSUME(LCurly); // "{"
      $.MANY(() => {
        $.AT_LEAST_ONE(() => $.CONSUME(NewlineToken));
        $.OR([
          { ALT: () => $.SUBRULE($.descriptionFieldAttribute) },
          { ALT: () => $.SUBRULE($.disabledFieldAttribute) },
          {
            ALT: () => {
              hasEach = true;
              $.CONSUME(EachToken); // "each"
              $.OPTION1(() => $.SUBRULE($.nakedStackFn));
            },
          },
        ]);
      });

      if (!hasEach) {
        $.CONSUME(EachToken); // "each"
        $.SUBRULE($.nakedStackFn);
      }

      $.MANY2(() => $.CONSUME1(NewlineToken));
      $.CONSUME(RCurly); // "}"
    });

    $.sectionStack.pop();
  };
}
