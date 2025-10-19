import { expect } from "chai";
import { describe, it } from "mocha";
import { lexDocument } from "../../../lexer/lexer.js";
import { parser } from "../../test_parser.js";

function parse(inputText) {
  parser.reset();
  const lexResult = lexDocument(inputText);
  parser.input = lexResult.tokens;
  parser.apiRequestFn();
  return parser;
}

describe("apiRequestFn", () => {
  it("apiRequestFn accepts url and method field", () => {
    const parser = parse(`request {
      url = "https://www.example.com"
      method = "GET"
    } as $script`);
    expect(parser.errors).to.be.empty;
  });

  it("apiRequestFn can be disabled", () => {
    const parser = parse(`request {
      url = "https://www.example.com"
      method = "GET"
      disabled = true
    } as $new_user`);
    expect(parser.errors).to.be.empty;
  });

  it("apiRequestFn accepts a description", () => {
    const parser = parse(`request {
      description = "request function"
      url = "https://www.example.com"
      method = "GET"
    } as $new_user`);
    expect(parser.errors).to.be.empty;
  });

  it("apiRequestFn accepts a lot of fields", () => {
    const parser = parse(`request {
      url = "https://www.example.com"
      method = "POST"
      params = {}|set:"foo":"bar"
      headers = []|push:"Set-Cookie: sessionId=e8bb43229de9; Domain=foo.example.com"
      timeout = 25
      ca_certificate = "what is this"
      certificate = """
        -----BEGIN CERTIFICATE-----
        MIIDwDCCAqigAwIBAgIUKdx0jsUKOA0rPL/+cDSX9Jf/lBcwDQYJKoZIhvcNAQEL
        BQAwcDELMAkGA1UEBhMCR0IxEjAQBgNVBAgMCVdpbHRzaGlyZTESMBAGA1UEBwwJ
        U2FsaXNidXJ5MRUwEwYDVQQKDAxQYWhvIFByb2plY3QxEDAOBgNVBAsMB1Rlc3Rp
        bmcxEDAOBgNVBAMMB1Jvb3QgQ0EwIBcNMjMwNDEzMTMyMjMxWhgPMjEwNTA2MDIx
        MzIyMzFaMHAxCzAJBgNVBAYTAkdCMRIwEAYDVQQIDAlXaWx0c2hpcmUxEjAQBgNV
        BAcMCVNhbGlzYnVyeTEVMBMGA1UECgwMUGFobyBQcm9qZWN0MRAwDgYDVQQLDAdU
        tcYhJg==
        -----END CERTIFICATE-----
        """
      certificate_pass = "my awesome password"
      private_key = "knlkn3f3n"
    } as $new_user`);
    expect(parser.errors).to.be.empty;
  });

  it("apiRequestFn requires a url and method field", () => {
    let parser = parse(`request {
      url = "https://www.example.com"
    } as $user`);
    expect(parser.errors).to.not.be.empty;

    parser = parse(`request {
      method = "GET"
    } as $user`);
    expect(parser.errors).to.not.be.empty;
  });
});
