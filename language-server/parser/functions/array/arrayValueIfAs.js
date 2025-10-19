import {
  AsToken,
  IfToken,
  LCurly,
  LParent,
  RCurly,
  RParent,
} from "../../../lexer/control.js";
import { NewlineToken } from "../../../lexer/tokens.js";

// ($my_array) if (`$this == 3`) {
//  disabled = true
//  description = "Some description goes here too"
// } as x3
/**
 *
 * @param {import('../../base_parser.js').XanoBaseParser} $
 * @returns
 */
export function arrayValueIfAs($) {
  return () => {
    $.sectionStack.push("arrayValueIfAs");
    $.CONSUME(LParent);
    $.SUBRULE($.valueExpression);
    $.CONSUME(RParent);
    $.CONSUME(IfToken);
    $.CONSUME1(LParent);
    $.SUBRULE1($.valueExpression);
    $.CONSUME1(RParent);
    $.OPTION(() => {
      $.CONSUME(LCurly);
      $.MANY(() => {
        $.AT_LEAST_ONE(() => $.CONSUME(NewlineToken));
        $.OR([
          { ALT: () => $.SUBRULE($.descriptionFieldAttribute) },
          { ALT: () => $.SUBRULE($.disabledFieldAttribute) },
        ]);
      });
      $.OPTION1(() => $.CONSUME1(NewlineToken));
      $.CONSUME(RCurly);
    });
    $.CONSUME(AsToken);
    $.SUBRULE($.assignableVariableAs);
    $.sectionStack.pop();
  };
}
