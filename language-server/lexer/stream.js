import { createTokenByName, createUniqToken } from "./utils.js";

const Identifier = createUniqToken({
  name: "Identifier",
  pattern: /[a-zA-Z_]\w*/,
});

// stream
export const StreamToken = createTokenByName("stream", {
  longer_alt: Identifier,
  categories: [Identifier],
});

// stream.from_csv
export const FromCsvToken = createTokenByName("from_csv", {
  longer_alt: Identifier,
  categories: [Identifier],
});

// stream.from_jsonl
export const FromJsonlToken = createTokenByName("from_jsonl", {
  longer_alt: Identifier,
  categories: [Identifier],
});

// stream.from_request
export const FromRequestToken = createTokenByName("from_request", {
  longer_alt: Identifier,
  categories: [Identifier],
});

export const StreamTokens = [
  StreamToken,
  FromCsvToken,
  FromJsonlToken,
  FromRequestToken,
];

/**
 * Maps a token name to a type
 * @param {string} token the token name
 */
export function mapTokenToType(token) {
  switch (token) {
    case StreamToken.name:
    case FromCsvToken.name:
    case FromJsonlToken.name:
    case FromRequestToken.name:
      return "function";
    default:
      return null;
  }
}
