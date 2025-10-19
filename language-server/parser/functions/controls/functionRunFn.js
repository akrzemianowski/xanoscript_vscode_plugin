import { FunctionToken, RunToken } from "../../../lexer/function.js";
import { StringLiteral } from "../../../lexer/literal.js";
import {
  DotToken,
  Identifier,
  StaticPathToken,
} from "../../../lexer/tokens.js";

/**
 *
 * @param {import('../base_parser.js').XanoBaseParser} $
 * @returns
 */
export function functionRunFn($) {
  return () => {
    $.sectionStack.push("functionRunFn");
    $.CONSUME(FunctionToken); // "function"
    $.CONSUME(DotToken); // "."
    const fnToken = $.CONSUME(RunToken); // "run"

    $.OR([
      { ALT: () => $.CONSUME(Identifier) }, // user
      { ALT: () => $.CONSUME(StaticPathToken) }, // user/auth
      { ALT: () => $.CONSUME1(StringLiteral) }, // "user/ auth"
    ]);

    $.OPTION(() => {
      $.SUBRULE($.schemaParseAttributeFn, {
        ARGS: [
          fnToken,
          {
            "input?": { "[string]": "[expression]" },
            "description?": "[string]",
            "disabled?": "[boolean]",
          },
        ],
      });
    });

    $.SUBRULE($.asVariable, { ARGS: [fnToken] });
    $.sectionStack.pop();
  };
}
