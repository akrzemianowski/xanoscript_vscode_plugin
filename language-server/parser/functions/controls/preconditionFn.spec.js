import { expect } from "chai";
import { describe, it } from "mocha";
import { lexDocument } from "../../../lexer/lexer.js";
import { parser } from "../../test_parser.js";

function parse(inputText) {
  parser.reset();
  const lexResult = lexDocument(inputText);
  parser.input = lexResult.tokens;
  parser.preconditionFn();
  return parser;
}

describe("preconditionFn", () => {
  it("preconditionFn accept an expression and error info", () => {
    const parser = parse(`precondition ($x1 == $x2) {
      error_type = "standard"
      error = ""
    }`);
    expect(parser.errors).to.be.empty;
  });

  it("preconditionFn accept an escaped string", () => {
    const parser = parse(
      `precondition ($escaped == '\\"hello this is chris\\\\\\' test\\"')`
    );
    expect(parser.errors).to.be.empty;
  });

  it("preconditionFn also accept a disabled field", () => {
    const parser = parse(`precondition ($x1 == $x2) {
      error_type = "standard"
      error = ""
      disabled = true
    }`);
    expect(parser.errors).to.be.empty;
  });

  it("preconditionFn can have no arguments", () => {
    const parser = parse(`precondition ($x1 == $x2)`);
    expect(parser.errors).to.be.empty;
  });

  it("preconditionFn also accept a description field", () => {
    const parser = parse(`precondition ($x1 == $x2) {
      error_type = "standard"
      error = ""
      description = "some description"
    }`);
    expect(parser.errors).to.be.empty;
  });

  it("preconditionFn also accept a description and a disabled field", () => {
    const parser = parse(`precondition ($x1 == $x2) {
      error_type = "standard"
      error = ""
      disabled = true
      description = "some description"
    }`);
    expect(parser.errors).to.be.empty;
  });

  it("preconditionFn also accept combined conditionals", () => {
    const parser =
      parse(`precondition (($input.data|is_array) && (($input.data|count) > 0)) {
      error_type = "inputerror"
      error = "Invalid data input. Expected a non-empty array."
      description = "Validate that the data input is a non-empty array."
    }`);
    expect(parser.errors).to.be.empty;
  });
});
