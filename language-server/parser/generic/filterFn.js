import { ExclamationToken } from "../../lexer/cast.js";
import { ColonToken, PipeToken } from "../../lexer/control.js";
import { Identifier, NewlineToken } from "../../lexer/tokens.js";
import { filterNames, querySearchFilterNames } from "./filterNames.js";

/**
 * Represents a filter function in XanoScript
 *
 * Handles expression filters and query search filters
 * e.g. |filterName:arg1:arg2 or |!filterName:arg1:arg2 (disabled)
 * @param {import('../base_parser.js').XanoBaseParser} $
 */
export function filterFn($) {
  return (options = {}, state = null) => {
    // $.OPTION1(() => {
    //   console.log("Parsing a filter with a new line");
    //   $.CONSUME(NewlineToken);
    // });
    $.OR([
      {
        ALT: () => {
          $.CONSUME(NewlineToken);
          $.CONSUME(PipeToken);
        },
      },
      {
        ALT: () => $.CONSUME1(PipeToken),
      },
    ]);
    // $.CONSUME(PipeToken);

    const allowedFilters =
      options.allowQueryExpression === true
        ? querySearchFilterNames
        : filterNames;

    // Handle either regular or disabled filter
    $.OPTION(() => $.CONSUME(ExclamationToken));
    const filter = $.CONSUME(Identifier);

    if (!allowedFilters.includes(filter.image)) {
      $.addInvalidValueError(
        filter,
        `Unknown filter function '${filter.image}'`
      );
    }

    $.MANY1(() => {
      $.CONSUME(ColonToken);
      $.SUBRULE($.valueExpression, { ARGS: [options, state] });
    });
  };
}
