import { EqualToken, LCurly, RCurly } from "../lexer/control.js";
import { StringLiteral } from "../lexer/literal.js";
import {
  DELETEToken,
  GETToken,
  PATCHToken,
  POSTToken,
  PUTToken,
  QueryToken,
  VerbToken,
} from "../lexer/query.js";
import {
  AuthToken,
  DynamicPathToken,
  Identifier,
  NewlineToken,
  StaticPathToken,
} from "../lexer/tokens.js";

export function queryDeclaration($) {
  return () => {
    let hasAuth = false;
    let hasCache = false;
    let hasDescription = false;
    let hasDocs = false;
    let hasHistory = false;
    let hasInput = false;
    let hasMiddleware = false;
    let hasResponse = false;
    let hasStack = false;
    let hasTags = false;

    const testNames = [];

    $.sectionStack.push("queryDeclaration");
    // Allow leading comments and newlines before the query declaration
    $.SUBRULE($.optionalCommentBlockFn);

    const parent = $.CONSUME(QueryToken);
    $.OR([
      { ALT: () => $.CONSUME(StringLiteral) }, // "foo/bar"
      { ALT: () => $.CONSUME(Identifier) }, // foo
      { ALT: () => $.CONSUME(DynamicPathToken) }, // foo/{url}/bar
      { ALT: () => $.CONSUME(StaticPathToken) }, // foo/bar
    ]);
    $.CONSUME(VerbToken);
    $.CONSUME(EqualToken);
    $.OR1([
      { ALT: () => $.CONSUME(DELETEToken) },
      { ALT: () => $.CONSUME(GETToken) },
      { ALT: () => $.CONSUME(PATCHToken) },
      { ALT: () => $.CONSUME(POSTToken) },
      { ALT: () => $.CONSUME(PUTToken) },
    ]);
    $.CONSUME(LCurly); // "{"
    $.MANY(() => {
      $.AT_LEAST_ONE(() => $.CONSUME(NewlineToken)); // at least one new line
      $.OR2([
        {
          ALT: () => $.SUBRULE($.commentBlockFn),
        },
        {
          GATE: () => !hasAuth,
          ALT: () => {
            hasAuth = true;
            $.CONSUME(AuthToken); // "auth"
            $.CONSUME1(EqualToken); // "="
            $.CONSUME1(StringLiteral); // "user"
          },
        },
        {
          GATE: () => !hasCache,
          ALT: () => {
            hasCache = true;
            $.SUBRULE($.cacheClause);
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
          GATE: () => !hasDocs,
          ALT: () => {
            hasDocs = true;
            $.SUBRULE($.docsFieldAttribute);
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
          GATE: () => !hasMiddleware,
          ALT: () => {
            hasMiddleware = true;
            $.SUBRULE($.middlewareClause);
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
        {
          // no GATE here, you can have multiple test clauses
          ALT: () => {
            $.SUBRULE($.testClause, { ARGS: [testNames] });
          },
        },
      ]);
    });

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
