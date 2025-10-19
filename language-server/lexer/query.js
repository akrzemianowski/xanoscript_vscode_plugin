import { createTokenByName, createUniqToken } from "./utils.js";

const Identifier = createUniqToken({
  name: "Identifier",
  pattern: /[a-zA-Z_]\w*/,
});

export const QueryToken = createTokenByName("query", {
  longer_alt: Identifier,
  categories: [Identifier], // could also be an identifier
});

export const VerbToken = createTokenByName("verb", {
  longer_alt: Identifier,
  categories: [Identifier], // could also be an identifier
});

// Following are the method for query endpoints
export const GETToken = createTokenByName("GET", {
  longer_alt: Identifier,
  categories: [Identifier], // could also be an identifier
});

export const PATCHToken = createTokenByName("PATCH", {
  longer_alt: Identifier,
  categories: [Identifier], // could also be an identifier
});
export const POSTToken = createTokenByName("POST", {
  longer_alt: Identifier,
  categories: [Identifier], // could also be an identifier
});
export const PUTToken = createTokenByName("PUT", {
  longer_alt: Identifier,
  categories: [Identifier], // could also be an identifier
});
export const DELETEToken = createTokenByName("DELETE", {
  categories: [Identifier], // could also be an identifier
  longer_alt: Identifier,
});

// where
export const WhereToken = createTokenByName("where", {
  longer_alt: Identifier,
  categories: [Identifier], // could also be an identifier
});

// additional_where
export const AdditionalWhereToken = createTokenByName("additional_where", {
  longer_alt: Identifier,
  categories: [Identifier], // could also be an identifier
});

// sort
export const SortToken = createTokenByName("sort", {
  longer_alt: Identifier,
  categories: [Identifier], // could also be an identifier
});

// override_sort
export const OverrideSortToken = createTokenByName("override_sort", {
  longer_alt: Identifier,
  categories: [Identifier], // could also be an identifier
});

// join
export const JoinToken = createTokenByName("join", {
  longer_alt: Identifier,
  categories: [Identifier], // could also be an identifier
});

// dblink
export const DbLinkToken = createTokenByName("dblink", {
  longer_alt: Identifier,
  categories: [Identifier], // could also be an identifier
});

// paging
export const PagingToken = createTokenByName("paging", {
  longer_alt: Identifier,
  categories: [Identifier], // could also be an identifier
});

// distinct
export const DistinctToken = createTokenByName("distinct", {
  longer_alt: Identifier,
  categories: [Identifier], // could also be an identifier
});

// output
export const OutputToken = createTokenByName("output", {
  longer_alt: Identifier,
  categories: [Identifier], // could also be an identifier
});

// addon
export const AddonToken = createTokenByName("addon", {
  longer_alt: Identifier,
  categories: [Identifier], // could also be an identifier
});

// eval
export const EvalToken = createTokenByName("eval", {
  longer_alt: Identifier,
  categories: [Identifier], // could also be an identifier
});

export const QueryTokens = [
  AdditionalWhereToken,
  WhereToken,
  SortToken,
  OverrideSortToken,
  JoinToken,
  QueryToken,
  VerbToken,
  GETToken,
  PATCHToken,
  POSTToken,
  PUTToken,
  DELETEToken,
  DbLinkToken,
  DistinctToken,
  PagingToken,
  OutputToken,
  AddonToken,
  EvalToken,
];

/**
 * Maps a token name to a type
 * @param {string} token the token name
 */
export function mapTokenToType(token) {
  switch (token) {
    case QueryToken.name:
    case VerbToken.name:
      return "keyword";
    case GETToken.name:
    case PATCHToken.name:
    case POSTToken.name:
    case PUTToken.name:
    case DELETEToken.name:
      return "enumMember";

    case WhereToken.name:
    case JoinToken.name:
    case DbLinkToken.name:
    case DistinctToken.name:
    case PagingToken.name:
    case OutputToken.name:
    case AddonToken.name:
    case EvalToken.name:
    case SortToken.name:
    case OverrideSortToken.name:
    case AdditionalWhereToken.name:
      return "property";
    default:
      return null;
  }
}
