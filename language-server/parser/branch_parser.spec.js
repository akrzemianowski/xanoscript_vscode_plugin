import { expect } from "chai";
import { describe, it } from "mocha";
import { xanoscriptParser } from "./parser.js";

describe("branch_parser", () => {
  it("should parse a basic branch with identifier", () => {
    const parser = xanoscriptParser(`branch foo {
    }`);
    expect(parser.errors).to.be.empty;
  });

  it("should parse a basic branch with string literal", () => {
    const parser = xanoscriptParser(`branch "foo" {
    }`);
    expect(parser.errors).to.be.empty;
  });

  it("should parse a branch with color attribute", () => {
    const parser = xanoscriptParser(`branch foo {
      color = "#FF0000"
    }`);
    expect(parser.errors).to.be.empty;
  });

  it("should parse a branch with description attribute", () => {
    const parser = xanoscriptParser(`branch foo {
      description = "This is a branch description"
    }`);
    expect(parser.errors).to.be.empty;
  });

  it("should parse a branch with middleware clause", () => {
    const parser = xanoscriptParser(`branch foo {
      middleware = {
        pre: []
      }
    }`);
    expect(parser.errors).to.be.empty;
  });

  it("should parse a branch with color and description", () => {
    const parser = xanoscriptParser(`branch foo {
      color = "#FF0000"
      description = "Test branch"
    }`);
    expect(parser.errors).to.be.empty;
  });

  it("should parse a branch with all attributes", () => {
    const parser = xanoscriptParser(`branch foo {
      color = "#FF0000"
      description = "Test branch"
      middleware = {
        pre: []
      }
    }`);
    expect(parser.errors).to.be.empty;
  });

  it("should parse a branch with middleware containing items", () => {
    const parser = xanoscriptParser(`branch foo {
      middleware = {
        pre: [
          {name: "auth_middleware"}
          {name: "rate_limiter"}
        ]
      }
    }`);
    expect(parser.errors).to.be.empty;
  });

  it("should parse a branch with attributes in different order", () => {
    const parser = xanoscriptParser(`branch foo {
      description = "Test branch"
      color = "#00FF00"
      middleware = {
        post: []
      }
    }`);
    expect(parser.errors).to.be.empty;
  });

  it("should parse a branch with string literal name and all attributes", () => {
    const parser = xanoscriptParser(`branch "my-branch" {
      color = "#0000FF"
      description = "Branch with string name"
      middleware = {
        pre: [{name: "mw1"}]
      }
    }`);
    expect(parser.errors).to.be.empty;
  });

  it("should handle multiple newlines between attributes", () => {
    const parser = xanoscriptParser(`branch foo {
      color = "#FF0000"


      description = "Test branch"
    }`);
    expect(parser.errors).to.be.empty;
  });

  it("should handle trailing newlines", () => {
    const parser = xanoscriptParser(`branch foo {
      color = "#FF0000"
    }

    `);
    expect(parser.errors).to.be.empty;
  });

  it("should fail when missing opening brace", () => {
    const parser = xanoscriptParser(`branch foo
      color = "#FF0000"
    }`);
    expect(parser.errors).to.not.be.empty;
  });

  it("should fail when missing closing brace", () => {
    const parser = xanoscriptParser(`branch foo {
      color = "#FF0000"
    `);
    expect(parser.errors).to.not.be.empty;
  });

  it("should fail when missing branch name", () => {
    const parser = xanoscriptParser(`branch {
      color = "#FF0000"
    }`);
    expect(parser.errors).to.not.be.empty;
  });

  it("should fail with duplicate color attribute", () => {
    const parser = xanoscriptParser(`branch foo {
      color = "#FF0000"
      color = "#00FF00"
    }`);
    expect(parser.errors).to.not.be.empty;
  });

  it("should fail with duplicate description attribute", () => {
    const parser = xanoscriptParser(`branch foo {
      description = "First"
      description = "Second"
    }`);
    expect(parser.errors).to.not.be.empty;
  });

  it("should fail with duplicate middleware clause", () => {
    const parser = xanoscriptParser(`branch foo {
      middleware = {
        pre: []
      }
      middleware = {
        post: []
      }
    }`);
    expect(parser.errors).to.not.be.empty;
  });
});
