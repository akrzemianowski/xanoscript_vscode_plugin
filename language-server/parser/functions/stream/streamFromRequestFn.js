import { FromRequestToken } from "../../../lexer/stream.js";

/**
 * stream.from_request {
      url = "https://webhook.site/8aa94772-0457-4b62-803d-69b63d2664d1"
      method = "GET"
      params = {}
      headers = []
      timeout = 10
      follow_location = true
      verify_host = false
      verify_peer = false
      ca_certificate = ""
      certificate = ""
      certificate_pass = ""
      private_key = ""
      private_key_pass = ""
    } as stream1
 * @param {import('../base_parser.js').XanoBaseParser} $
 */
export function streamFromRequestFn($) {
  const requiredAttrs = [
    "url",
    "method",
    "params",
    "headers",
    "timeout",
    "follow_location",
  ];
  const optionalAttrs = [
    "description",
    "disabled",
    "verify_host",
    "verify_peer",
    "ca_certificate",
    "certificate",
    "certificate_pass",
    "private_key",
    "private_key_pass",
  ];

  return () => {
    $.sectionStack.push("streamFromRequest");
    const fnToken = $.CONSUME(FromRequestToken); // from_request
    $.SUBRULE($.functionAttrReq, {
      ARGS: [fnToken, requiredAttrs, optionalAttrs],
    });
    $.SUBRULE($.asVariable, { ARGS: [fnToken] });
    $.sectionStack.pop();
  };
}
