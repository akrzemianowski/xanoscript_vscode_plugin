import { LCurly, RCurly } from "../lexer/control.js";
import { StringLiteral } from "../lexer/literal.js";
import { TableToken } from "../lexer/table.js";
import { Identifier, NewlineToken } from "../lexer/tokens.js";

// I have organize the parser with some for of hierachy
// 1st comes the table declaration which should always be there in a table
// Within the table comes the clauses (their name is always followed "Clause", like authClause, schemaClause, indexClause)
// Each clause has a body, their name is always followed by "Body", like tableBody, schemaBody, etc.
// Each clause body will contain a series of definitions, like columnDefinitions for the schema, index definitions, etc.
// a definition can have metadata, like columnMetadataDefinition, filterDefinition, etc.
// and finally, the metadata can have attributes.
//
// table array_columns {                       <--- tableDeclaration
//   auth = false                              <--- authClause
//   schema {                                  <--- schemaClause
//     int id                                  <--- schemaBody & columnDefinition

export function tableDeclaration($) {
  return () => {
    $.sectionStack.push("tableDeclaration");
    // Allow leading comments and newlines before the table declaration
    $.SUBRULE($.optionalCommentBlockFn);

    $.CONSUME(TableToken); // "table"
    $.OR1([
      {
        ALT: () =>
          $.CONSUME(StringLiteral, {
            ERR_MSG: "expected table name after table statement",
          }),
      },
      {
        ALT: () =>
          $.CONSUME(Identifier, {
            ERR_MSG: "expected table name after table statement",
          }),
      },
    ]);

    let hasSchema = false;
    let hasView = false;
    let hasAuth = false;
    let hasDescription = false;
    let hasTags = false;
    let hasIndex = false;

    const schema = {};

    $.CONSUME(LCurly); // "{"
    $.sectionStack.push("tableBody");
    $.MANY1(() => {
      $.AT_LEAST_ONE(() => $.CONSUME(NewlineToken)); // Allow multiple new lines between clauses
      // Zero or more clauses, each potentially followed by new lines
      $.OR([
        {
          ALT: () => $.SUBRULE($.commentBlockFn),
        },
        {
          GATE: () => !hasDescription,
          ALT: () => $.SUBRULE($.descriptionFieldAttribute),
        },
        {
          GATE: () => !hasTags,
          ALT: () => $.SUBRULE($.tagsAttribute),
        },
        {
          GATE: () => !hasAuth,
          ALT: () => $.SUBRULE($.authClause),
        },
        {
          GATE: () => !hasView,
          ALT: () => $.SUBRULE($.viewClause),
        },
        {
          GATE: () => !hasSchema,
          ALT: () =>
            $.SUBRULE($.schemaClause, {
              ARGS: [{ isTableSchema: true }, schema],
            }),
        },
        {
          GATE: () => !hasIndex,
          ALT: () => $.SUBRULE($.indexClause),
        },
      ]);
    });
    $.AT_LEAST_ONE1(() => $.CONSUME1(NewlineToken)); // Allow multiple new lines between clauses
    $.sectionStack.pop();
    $.CONSUME(RCurly); // "}"
    $.MANY2(() => $.CONSUME2(NewlineToken));

    $.sectionStack.pop();
  };
}
