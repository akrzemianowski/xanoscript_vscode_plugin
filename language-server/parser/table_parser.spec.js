import { expect } from "chai";
import { describe, it } from "mocha";
import { xanoscriptParser } from "./parser.js";

describe("table_parser", () => {
  it("should parse a basic table with identifier name", () => {
    const parser = xanoscriptParser(`table foo {
        auth = false

        schema {
          int id
        }
      }`);
    expect(parser.errors).to.be.empty;
  });

  it("should parse a basic table with a view", () => {
    const parser = xanoscriptParser(`table foo {
        auth = false

        schema {
          int id
        }

        view = {
          "adults": {
            search: $db.age > 21
            sort  : {age: "asc"}
            id    : "9ed7daad-682f-455e-bf02-ca53444cd429"
          }
        }
      }`);
    expect(parser.errors).to.be.empty;
  });

  it("should reject a table without an id column", () => {
    const parser = xanoscriptParser(`table foo {
        auth = false

        schema {
          text name
        }
      }`);

    console.log(parser.errors[0].message);
    expect(parser.errors).to.not.be.empty;
  });

  it("should reject a non int or uuid id column", () => {
    const parser = xanoscriptParser(`table foo {
        auth = false

        schema {
          text id
        }
      }`);
    expect(parser.errors).to.not.be.empty;
  });
});
