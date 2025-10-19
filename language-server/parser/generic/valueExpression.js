import {
  AndTestToken,
  ColonToken,
  Divide,
  GreaterThan,
  GreaterThanOrEq,
  IsEqual,
  IsNotEqual,
  IsStrictEqual,
  IsStrictNotEqual,
  JsonBetweenToken,
  JsonContainsStringToken,
  JsonContainsToken,
  JsonEqualToken,
  JsonILikeToken,
  JsonIncludesToken,
  JsonLikeToken,
  JsonNotBetweenToken,
  JsonNotContainsToken,
  JsonNotILikeToken,
  JsonNotIncludesToken,
  JsonNotInToken,
  JsonNotLikeToken,
  JsonNotOverlapsToken,
  JsonNotRegexToken,
  JsonOverlapsToken,
  JsonRegexToken,
  LParent,
  Minus,
  Multiply,
  NullishCoalescingToken,
  OrTestToken,
  PipeToken,
  Plus,
  Question,
  RParent,
  SmallerThan,
  SmallerThanOrEq,
} from "../../lexer/control.js";
import {
  ExpressionLiteral,
  FloatLiteral,
  IntegerLiteral,
  SingleQuotedStringLiteral,
  StringLiteral,
} from "../../lexer/literal.js";
import {
  MultiLineExpressionToken,
  MultiLineStringToken,
} from "../../lexer/multiline.js";
import {
  DotToken,
  FalseToken,
  Identifier,
  JsonInToken,
  NewlineToken,
  NowToken,
  NullToken,
  TrueToken,
} from "../../lexer/tokens.js";

const DEFAULT_OPTIONS = {
  allowQueryExpression: false,
  allowIdentifier: true, // in some cases, an expression can not reference an identifier
  allowOptionalIfNull: false, // allow the use of ==? and !=? operators to ignore the condition if the value is null
  allowVariables: true,
  allowDisabledKeys: false, // allow keys to be disabled with a "!" in objectWithAttributes
};

const OperatorAcceptingOptionalIfNull = [
  GreaterThan,
  GreaterThanOrEq,
  SmallerThan,
  SmallerThanOrEq,
  IsStrictEqual,
  IsEqual,
  IsStrictNotEqual,
  IsNotEqual,
  JsonInToken,
  JsonNotBetweenToken,
  JsonNotContainsToken,
  JsonNotILikeToken,
  JsonNotIncludesToken,
  JsonNotInToken,
  JsonBetweenToken,
  JsonContainsToken,
  JsonContainsStringToken,
  JsonILikeToken,
  JsonIncludesToken,
  JsonLikeToken,
  JsonNotLikeToken,
  JsonNotOverlapsToken,
  JsonNotRegexToken,
  JsonOverlapsToken,
];

/**
 *
 * @param {import('../base_parser.js').XanoBaseParser} $
 * @returns
 */
export function valueExpression($) {
  return (options = {}, state = null) => {
    options = { ...DEFAULT_OPTIONS, ...options };
    let hasFilters = false;
    let isFilterSealed = false;
    let openParenthese = false;

    // we want to keep track of the number of open parentheses to
    // make sure we close them all at the end of the root node
    const isRootNode = state === null;
    state = state ? state : { openParentheses: 0 };

    $.MANY(() => {
      state.openParentheses += 1;
      openParenthese = true;
      $.CONSUME(LParent);
    }); // "("

    const canUseVariables = options.allowVariables;
    const canUseIdentifier = options.allowIdentifier;

    // Performance optimization: Split into two sequential ORs instead of one large OR
    // This dramatically reduces the lookahead complexity for Identifier
    // First OR: All non-Identifier alternatives (faster, no complex follow-set)
    const matchedNonIdentifier = $.OR({
      DEF: [
        // Group 1: Literals (fast path - most common, distinct tokens)
        {
          ALT: () => {
            $.CONSUME(StringLiteral);
            return true;
          },
        },
        {
          ALT: () => {
            $.CONSUME(SingleQuotedStringLiteral);
            return true;
          },
        },
        {
          ALT: () => {
            $.CONSUME(IntegerLiteral);
            return true;
          },
        },
        {
          ALT: () => {
            $.CONSUME(FloatLiteral);
            return true;
          },
        },
        {
          ALT: () => {
            $.CONSUME(TrueToken);
            return true;
          },
        },
        {
          ALT: () => {
            $.CONSUME(FalseToken);
            return true;
          },
        },
        {
          ALT: () => {
            $.CONSUME(NullToken);
            return true;
          },
        },
        {
          ALT: () => {
            $.CONSUME(NowToken);
            return true;
          },
        },

        // Group 2: Complex literals (distinct tokens)
        {
          ALT: () => {
            $.CONSUME(MultiLineStringToken);
            return true;
          },
        },
        {
          ALT: () => {
            $.CONSUME(MultiLineExpressionToken);
            return true;
          },
        },
        {
          ALT: () => {
            $.CONSUME(ExpressionLiteral);
            return true;
          },
        },

        // Group 3: Variables (gated, check once)
        {
          GATE: () => canUseVariables,
          ALT: () => {
            $.OR8([
              { ALT: () => $.SUBRULE($.longFormVariable) },
              { ALT: () => $.SUBRULE($.completeAuthVariable) },
              { ALT: () => $.SUBRULE($.completeEnvVariable) },
              { ALT: () => $.SUBRULE($.completeInputVariable) },
              { ALT: () => $.SUBRULE($.shortFormVariable) },
            ]);
            return true;
          },
        },

        // Group 4: Structured values (distinct starting tokens)
        {
          ALT: () => {
            $.SUBRULE($.castedValue);
            return true;
          },
        },
        {
          ALT: () => {
            $.SUBRULE($.objectWithAttributes, { ARGS: [options] });
            return true;
          },
        },
        {
          ALT: () => {
            $.SUBRULE($.arrayWithValues, { ARGS: [options] });
            return true;
          },
        },

        // Default: no match, return false
        { ALT: () => false },
      ],
    });

    // Second: If nothing matched and identifier is allowed, consume it
    // This separates Identifier lookahead from the rest, reducing complexity
    $.OPTION4({
      GATE: () => !matchedNonIdentifier,
      DEF: () => {
        if (!canUseIdentifier) {
          $.addInvalidValueError(
            null,
            !canUseVariables
              ? "cannot use variables in this context"
              : "cannot use identifiers in this context"
          );
        }
        $.CONSUME(Identifier);
      },
    });

    $.OPTION1({
      // This is a tricky one, we allow a new line breaking an expression but only
      // if the following line is a filter (starts with a pipe)
      // We use LookAhead to peek at the next tokens without consuming them
      // to decide if we should close or keep the gate open
      GATE: () =>
        $.LA(1).tokenType === PipeToken ||
        ($.LA(1).tokenType === NewlineToken && $.LA(2).tokenType === PipeToken),
      DEF: () => {
        hasFilters = true;
        $.SUBRULE($.filterFn, { ARGS: [options, state] });
      },
    });

    $.OPTION3({
      GATE: () => state.openParentheses > 0,
      DEF: () => {
        isFilterSealed = openParenthese;
        state.openParentheses -= 1;
        $.OPTION8(() => $.CONSUME1(NewlineToken));
        $.CONSUME(RParent); // ")"
        $.MANY1(() => {
          $.CONSUME(DotToken); // "."
          $.CONSUME2(Identifier); // someAttribute
        });
      },
    });

    // operator can only be used if there is no filter
    // or if the filter is sealed in parentheses
    let operatorAllowed = !hasFilters || isFilterSealed;

    // this section triggers an error: TypeError: Cannot read properties of undefined (reading 'call')
    $.OPTION({
      GATE: () => operatorAllowed,
      DEF: () => {
        const operator = $.OR7([
          { ALT: () => $.CONSUME(GreaterThan) }, // ">"
          { ALT: () => $.CONSUME(GreaterThanOrEq) }, // ">="
          { ALT: () => $.CONSUME(SmallerThan) }, // "<"
          { ALT: () => $.CONSUME(SmallerThanOrEq) }, // "<="
          { ALT: () => $.CONSUME(IsStrictEqual) }, // "==="
          { ALT: () => $.CONSUME(IsEqual) }, // "=="
          { ALT: () => $.CONSUME(IsStrictNotEqual) }, // "!=="
          { ALT: () => $.CONSUME(IsNotEqual) }, // "!="
          { ALT: () => $.CONSUME(Plus) }, // "+"
          { ALT: () => $.CONSUME(Minus) }, // "-"
          { ALT: () => $.CONSUME(Multiply) }, // "*"
          { ALT: () => $.CONSUME(Divide) }, // "/"
          { ALT: () => $.CONSUME(NullishCoalescingToken) }, // "??"
          { ALT: () => $.CONSUME(AndTestToken) }, // "&&"
          { ALT: () => $.CONSUME(OrTestToken) }, // "||"
          {
            GATE: () => options.allowQueryExpression, // "="
            ALT: () => $.CONSUME(JsonEqualToken),
          },
          {
            GATE: () => options.allowQueryExpression, // "in"
            ALT: () => $.CONSUME(JsonInToken),
          },
          {
            GATE: () => options.allowQueryExpression,
            ALT: () => $.CONSUME(JsonNotBetweenToken),
          },
          {
            GATE: () => options.allowQueryExpression,
            ALT: () => $.CONSUME(JsonNotContainsToken),
          },
          {
            GATE: () => options.allowQueryExpression,
            ALT: () => $.CONSUME(JsonNotILikeToken),
          },
          {
            GATE: () => options.allowQueryExpression,
            ALT: () => $.CONSUME(JsonNotIncludesToken),
          },
          {
            GATE: () => options.allowQueryExpression,
            ALT: () => $.CONSUME(JsonNotInToken),
          },
          {
            GATE: () => options.allowQueryExpression,
            ALT: () => $.CONSUME(JsonBetweenToken),
          },
          {
            GATE: () => options.allowQueryExpression,
            ALT: () => $.CONSUME(JsonContainsToken),
          },
          {
            GATE: () => options.allowQueryExpression,
            ALT: () => $.CONSUME(JsonContainsStringToken),
          },
          {
            GATE: () => options.allowQueryExpression,
            ALT: () => $.CONSUME(JsonILikeToken),
          },
          {
            GATE: () => options.allowQueryExpression,
            ALT: () => $.CONSUME(JsonIncludesToken),
          },
          {
            GATE: () => options.allowQueryExpression,
            ALT: () => $.CONSUME(JsonLikeToken),
          },
          {
            GATE: () => options.allowQueryExpression,
            ALT: () => $.CONSUME(JsonNotLikeToken),
          },
          {
            GATE: () => options.allowQueryExpression,
            ALT: () => $.CONSUME(JsonNotOverlapsToken),
          },
          {
            GATE: () => options.allowQueryExpression,
            ALT: () => $.CONSUME(JsonNotRegexToken),
          },
          {
            GATE: () => options.allowQueryExpression,
            ALT: () => $.CONSUME(JsonOverlapsToken),
          },
          {
            // the regex operator is also the concatenation operator so
            // it is always allowed
            ALT: () => $.CONSUME(JsonRegexToken),
          },
        ]);
        $.OPTION7({
          GATE: () =>
            options.allowOptionalIfNull &&
            OperatorAcceptingOptionalIfNull.includes(operator.tokenType),
          DEF: () => $.CONSUME1(Question), // "?"
        });
        $.SUBRULE1($.valueExpression, { ARGS: [options, state] });
      },
    });

    $.OPTION2({
      // query expressions don't allow ternary
      GATE: () => operatorAllowed && !options.allowQueryExpression,
      DEF: () => {
        $.CONSUME(Question); // "?"
        $.SUBRULE2($.valueExpression, { ARGS: [options, state] });
        $.CONSUME2(ColonToken); // ":"
        $.SUBRULE3($.valueExpression, { ARGS: [options, state] });
      },
    });

    $.MANY3({
      GATE: () => state.openParentheses > 0,
      DEF: () => {
        state.openParentheses -= 1;
        $.OPTION5(() => $.CONSUME2(NewlineToken));
        $.CONSUME2(RParent);
      },
    });

    $.MANY2({
      // This is a tricky one, we allow a new line breaking an expression but only
      // if the following line is a filter (starts with a pipe)
      // We use LookAhead to peek at the next tokens without consuming them
      // to decide if we should close or keep the gate open
      GATE: () =>
        $.LA(1).tokenType === PipeToken ||
        ($.LA(1).tokenType === NewlineToken && $.LA(2).tokenType === PipeToken),
      DEF: () => {
        $.SUBRULE1($.filterFn, { ARGS: [options, state] });
      },
    });

    if (isRootNode && state.openParentheses > 0) {
      $.addMissingError(
        null,
        "Unmatched opening parenthesis, missing closing parenthesis"
      );
    }
  };
}
