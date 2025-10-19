import { EqualToken, LCurly, RCurly } from "../lexer/control.js";
import { StringLiteral } from "../lexer/literal.js";
import {
  ActionsToken,
  ActiveToken,
  McpServerTriggerToken,
} from "../lexer/mcp_server_trigger.js";
import { Identifier, NewlineToken } from "../lexer/tokens.js";

export function mcpServerTriggerDeclaration($) {
  return () => {
    let hasActions = false;
    let hasActive = false;
    let hasDescription = false;
    let hasHistory = false;
    let hasInput = false;
    let hasMcpServer = false;
    let hasResponse = false;
    let hasStack = false;
    let hasTags = false;

    $.sectionStack.push("mcpServerTriggerDeclaration");
    const parent = $.CONSUME(McpServerTriggerToken); // mcp_server_trigger
    $.OR([
      { ALT: () => $.CONSUME(StringLiteral) },
      { ALT: () => $.CONSUME(Identifier) },
    ]);
    $.CONSUME(LCurly); // "{"
    $.MANY(() => {
      $.AT_LEAST_ONE(() => $.CONSUME(NewlineToken)); // at least one new line
      $.OR2([
        {
          GATE: () => !hasActions,
          ALT: () => {
            hasActions = true;

            const subParent = $.CONSUME(ActionsToken); // "actions"
            $.CONSUME(EqualToken); // "="

            $.SUBRULE($.objectAttrReq, {
              ARGS: [
                subParent,
                ["connection"],
                [],
                {
                  types: {
                    connection: "boolean",
                  },
                },
              ],
            });
          },
        },
        {
          GATE: () => !hasActive,
          ALT: () => {
            hasActive = true;
            $.CONSUME(ActiveToken);
            $.CONSUME2(EqualToken);
            $.SUBRULE($.booleanValue);
          },
        },
        {
          GATE: () => !hasDescription,
          ALT: () => {
            hasDescription = true;
            $.SUBRULE($.descriptionFieldAttribute);
          },
        },
        {
          GATE: () => !hasHistory,
          ALT: () => {
            hasHistory = true;
            $.SUBRULE($.historyClause);
          },
        },
        {
          GATE: () => !hasInput,
          ALT: () => {
            hasInput = true;
            $.SUBRULE($.inputClause);
          },
        },
        {
          GATE: () => !hasMcpServer,
          ALT: () => {
            hasMcpServer = true;
            $.SUBRULE($.mcpServerClause);
          },
        },
        {
          GATE: () => !hasResponse,
          ALT: () => {
            hasResponse = true;
            $.SUBRULE($.responseClause);
          },
        },
        {
          GATE: () => !hasStack,
          ALT: () => {
            hasStack = true;
            $.SUBRULE($.stackClause);
          },
        },
        {
          GATE: () => !hasTags,
          ALT: () => {
            hasTags = true;
            $.SUBRULE($.tagsAttribute);
          },
        },
      ]);
    });

    if (!hasMcpServer) {
      $.addMissingError(parent, "{} is missing mcp_server clause");
    }

    if (!hasInput) {
      $.addMissingError(parent, "{} is missing an input clause");
    }

    if (!hasStack) {
      $.addMissingError(parent, "{} is missing a stack clause");
    }

    if (!hasResponse) {
      $.addMissingError(parent, "{} is missing a response clause");
    }

    $.MANY1(() => $.CONSUME1(NewlineToken)); // optional new line
    $.CONSUME(RCurly); // "}"
    $.MANY2(() => $.CONSUME2(NewlineToken)); // optional new line
    $.sectionStack.pop();
  };
}
