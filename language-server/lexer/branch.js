import { createTokenByName, createUniqToken } from "./utils.js";

const Identifier = createUniqToken({
  name: "Identifier",
  pattern: /[a-zA-Z_]\w*/,
});

// "branch"
export const BranchToken = createTokenByName("branch", {
  longer_alt: Identifier,
  categories: [Identifier],
});

// "color"
export const ColorToken = createTokenByName("color", {
  longer_alt: Identifier,
  categories: [Identifier],
});

export const BranchTokens = [BranchToken, ColorToken];

/**
 * Maps a token name to a type
 * @param {string} token the token name
 */
export function mapTokenToType(token) {
  switch (token) {
    case BranchToken.name:
      return "keyword";
    case ColorToken.name:
      return "variable";
    default:
      return null;
  }
}
