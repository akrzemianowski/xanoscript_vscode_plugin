import { IfToken, LParent, RParent } from "../../../lexer/control.js";

/**
 * @param {import('../../base_parser.js').XanoBaseParser} $
 */
export function conditionalIfFn($) {
  return () => {
    $.sectionStack.push("conditionalIfFn");
    $.CONSUME(IfToken); // "if"
    $.CONSUME(LParent); // "("
    $.SUBRULE($.valueExpression);
    $.CONSUME(RParent); // ")"
    $.OPTION(() => $.SUBRULE($.nakedStackFn));
    $.sectionStack.pop();
  };
}
