import { CreateImageToken } from "../../../lexer/storage.js";

/**
 * @param {import('../../base_parser.js').XanoBaseParser} $
 */
export function storageCreateImageFn($) {
  return () => {
    const requiredAttrs = ["value", "filename", "access"];
    const optionalAttrs = ["description", "disabled"];

    $.sectionStack.push("storageCreateImageFn");
    const fnToken = $.CONSUME(CreateImageToken); // "create_image"
    $.SUBRULE($.functionAttrReq, {
      ARGS: [fnToken, requiredAttrs, optionalAttrs],
    });
    $.SUBRULE($.asVariable, { ARGS: [fnToken] });
    $.sectionStack.pop();
  };
}
