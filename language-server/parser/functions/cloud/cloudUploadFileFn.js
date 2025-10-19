import { UploadFileToken } from "../../../lexer/cloud.js";
import { EqualToken, LCurly, RCurly } from "../../../lexer/control.js";
import { Identifier, NewlineToken } from "../../../lexer/tokens.js";

/**
 * @param {import('../../base_parser.js').XanoBaseParser} $
 */
export function cloudUploadFileFn($) {
  return () => {
    $.sectionStack.push("cloudUploadFileFn");
    $.CONSUME(UploadFileToken); // "upload_file"
    $.CONSUME(LCurly); // "{"
    $.MANY(() => {
      $.AT_LEAST_ONE(() => $.CONSUME(NewlineToken));
      $.CONSUME1(Identifier); // "field_name"
      $.CONSUME(EqualToken); // "="
      $.SUBRULE($.valueExpression);
    });
    $.MANY1(() => $.CONSUME1(NewlineToken));
    $.CONSUME(RCurly); // "}"
    $.sectionStack.pop();
  };
}
