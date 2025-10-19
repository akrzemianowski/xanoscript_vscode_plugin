import { createTokenByName, createUniqToken } from "./utils.js";

const Identifier = createUniqToken({
  name: "Identifier",
  pattern: /[a-zA-Z_]\w*/,
});

// "agent"
export const AgentToken = createTokenByName("agent", {
  longer_alt: Identifier,
  categories: [Identifier], // could also be an identifier
});

// "llm"
export const LLMToken = createTokenByName("llm", {
  longer_alt: Identifier,
  categories: [Identifier], // could also be an identifier
});

// "tools"
export const ToolsToken = createTokenByName("tools", {
  longer_alt: Identifier,
  categories: [Identifier], // could also be an identifier
});

export const AgentTokens = [AgentToken, LLMToken, ToolsToken];

/**
 * Maps a token name to a type
 * @param {string} token the token name
 */
export function mapTokenToType(token) {
  switch (token) {
    case AgentToken.name:
    case LLMToken.name:
    case ToolsToken.name:
      return "keyword";
    default:
      return null;
  }
}
