import { createTokenByName, createUniqToken } from "./utils.js";

const Identifier = createUniqToken({
  name: "Identifier",
  pattern: /[a-zA-Z_]\w*/,
});

// filters
export const FiltersToken = createTokenByName("filters", {
  longer_alt: Identifier,
  categories: [Identifier], // could also be an identifier
});

// special case filter for db links (table reference)
export const DbLinkToken = createUniqToken({
  name: "DbLinkFilter",
  label: "@",
  pattern: /@/,
});

export const FilterTokens = [FiltersToken, DbLinkToken];

export function mapTokenToType(token) {
  switch (token) {
    case FiltersToken.name:
      return "keyword";

    case DbLinkToken.name:
      return "function";
    default:
      return null;
  }
}
