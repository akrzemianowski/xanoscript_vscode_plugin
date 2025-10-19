import { createTokenByName, createUniqToken } from "./utils.js";

const Identifier = createUniqToken({
  name: "Identifier",
  pattern: /[a-zA-Z_]\w*/,
});

// "instructions"
export const InstructionsToken = createTokenByName("instructions", {
  longer_alt: Identifier,
  categories: [Identifier], // could also be an identifier
});

// "tool"
export const ToolToken = createTokenByName("tool", {
  longer_alt: Identifier,
  categories: [Identifier], // could also be an identifier
});

export const ToolTokens = [InstructionsToken, ToolToken];

/**
 * Maps a token name to a type
 * @param {string} token the token name
 */
export function mapTokenToType(token) {
  switch (token) {
    case ToolToken.name:
      return "keyword";
    case InstructionsToken.name:
      return "variable";
    default:
      return null;
  }
}
