import { createTokenByName, createUniqToken } from "./utils.js";

const Identifier = createUniqToken({
  name: "Identifier",
  pattern: /[a-zA-Z_]\w*/,
});

// "datasource"
export const DatasourceToken = createTokenByName("datasource", {
  longer_alt: Identifier,
  categories: [Identifier],
});

// "workflow_test"
export const WorkflowTestToken = createTokenByName("workflow_test", {
  longer_alt: Identifier,
  categories: [Identifier],
});

export const WorkflowTestTokens = [DatasourceToken, WorkflowTestToken];

/**
 * Maps a token name to a type
 * @param {string} token the token name
 */
export function mapTokenToType(token) {
  switch (token) {
    case WorkflowTestToken.name:
      return "keyword";
    case DatasourceToken.name:
      return "variable";
    default:
      return null;
  }
}
