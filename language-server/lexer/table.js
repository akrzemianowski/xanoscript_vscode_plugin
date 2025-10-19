import { createTokenByName, createUniqToken } from "./utils.js";

const Identifier = createUniqToken({
  name: "Identifier",
  pattern: /[a-zA-Z_]\w*/,
});

// "table"
export const TableToken = createTokenByName("table", {
  longer_alt: Identifier,
  categories: [Identifier],
});

export const TableTokens = [TableToken];

/**
 * Maps a token name to a type
 * @param {string} token the token name
 */
export function mapTokenToType(token) {
  switch (token) {
    case TableToken.name:
      return "keyword";
    default:
      return null;
  }
}
