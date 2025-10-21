import { EqualToken, LCurly, RCurly } from "../lexer/control.js";
import { StringLiteral } from "../lexer/literal.js";
import { Identifier, NewlineToken } from "../lexer/tokens.js";
import {
  AcceptanceToken,
  PreferencesToken,
  RealtimeToken,
  WorkspaceToken,
} from "../lexer/workspace.js";

export function workspaceDeclaration($) {
  return () => {
    let hasAcceptance = false;
    let hasDescription = false;
    let hasPreferences = false;
    let hasRealtime = false;

    $.sectionStack.push("workspaceDeclaration");
    // Allow leading comments and newlines before the workspace declaration
    $.SUBRULE($.optionalCommentBlockFn);

    $.CONSUME(WorkspaceToken); // workspace
    $.OR([
      { ALT: () => $.CONSUME(StringLiteral) },
      { ALT: () => $.CONSUME(Identifier) },
    ]);
    $.CONSUME(LCurly); // "{"
    $.MANY(() => {
      $.AT_LEAST_ONE(() => $.CONSUME(NewlineToken)); // at least one new line
      $.OR2([
        {
          ALT: () => $.SUBRULE($.commentBlockFn),
        },
        {
          GATE: () => !hasAcceptance,
          ALT: () => {
            hasAcceptance = true;

            const subParent = $.CONSUME(AcceptanceToken); // "acceptance"
            $.CONSUME(EqualToken); // "="

            $.SUBRULE($.objectAttrReq, {
              ARGS: [
                subParent,
                [], // required
                ["ai_terms"], // optional
                {
                  types: {
                    ai_terms: "boolean",
                  },
                },
              ],
            });
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
          GATE: () => !hasPreferences,
          ALT: () => {
            hasPreferences = true;

            const subParent = $.CONSUME(PreferencesToken); // "preferences"
            $.CONSUME2(EqualToken); // "="

            $.SUBRULE2($.objectAttrReq, {
              ARGS: [
                subParent,
                [], // required
                [
                  "internal_docs",
                  "sql_columns",
                  "sql_names",
                  "track_performance",
                ], // optional
                {
                  types: {
                    internal_docs: "boolean",
                    sql_columns: "boolean",
                    sql_names: "boolean",
                    track_performance: "boolean",
                  },
                },
              ],
            });
          },
        },
        {
          GATE: () => !hasRealtime,
          ALT: () => {
            hasRealtime = true;

            const subParent = $.CONSUME(RealtimeToken); // "realtime"
            $.CONSUME3(EqualToken); // "="

            $.SUBRULE3($.objectAttrReq, {
              ARGS: [
                subParent,
                [], // required
                ["canonical"], // optional
                {
                  types: {
                    canonical: "string",
                  },
                },
              ],
            });
          },
        },
      ]);
    });

    $.MANY1(() => $.CONSUME1(NewlineToken)); // optional new line
    $.CONSUME(RCurly); // "}"
    $.MANY2(() => $.CONSUME2(NewlineToken)); // optional new line
    $.sectionStack.pop();
  };
}
