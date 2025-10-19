import {
  ColonToken,
  CommaToken,
  EqualToken,
  GroupToken,
  LCurly,
  RCurly,
  ReturnToken,
} from "../../../lexer/control.js";
import { QueryToken } from "../../../lexer/db.js";
import { StringLiteral } from "../../../lexer/literal.js";
import {
  AdditionalWhereToken,
  AddonToken,
  DistinctToken,
  EvalToken,
  JoinToken,
  OutputToken,
  OverrideSortToken,
  PagingToken,
  SortToken,
  WhereToken,
} from "../../../lexer/query.js";
import {
  DescriptionToken,
  DisabledToken,
  FalseToken,
  Identifier,
  NewlineToken,
  TrueToken,
  TypeToken,
} from "../../../lexer/tokens.js";
import { getVarName } from "../../generic/utils.js";

/**
 * @param {import('../../base_parser.js').XanoBaseParser} $
 */
export function dbQueryFn($) {
  // local rules setup
  $.requireRules(
    dbJoinFn,
    dbQueryFnDisabled,
    dbQueryFnDescription,
    dbQueryFnOutput,
    dbQueryFnWhere,
    dbQueryFnReturn,
    dbQueryFnAddOn,
    dbQueryFnEval,
    dbQueryFnOverrideSort,
    dbQueryFnSort,
    dbQueryFnAdditionalWhere
  );

  return () => {
    $.sectionStack.push("dbQueryFn");
    const fnToken = $.CONSUME(QueryToken); // "query"
    $.OR([
      { ALT: () => $.CONSUME(Identifier) }, // user
      { ALT: () => $.CONSUME1(StringLiteral) }, // "user table"
    ]);

    // prevent duplicate attributes
    let hasWhere = false;
    let hasAdditionalWhere = false;
    let hasJoin = false;
    let hasDisabled = false;
    let hasDescription = false;
    let hasOutput = false;
    let hasAddOn = false;
    let hasReturn = false;
    let hasEval = false;
    let hasSort = false;
    let hasSortOverride = false;
    let hasMock = false;

    $.OPTION(() => {
      $.CONSUME(LCurly); // "{"
      $.MANY(() => $.CONSUME(NewlineToken));
      $.MANY1(() => {
        $.OR1([
          {
            GATE: () => !hasEval,
            ALT: () => {
              hasEval = true;
              $.SUBRULE($.dbQueryFnEval);
            },
          },
          {
            GATE: () => !hasReturn,
            ALT: () => {
              hasReturn = true;
              $.SUBRULE($.dbQueryFnReturn);
            },
          },
          {
            GATE: () => !hasMock,
            ALT: () => {
              hasMock = true;
              $.SUBRULE($.mockAttribute);
            },
          },
          {
            GATE: () => !hasAddOn,
            ALT: () => {
              hasAddOn = true;
              $.SUBRULE($.dbQueryFnAddOn);
            },
          },
          {
            GATE: () => !hasSort,
            ALT: () => {
              hasSort = true;
              $.SUBRULE($.dbQueryFnSort);
            },
          },
          {
            GATE: () => !hasSortOverride,
            ALT: () => {
              hasSortOverride = true;
              $.SUBRULE($.dbQueryFnOverrideSort);
            },
          },
          {
            GATE: () => !hasOutput,
            ALT: () => {
              hasOutput = true;
              $.SUBRULE($.dbQueryFnOutput);
            },
          },
          {
            GATE: () => !hasWhere,
            ALT: () => {
              hasWhere = true;
              $.SUBRULE($.dbQueryFnWhere);
            },
          },
          {
            GATE: () => !hasAdditionalWhere,
            ALT: () => {
              hasAdditionalWhere = true;
              $.SUBRULE($.dbQueryFnAdditionalWhere);
            },
          },
          {
            GATE: () => !hasJoin,
            ALT: () => {
              hasJoin = true;
              $.SUBRULE($.dbJoinFn);
            },
          },
          {
            GATE: () => !hasDisabled,
            ALT: () => {
              hasDisabled = true;
              $.SUBRULE($.dbQueryFnDisabled);
            },
          },
          {
            GATE: () => !hasDescription,
            ALT: () => {
              hasDescription = true;
              $.SUBRULE($.dbQueryFnDescription);
            },
          },
        ]);
      });
      $.MANY2(() => $.CONSUME2(NewlineToken));
      $.CONSUME(RCurly); // "}"
    });
    $.SUBRULE($.asVariable, { ARGS: [fnToken] });
    $.sectionStack.pop();
  };
}

/**
 * @param {import('../../base_parser.js').XanoBaseParser} $
 */
function dbQueryFnWhere($) {
  return () => {
    $.CONSUME(WhereToken); // "where"
    $.CONSUME(EqualToken); // "="
    $.SUBRULE($.valueExpression, {
      ARGS: [{ allowQueryExpression: true, allowOptionalIfNull: true }],
    });
    $.MANY(() => $.CONSUME(NewlineToken));
  };
}

/**
 * @param {import('../../base_parser.js').XanoBaseParser} $
 */
function dbJoinFn($) {
  return () => {
    const fnToken = $.CONSUME(JoinToken); // "join"
    $.CONSUME(EqualToken); // "="
    $.SUBRULE($.schemaFn, {
      ARGS: [
        fnToken,
        {
          "[string]": {
            table: "[string]",
            "type?": ["inner", "left", "right"],
            "where?": "[query]",
          },
        },
      ],
    });
    $.MANY(() => $.CONSUME(NewlineToken));
  };
}

/**
 * addon = {
 *   _post: {
 *     name : "post"
 *     input: {post_id: "post"}
 *     addon: {
 *       _post: {name: "comment_of_post", input: {post_id: $output.id}}
 *     }
 *   }
 * }
 * @param {import('../../base_parser.js').XanoBaseParser} $
 */
function dbQueryFnAddOn($) {
  const schema = {
    "[string]": {
      name: "[string]",
      input: { "[string]": "[expression]" },
      "output?": ["[string]"],
    },
  };
  // allow for sub addons
  schema["[string]"]["addon?"] = schema;
  return () => {
    const fnToken = $.CONSUME(AddonToken); // "addon"
    $.CONSUME(EqualToken); // "="
    $.SUBRULE($.schemaFn, {
      ARGS: [fnToken, schema],
    });

    $.MANY2(() => $.CONSUME2(NewlineToken));
  };
}

/**
 * @param {import('../../base_parser.js').XanoBaseParser} $
 */
function dbQueryFnDisabled($) {
  return () => {
    $.CONSUME(DisabledToken); // "disabled"
    $.CONSUME(EqualToken); // "="
    $.OR([
      { ALT: () => $.CONSUME(FalseToken) }, // false
      { ALT: () => $.CONSUME(TrueToken) }, // true
    ]);
    $.MANY(() => $.CONSUME(NewlineToken));
  };
}

/**
 * @param {import('../../base_parser.js').XanoBaseParser} $
 */
function dbQueryFnEval($) {
  return () => {
    const fnToken = $.CONSUME(EvalToken); // "eval"
    $.CONSUME(EqualToken); // "="
    $.SUBRULE($.schemaFn, {
      ARGS: [fnToken, { "[string]": "[query]" }],
    });
    $.MANY(() => $.CONSUME(NewlineToken));
  };
}

/**
 * @param {import('../../base_parser.js').XanoBaseParser} $
 */
function dbQueryFnDescription($) {
  return () => {
    $.CONSUME(DescriptionToken); // "description"
    $.CONSUME(EqualToken); // "="
    $.CONSUME(StringLiteral); // "..."
    $.MANY(() => $.CONSUME(NewlineToken));
  };
}

/**
 * @param {import('../../base_parser.js').XanoBaseParser} $
 */
function dbQueryFnOutput($) {
  return () => {
    const tokenType = $.CONSUME(OutputToken); // "output"
    $.CONSUME(EqualToken); // "="
    $.SUBRULE($.schemaFn, { ARGS: [tokenType, ["[string]"]] });
    $.MANY(() => $.CONSUME(NewlineToken));
  };
}

/**
 * @param {import('../../base_parser.js').XanoBaseParser} $
 */
function dbQueryFnSort($) {
  return () => {
    const fnToken = $.CONSUME(SortToken); // "sort"
    $.CONSUME(EqualToken); // "="
    $.SUBRULE($.schemaFn, {
      ARGS: [fnToken, { "[string]": ["asc", "desc", "rand"] }],
    });
    $.MANY(() => $.CONSUME(NewlineToken));
  };
}

/**
 * @param {import('../../base_parser.js').XanoBaseParser} $
 */
function dbQueryFnOverrideSort($) {
  return () => {
    $.CONSUME(OverrideSortToken); // "sort_override"
    $.CONSUME(EqualToken); // "="
    $.SUBRULE($.valueExpression);
    $.MANY(() => $.CONSUME(NewlineToken));
  };
}

/**
 * @param {import('../../base_parser.js').XanoBaseParser} $
 */
function dbQueryFnAdditionalWhere($) {
  return () => {
    $.CONSUME(AdditionalWhereToken); // "additional_where"
    $.CONSUME(EqualToken); // "="
    $.SUBRULE($.valueExpression, {
      ARGS: [{ allowQueryExpression: true, allowOptionalIfNull: true }],
    });
    $.MANY(() => $.CONSUME(NewlineToken));
  };
}

/**
 * @param {import('../../base_parser.js').XanoBaseParser} $
 */
function dbQueryFnReturn($) {
  return () => {
    let hasType = false;
    let hasPaging = false;
    let hasDistinct = false;
    let hasGroup = false;
    let hasEval = false;

    $.CONSUME(ReturnToken); // "return"
    $.CONSUME(EqualToken); // "="
    $.CONSUME(LCurly); // "{"
    $.MANY(() => $.CONSUME(NewlineToken));

    let needSeparator = false;
    let returnType = null;
    $.MANY1(() => {
      if (needSeparator) {
        $.addMissingError(null, "Expected a separator between attributes");
      }

      $.OR({
        // we control values through GATES
        IGNORE_AMBIGUITIES: true,
        DEF: [
          {
            GATE: () => !hasType,
            ALT: () => {
              hasType = true;
              const keyToken = $.CONSUME(TypeToken); // "type"
              $.CONSUME(ColonToken); // ":"
              $.SUBRULE($.schemaFn, {
                ARGS: [
                  keyToken,
                  ["list", "stream", "exists", "count", "single", "aggregate"],
                ],
              });
              returnType = getVarName($.LA(0));
            },
          },
          {
            GATE: () => !hasPaging,
            ALT: () => {
              hasPaging = true;
              const keyToken = $.CONSUME1(PagingToken); // "paging"
              $.CONSUME1(ColonToken); // ":"
              $.SUBRULE1($.schemaFn, {
                ARGS: [
                  keyToken,
                  {
                    "page?": "[expression]",
                    "per_page?": "[expression]",
                    "offset?": "[expression]",
                    "totals?": "[boolean]",
                    "metadata?": "[boolean]",
                  },
                ],
              });
            },
          },
          {
            GATE: () => !hasDistinct,
            ALT: () => {
              hasDistinct = true;
              const keyToken = $.CONSUME(DistinctToken); // "distinct"
              $.CONSUME2(ColonToken); // ":"
              $.SUBRULE2($.schemaFn, {
                ARGS: [keyToken, ["yes", "no"]],
              });
            },
          },
          {
            GATE: () => !hasGroup && returnType && returnType === "aggregate",
            ALT: () => {
              hasGroup = true;
              const keyToken = $.CONSUME(GroupToken); // "group"
              $.CONSUME3(ColonToken); // ":"
              $.SUBRULE3($.schemaFn, {
                ARGS: [keyToken, { "[string]": "[query]" }],
              });
            },
          },
          {
            GATE: () => !hasEval && returnType && returnType === "aggregate",
            ALT: () => {
              hasEval = true;
              const keyToken = $.CONSUME(EvalToken); // "eval"
              $.CONSUME4(ColonToken); // ":"
              $.SUBRULE4($.schemaFn, {
                ARGS: [keyToken, { "[string]": "[expression]" }],
              });
            },
          },
        ],
      });

      needSeparator = true;

      $.OPTION(() => {
        needSeparator = false;
        $.CONSUME1(CommaToken);
      });

      $.MANY9(() => {
        needSeparator = false;
        $.CONSUME1(NewlineToken);
      });
    });

    $.CONSUME(RCurly); // "}"
    $.MANY2(() => $.CONSUME3(NewlineToken));
  };
}
