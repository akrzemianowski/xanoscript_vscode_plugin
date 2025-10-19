import { createTokenByName, createUniqToken } from "./utils.js";

const Identifier = createUniqToken({
  name: "Identifier",
  pattern: /[a-zA-Z_]\w*/,
});

// "addon"
export const AddonToken = createTokenByName("addon", {
  longer_alt: Identifier,
  categories: [Identifier], // could also be an identifier
});

export const AddonTokens = [AddonToken];

/**
 * Maps a token name to a type
 * @param {string} token the token name
 */
export function mapTokenToType(token) {
  switch (token) {
    case AddonToken.name:
      return "keyword";
    default:
      return null;
  }
}
