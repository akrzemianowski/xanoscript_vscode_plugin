import { RequestToken } from "../../../lexer/api.js";

// api.request {
//   url = "https://www.example.com"
//   method = "POST"
//   params = {}|set:"foo":"bar"
//   headers = []|push:"Set-Cookie: sessionId=e8bb43229de9; Domain=foo.example.com"
//   timeout = 25
//   ca_certificate = ""
//   certificate = ""
//   certificate_pass = ""
//   private_key = ""
// } as api1

/**
 * @param {import('../../base_parser.js').XanoBaseParser} $
 */
export function apiRequestFn($) {
  const requiredAttrs = ["url", "method"];
  const optionalAttrs = [
    "description",
    "disabled",
    "params",
    "headers",
    "timeout",
    "ca_certificate",
    "certificate",
    "certificate_pass",
    "private_key",
  ];

  return () => {
    $.sectionStack.push("apiRequestFn");
    const fnToken = $.CONSUME(RequestToken); // "request"
    $.SUBRULE($.functionAttrReq, {
      ARGS: [fnToken, requiredAttrs, optionalAttrs],
    });
    $.SUBRULE($.asVariable, { ARGS: [fnToken] });
    $.sectionStack.pop();
  };
}
