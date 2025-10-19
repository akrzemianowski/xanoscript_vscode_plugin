import { expect } from "chai";
import { Lexer } from "chevrotain";
import { beforeEach,describe, it } from "mocha";
import { DynamicPathToken,NewlineToken } from "./tokens.js";
import { __resetTokens } from "./utils.js";

describe("QueryUrl Token", () => {
  beforeEach(() => {
    __resetTokens();
  });

  it("should match valid query URLs", () => {
    const lexer = new Lexer([DynamicPathToken, NewlineToken]);

    const validInputs = [
      "api/users",
      "data/records",
      "test/path/subpath",
      "users/profiles",
    ];

    validInputs.forEach((input) => {
      const result = lexer.tokenize(input);
      expect(result.errors).to.be.empty;
      expect(result.tokens).to.have.lengthOf(1);
      expect(result.tokens[0]).to.have.property("tokenType", DynamicPathToken);
      expect(result.tokens[0]).to.have.property("image", input);
    });
  });

  it("should accept variables in query URLs", () => {
    const lexer = new Lexer([DynamicPathToken, NewlineToken]);
    const validInputs = [
      "api/{user_id}",
      "data/{record_id}/details",
      "test/{path}/subpath",
      "{user_id}/profiles",
    ];
    validInputs.forEach((input) => {
      const result = lexer.tokenize(input);
      if (result.errors.length > 0) {
        console.error(
          `${input} => Errors: ${result.errors
            .map((e) => e.message)
            .join(", ")}`
        );
      }

      expect(result.errors).to.be.empty;
      expect(result.tokens).to.have.lengthOf(1);
      expect(result.tokens[0]).to.have.property("tokenType", DynamicPathToken);
      expect(result.tokens[0]).to.have.property("image", input);
    });
  });

  it("should reject invalid query URLs", () => {
    const lexer = new Lexer([DynamicPathToken, NewlineToken]);

    const invalidInputs = [
      "/users", // Starts with slash
      "api/", // Ends with slash
      "api//users", // Double slash
      "123/users", // Starts with number
      "api/users/", // Trailing slash
      "api/123", // Segment starts with number
    ];

    invalidInputs.forEach((input) => {
      const result = lexer.tokenize(input);
      expect(result.errors).to.not.be.empty;
    });
  });

  it("should correctly tokenize QueryUrl in a larger input", () => {
    const lexer = new Lexer([DynamicPathToken, NewlineToken]);

    const input = "api/users get";
    const result = lexer.tokenize(input);

    expect(result.errors).to.not.be.empty; // Since 'get' is not tokenized
    expect(result.tokens).to.have.lengthOf(1);
    expect(result.tokens[0]).to.have.property("tokenType", DynamicPathToken);
    expect(result.tokens[0]).to.have.property("image", "api/users");
  });
});
