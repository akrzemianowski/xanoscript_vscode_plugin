import { RunToken } from "../../../lexer/ai.js";
import { StringLiteral } from "../../../lexer/literal.js";
import { Identifier } from "../../../lexer/tokens.js";

/**
 * Handles the run part of ai.agent.run statement
 * Note: "agent" and "." are already consumed in aiFn
 * @param {import('../../base_parser.js').XanoBaseParser} $
 */
export function aiAgentRunFn($) {
  return () => {
    $.sectionStack.push("aiAgentRunFn");
    const fnToken = $.CONSUME(RunToken); // "run"

    // Agent name can be an identifier or string literal
    $.OR({
      DEF: [
        { ALT: () => $.CONSUME(Identifier) }, // my_agent
        { ALT: () => $.CONSUME(StringLiteral) }, // "My Agent"
      ],
      ERR_MSG: "Expected an agent name",
    });

    $.SUBRULE($.schemaParseAttributeFn, {
      ARGS: [
        fnToken,
        {
          "args?": "[expression]",
          "allow_tool_execution?": "[expression]",
          "description?": "[string]",
          "disabled?": "[boolean]",
        },
      ],
    });
    $.SUBRULE($.asVariable, { ARGS: [fnToken] });
    $.sectionStack.pop();
  };
}
