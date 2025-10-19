import { expect } from "chai";
import { describe, it } from "mocha";
import { lexDocument } from "../../../lexer/lexer.js";
import { parser } from "../../test_parser.js";

function parse(inputText) {
  parser.reset();
  const lexResult = lexDocument(inputText);
  parser.input = lexResult.tokens;
  parser.utilGetInputFn();
  return parser;
}

describe("utilGetInputFn", () => {
  it("utilGetInputFn accepts an encoding attribute", () => {
    const parser = parse(`get_input {
      encoding = "JSON"
    } as $x4`);
    expect(parser.errors).to.be.empty;
  });

  it("utilGetInputFn accepts a description", () => {
    const parser = parse(`get_input {
      encoding = "JSON"
      description = "foo"
    } as $x4`);
    expect(parser.errors).to.be.empty;
  });

  it("utilGetInputFn can be disabled", () => {
    const parser = parse(`get_input {
      encoding = "JSON"
      disabled = true
    } as $x4`);
    expect(parser.errors).to.be.empty;
  });

  it("utilGetInputFn requires an output as value", () => {
    const parser = parse(`get_input`);
    expect(parser.errors).to.not.be.empty;
  });

  it("utilGetInputFn requires an encoding attribute", () => {
    const parser = parse(`get_input {
      disabled = true
    } as $x4`);
    expect(parser.errors).to.not.be.empty;
  });
});
