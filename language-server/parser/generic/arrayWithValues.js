import { CommaToken, LSquare, RSquare } from "../../lexer/control.js";
import { NewlineToken } from "../../lexer/tokens.js";

/**
 * @param {import('../base_parser.js').XanoBaseParser} $
 */
export function arrayWithValues($) {
  return (options = {}) => {
    $.CONSUME(LSquare); // "["
    $.OPTION(() =>
      $.OR([
        {
          // one line, comma separated [ value, value2 ]
          ALT: () => {
            $.AT_LEAST_ONE_SEP({
              SEP: CommaToken,
              DEF: () => {
                $.SUBRULE($.valueExpression, {
                  ARGS: [{ ...options, allowObject: true, allowArray: true }],
                });
              },
            });
          },
        },
        {
          // multi line, each value on a new line
          // [
          //   value
          //   value2
          // ]
          ALT: () => {
            $.CONSUME(NewlineToken);
            $.AT_LEAST_ONE(() => {
              $.SUBRULE1($.valueExpression, {
                ARGS: [{ ...options, allowObject: true, allowArray: true }],
              });
              $.AT_LEAST_ONE1(() => $.CONSUME1(NewlineToken));
            });
          },
        },
      ])
    );

    $.CONSUME(RSquare); // "]"
  };
}
