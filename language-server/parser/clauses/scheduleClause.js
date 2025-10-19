import {
  ColonToken,
  CommaToken,
  EqualToken,
  LCurly,
  LSquare,
  RCurly,
  RSquare,
} from "../../lexer/control.js";
import { IntegerLiteral, TimestampLiteralToken } from "../../lexer/literal.js";
import {
  EndsOnToken,
  EventsToken,
  FreqToken,
  ScheduleToken,
  StartsOnToken,
} from "../../lexer/task.js";
import { NewlineToken } from "../../lexer/tokens.js";

/**
 * schedule {
 *   events = $entries
 * }
 * @param {import('../base_parser.js').XanoBaseParser} $
 * @returns
 */
export function scheduleClause($) {
  $.scheduleEventsValues = $.RULE("scheduleEventsValues", () => {
    let hasStart = false;
    let has_separator = true;
    $.CONSUME(LCurly); // "{"
    $.AT_LEAST_ONE(() => {
      $.MANY(() => {
        has_separator = true;
        $.CONSUME(NewlineToken);
      });
      if (!has_separator) {
        $.addMissingError(null, "Expected ',' or new line between attributes");
      }
      $.OR([
        {
          ALT: () => {
            hasStart = true;
            $.CONSUME(StartsOnToken);
            $.CONSUME(ColonToken);
            $.CONSUME(TimestampLiteralToken);
          },
        },
        {
          ALT: () => {
            $.CONSUME(EndsOnToken);
            $.CONSUME2(ColonToken);
            $.CONSUME2(TimestampLiteralToken);
          },
        },
        {
          ALT: () => {
            $.CONSUME(FreqToken);
            $.CONSUME3(ColonToken);
            $.CONSUME(IntegerLiteral);
          },
        },
      ]);
      has_separator = false;
      $.OPTION1(() => {
        $.CONSUME1(CommaToken);
        has_separator = true;
      });
    });

    if (!hasStart) {
      $.CONSUME1(StartsOnToken);
      $.CONSUME4(ColonToken);
      $.CONSUME3(TimestampLiteralToken);
    }

    $.MANY1(() => $.CONSUME1(NewlineToken));
    $.CONSUME(RCurly); // "}"
  });

  return () => {
    $.sectionStack.push("scheduleClause");
    $.CONSUME(ScheduleToken); // "response"
    $.OPTION(() => {
      $.CONSUME(LCurly); // "{"
      $.MANY(() => $.CONSUME(NewlineToken));
      $.CONSUME(EventsToken); // "events"
      $.CONSUME(EqualToken); // "="
      $.CONSUME(LSquare); // "["
      $.MANY1(() => {
        $.MANY2(() => $.CONSUME1(NewlineToken));
        $.SUBRULE($.scheduleEventsValues);
      });
      $.MANY3(() => $.CONSUME2(NewlineToken));
      $.CONSUME(RSquare); // "]"
      $.MANY4(() => $.CONSUME3(NewlineToken));
      $.CONSUME(RCurly); // "}"
    });
    $.sectionStack.pop();
  };
}
