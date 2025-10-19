import { createTokenByName, createUniqToken } from "./utils.js";

const Identifier = createUniqToken({
  name: "Identifier",
  pattern: /[a-zA-Z_]\w*/,
});

// "acceptance"
export const AcceptanceToken = createTokenByName("acceptance", {
  longer_alt: Identifier,
  categories: [Identifier],
});

// "preferences"
export const PreferencesToken = createTokenByName("preferences", {
  longer_alt: Identifier,
  categories: [Identifier],
});

// "realtime"
export const RealtimeToken = createTokenByName("realtime", {
  longer_alt: Identifier,
  categories: [Identifier],
});

// "workspace"
export const WorkspaceToken = createTokenByName("workspace", {
  longer_alt: Identifier,
  categories: [Identifier],
});

export const WorkspaceTokens = [
  AcceptanceToken,
  PreferencesToken,
  RealtimeToken,
  WorkspaceToken,
];

/**
 * Maps a token name to a type
 * @param {string} token the token name
 */
export function mapTokenToType(token) {
  switch (token) {
    case AcceptanceToken.name:
    case PreferencesToken.name:
    case RealtimeToken.name:
    case WorkspaceToken.name:
      return "keyword";
    default:
      return null;
  }
}
