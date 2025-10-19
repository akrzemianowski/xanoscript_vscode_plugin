import { createTokenByName, createUniqToken } from "./utils.js";

const Identifier = createUniqToken({
  name: "Identifier",
  pattern: /[a-zA-Z_]\w*/,
});

// "function"
export const FunctionToken = createTokenByName("function", {
  longer_alt: Identifier,
  categories: [Identifier], // could also be an identifier
});

export const RunToken = createTokenByName("run", {
  longer_alt: Identifier,
  categories: [Identifier], // could also be an identifier
});

export const CallToken = createTokenByName("call", {
  longer_alt: Identifier,
  categories: [Identifier], // could also be an identifier
});

export const FunctionTokens = [FunctionToken, RunToken, CallToken];

/**
 * Maps a token name to a type
 * @param {string} token the token name
 */
export function mapTokenToType(token) {
  switch (token) {
    case FunctionToken.name:
      return "keyword";
    case RunToken.name:
    case CallToken.name:
      return "function";
    default:
      return null;
  }
}
