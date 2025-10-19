import { CreateAttachmentToken } from "../../../lexer/storage.js";

/**
 * @param {import('../../base_parser.js').XanoBaseParser} $
 */
export function storageCreateAttachmentFn($) {
  return () => {
    const requiredAttrs = ["value", "filename", "access"];
    const optionalAttrs = ["description", "disabled"];

    $.sectionStack.push("storageCreateAttachmentFn");
    const fnToken = $.CONSUME(CreateAttachmentToken); // "create_attachment"
    $.SUBRULE($.functionAttrReq, {
      ARGS: [fnToken, requiredAttrs, optionalAttrs],
    });
    $.SUBRULE($.asVariable, { ARGS: [fnToken] });
    $.sectionStack.pop();
  };
}
