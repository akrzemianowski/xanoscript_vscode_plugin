import { expect } from "chai";
import { describe, it } from "mocha";
import { xanoscriptParser } from "./parser.js";

describe("addon_parser", () => {
  it("should parse a basic addon", () => {
    const parser = xanoscriptParser(`addon foo {
      input {
      }

      stack {
      }
    }`);
    expect(parser.errors).to.be.empty;
  });

  it("should parse a basic a string addon url", () => {
    const parser = xanoscriptParser(`addon "foo/bar" {
      input {
      }

      stack {
      }
    }`);

    expect(parser.errors).to.be.empty;
  });

  it("addon don't accept dynamic params", () => {
    const parser = xanoscriptParser(`addon foo/{user_id} {
      input {
        text user_id filters=trim
      }

      stack {
      }
    }`);

    expect(parser.errors).to.not.be.empty;
  });
});
