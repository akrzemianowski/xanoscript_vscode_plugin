import { ElseifToken, LParent, RParent } from "../../../lexer/control.js";

/**
 * @param {import('../../base_parser.js').XanoBaseParser} $
 */
export function conditionalElifFn($) {
  return () => {
    $.sectionStack.push("conditionalElifFn");
    $.CONSUME(ElseifToken); // "elseif"
    $.CONSUME(LParent); // "("
    $.SUBRULE($.valueExpression);
    $.CONSUME(RParent); // ")"
    $.OPTION(() => $.SUBRULE($.nakedStackFn));
    $.sectionStack.pop();
  };
}
