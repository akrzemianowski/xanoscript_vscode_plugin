import { EqualToken } from "../../lexer/control.js";
import { MockToken } from "../../lexer/tokens.js";

/**
 * @deprecated - use functionAttrReq instead
 * @param {import('../base_parser.js').XanoBaseParser} $
 */
export function mockAttribute($) {
  return () => {
    const name = $.CONSUME(MockToken); // "mock"
    $.CONSUME(EqualToken); // "="
    $.SUBRULE($.schemaParseObjectFn, {
      ARGS: [name, { "[string]": "[expression]" }],
    });

    $.sectionStack.pop();
  };
}
