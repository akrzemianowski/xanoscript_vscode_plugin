import { expect } from "chai";
import { describe, it } from "mocha";
import { EqualToken } from "../../../lexer/control.js";
import { lexDocument } from "../../../lexer/lexer.js";
import { Identifier } from "../../../lexer/tokens.js";
import { parser } from "../../test_parser.js";

export function parserExtension() {
  // this rule requires a foo field to be defined
  this.schemaParseAttributeFn_flat = this.RULE(
    "schemaParseAttributeFn_flat",
    () => {
      const schema = { "[string]": "[number]" };
      const name = this.CONSUME(Identifier);
      this.CONSUME(EqualToken); // "="
      this.SUBRULE(this.schemaParseAttributeFn, { ARGS: [name, schema] });
    }
  );

  // this rule requires a foo field to be defined
  this.schemaParseAttributeFn_all_optional = this.RULE(
    "schemaParseAttributeFn_all_optional",
    () => {
      const schema = { "disabled?": "[boolean]", "description?": "[string]" };
      const name = this.CONSUME(Identifier);
      this.SUBRULE(this.schemaParseAttributeFn, { ARGS: [name, schema] });
    }
  );

  this.schemaParseAttributeFn_deep = this.RULE(
    "schemaParseAttributeFn_deep",
    () => {
      const schema = {
        "[string]": {
          test: ["[number]"],
          bool: "[boolean]",
          hey: "some constant",
        },
      };
      const name = this.CONSUME(Identifier);
      this.CONSUME(EqualToken); // "="
      this.SUBRULE(this.schemaParseAttributeFn, { ARGS: [name, schema] });
    }
  );

  this.schemaParseAttributeFn_optional = this.RULE(
    "schemaParseAttributeFn_optional",
    () => {
      const schema = {
        "[string]": {
          "optional?": "[number]",
          required: "[boolean]",
        },
      };
      const name = this.CONSUME(Identifier);
      this.CONSUME(EqualToken); // "="
      this.SUBRULE(this.schemaParseAttributeFn, { ARGS: [name, schema] });
    }
  );
}

function parse(inputText) {
  parser.reset();
  const lexResult = lexDocument(inputText);
  parser.input = lexResult.tokens;
  return parser;
}

describe("schemaParseAttributeFn", () => {
  it("schemaParseAttributeFn accepts mix types and constants", () => {
    parse(`value = {something = 345}`).schemaParseAttributeFn_flat();
    expect(parser.errors).to.be.empty;

    parse(`value = {
      something = 123.2,
      other_thing = 44
    }`).schemaParseAttributeFn_flat();
    expect(parser.errors).to.be.empty;

    parse(
      `value = { something = 123.2, other_thing = 44 }`
    ).schemaParseAttributeFn_flat();
    expect(parser.errors).to.be.empty;
  });

  it("schemaParseAttributeFn immutable restricts to valid token", () => {
    parse(`value = {123: 124}`).schemaParseAttributeFn_flat();
    expect(parser.errors).to.not.be.empty;
  });

  it("schemaParseAttributeFn accepts deep definition", () => {
    parse(`value = {
      something = {
        test: [123, 456]
        bool: true
        hey: "some constant"
      } 
    }`).schemaParseAttributeFn_deep();
    expect(parser.errors).to.be.empty;
  });

  it("schemaParseAttributeFn rejects errors in deep definition", () => {
    parse(`value = {
      something = {
        test: 123,
        bool: true,
        hey: "some constant"
      } 
    }`).schemaParseAttributeFn_deep();
    expect(parser.errors).to.not.be.empty;
  });

  it("schemaParseAttributeFn rejects missing attribute", () => {
    parse(`value = {
      something = {
        test: [123, 456]
        hey: "some constant"
      } 
    }`).schemaParseAttributeFn_deep();
    expect(parser.errors).to.not.be.empty;
  });

  it("schemaParseAttributeFn rejects membership format for attribute", () => {
    parse(`value = {
      some.thing.here = {
        test: [123, 456]
        bool: true
        hey: "some constant"
      } 
    }`).schemaParseAttributeFn_deep();
    expect(parser.errors).to.not.be.empty;
  });

  it("schemaParseAttributeFn accepts optional attribute", () => {
    parse(`value = {
      something = {
        optional: 123
        required: true
      } 
    }`).schemaParseAttributeFn_optional();
    expect(parser.errors).to.be.empty;

    parse(`value = {
      something = {
        required: true
      } 
    }`).schemaParseAttributeFn_optional();
    expect(parser.errors).to.be.empty;
  });

  it("schemaParseAttributeFn can be empty when all optional attributes are missing", () => {
    parse(`my_function`).schemaParseAttributeFn_all_optional();
    expect(parser.errors).to.be.empty;
  });
});
