import { createUniqToken } from "./utils.js";

// Comment token - captures entire line comments starting with #
// Comments can only be on empty lines (nothing before the comment)
export const CommentToken = createUniqToken({
  name: "CommentToken",
  label: "// comment",
  pattern: /\/\/[^\r\n]*/,
});

export const CommentTokens = [CommentToken];

/**
 * Map comment tokens to their semantic types
 * @param {string} tokenName - The name of the token
 * @returns {string|undefined} The semantic type
 */
export function mapTokenToType(tokenName) {
  switch (tokenName) {
    case CommentToken.name:
      return "comment";
    default:
      return undefined;
  }
}
