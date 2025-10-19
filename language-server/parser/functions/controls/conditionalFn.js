import { ConditionalToken, LCurly, RCurly } from "../../../lexer/control.js";
import { NewlineToken } from "../../../lexer/tokens.js";

/**
 * @param {import('../../base_parser.js').XanoBaseParser} $
 */
export function conditionalFn($) {
  return () => {
    let hasIfStatement = false;
    let hasDescription = false;
    let hasDisabled = false;

    $.sectionStack.push("conditionalFn");
    const parent = $.CONSUME(ConditionalToken); // "conditional"
    $.CONSUME(LCurly); // "{"
    $.MANY(() => {
      $.AT_LEAST_ONE(() => $.CONSUME(NewlineToken));
      $.OR([
        {
          GATE: () => !hasDescription,
          ALT: () => {
            hasDescription = true;
            $.SUBRULE($.descriptionFieldAttribute);
          },
        },
        {
          GATE: () => !hasDisabled,
          ALT: () => {
            hasDisabled = true;
            $.SUBRULE($.disabledFieldAttribute);
          },
        },
        {
          GATE: () => !hasIfStatement,
          ALT: () => {
            hasIfStatement = true;
            $.SUBRULE($.conditionalIfFn);
            $.MANY1(() => {
              $.MANY3(() => $.CONSUME3(NewlineToken));
              $.SUBRULE($.conditionalElifFn);
            });
            $.OPTION(() => {
              $.MANY4(() => $.CONSUME4(NewlineToken));
              $.SUBRULE($.conditionalElseFn);
            });
          },
        },
      ]);
    });

    if (!hasIfStatement) {
      $.addMissingError(parent, "{} is missing the if statement");
    }

    $.MANY2(() => $.CONSUME1(NewlineToken));
    $.CONSUME(RCurly); // "}"

    $.sectionStack.pop();
  };
}
