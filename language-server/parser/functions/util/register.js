import { utilGeoDistanceFn } from "./utilGeoDistanceFn.js";
import { utilGetAllInputFn } from "./utilGetAllInputFn.js";
import { utilGetEnvFn } from "./utilGetEnvFn.js";
import { utilGetInputFn } from "./utilGetInputFn.js";
import { utilGetVarsFn } from "./utilGetVarsFn.js";
import { utilIpLookupFn } from "./utilIpLookupFn.js";
import { utilPostProcessFn } from "./utilPostProcessFn.js";
import { utilSetHeaderFn } from "./utilSetHeaderFn.js";
import { utilSleepFn } from "./utilSleepFn.js";
import { utilTemplateFn } from "./utilTemplateFn.js";

/**
 * Registers all the parsers in this folder
 * @param {import('../base_parser.js').XanoBaseParser} $
 */
export const register = ($) => {
  $.utilGeoDistanceFn = $.RULE("utilGeoDistanceFn", utilGeoDistanceFn($));
  $.utilGetAllInputFn = $.RULE("utilGetAllInputFn", utilGetAllInputFn($));
  $.utilGetEnvFn = $.RULE("utilGetEnvFn", utilGetEnvFn($));
  $.utilGetInputFn = $.RULE("utilGetInputFn", utilGetInputFn($));
  $.utilGetVarsFn = $.RULE("utilGetVarsFn", utilGetVarsFn($));
  $.utilIpLookupFn = $.RULE("utilIpLookupFn", utilIpLookupFn($));
  $.utilPostProcessFn = $.RULE("utilPostProcessFn", utilPostProcessFn($));
  $.utilSetHeaderFn = $.RULE("utilSetHeaderFn", utilSetHeaderFn($));
  $.utilSleepFn = $.RULE("utilSleepFn", utilSleepFn($));
  $.utilTemplateFn = $.RULE("utilTemplateFn", utilTemplateFn($));
};
