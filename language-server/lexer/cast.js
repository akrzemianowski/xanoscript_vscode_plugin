import { createUniqToken } from "./utils.js";

// disabled filter identifier (starts with !)
export const DisabledStatementToken = createUniqToken({
  name: "DisabledStatementToken",
  pattern: /![a-zA-Z][\w.]*/,
});

// "!int"
export const IntCastToken = createUniqToken({
  name: "IntCast",
  pattern: /!int/,
  label: "!int",
  // longer_alt: [DisabledStatementToken],
});

// "!bool"
export const BoolCastToken = createUniqToken({
  name: "BoolCast",
  pattern: /!bool/,
  label: "!bool",
  // longer_alt: [DisabledStatementToken],
});

// !array
export const ArrayCastToken = createUniqToken({
  name: "ArrayCast",
  pattern: /!array/,
  label: "!array",
  // longer_alt: [DisabledStatementToken],
});

// !text
export const TextCastToken = createUniqToken({
  name: "TextCast",
  pattern: /!text/,
  label: "!text",
  // longer_alt: [DisabledStatementToken],
});

// !expr
export const ExpressionCastToken = createUniqToken({
  name: "ExpressionCast",
  pattern: /!expr/,
  label: "!expr",
  // longer_alt: [DisabledStatementToken],
});

// !decimal
export const DecimalCastToken = createUniqToken({
  name: "DecimalCast",
  pattern: /!decimal/,
  label: "!decimal",
  // longer_alt: [DisabledStatementToken],
});

// !object
export const ObjectCastToken = createUniqToken({
  name: "ObjectCast",
  pattern: /!object/,
  label: "!object",
  // longer_alt: [DisabledStatementToken],
});

// !timestamp
export const TimestampCastToken = createUniqToken({
  name: "TimestampCast",
  pattern: /!timestamp/,
  label: "!timestamp",
  // longer_alt: [DisabledStatementToken],
});

// disabled filter identifier (starts with !)
export const ExclamationToken = createUniqToken({
  name: "ExclamationToken",
  pattern: /!/,
});

export const CastTokens = [
  IntCastToken,
  ArrayCastToken,
  TextCastToken,
  ExpressionCastToken,
  DecimalCastToken,
  ObjectCastToken,
  TimestampCastToken,
  BoolCastToken,
  ExclamationToken,
];

/**
 * Maps a token name to a type
 * @param {string} token the token name
 */
export function mapTokenToType(token) {
  switch (token) {
    case IntCastToken.name:
    case ArrayCastToken.name:
    case TextCastToken.name:
    case ExpressionCastToken.name:
    case DecimalCastToken.name:
    case ObjectCastToken.name:
    case TimestampCastToken.name:
    case BoolCastToken.name:
      return "type";
    case DisabledStatementToken.name:
      return "comment";
    case ExclamationToken.name:
      return "operator";
    default:
      return null;
  }
}
