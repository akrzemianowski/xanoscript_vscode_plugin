import { arrayOfObjectAttrReq } from "./arrayOfObjectAttrReq.js";
import { arrayOfStringLiterals } from "./arrayOfStringLiterals.js";
import { arrayWithValues } from "./arrayWithValues.js";
import { assignableVariableAs } from "./assignableVariableAs.js";
import { assignableVariableProperty } from "./assignableVariableProperty.js";
import { asVariable } from "./asVariable.js";
import { booleanValue } from "./booleanValue.js";
import { castedValue } from "./castedValue.js";
import { chainedIdentifier } from "./chainedIdentifier.js";
import { completeAuthVariable } from "./completeAuthVariable.js";
import { completeEnvVariable } from "./completeEnvVariable.js";
import { completeInputVariable } from "./completeInputVariable.js";
import { enumValue } from "./enumValue.js";
import { filterFn } from "./filterFn.js";
import { functionAttrReq } from "./functionAttrReq.js";
import { longFormVariable } from "./longFormVariable.js";
import { minimalFnBody } from "./minimalFnBody.js";
import { mockAttribute } from "./mockAttribute.js";
import { numberValue } from "./numberValue.js";
import { objectAttrReq } from "./objectAttrReq.js";
import { objectWithAttributes } from "./objectWithAttributes.js";
import { pipedFilter } from "./pipedFilter.js";
import { requiredValueFnBody } from "./requiredValueFnBody.js";
import { shortFormVariable } from "./shortFormVariable.js";
import { stringArray } from "./stringArray.js";
import { tagsAttribute } from "./tagsAttribute.js";
import { valueExpression } from "./valueExpression.js";
import { valueExpressionForResponse } from "./valueExpressionForResponse.js";
import { variableOnly } from "./variableOnly.js";

/**
 * Registers all the parsers in this folder
 * @param {import('../base_parser.js').XanoBaseParser} $
 */
export const register = ($) => {
  $.mockAttribute = $.RULE("mockAttribute", mockAttribute($));
  $.arrayOfObjectAttrReq = $.RULE(
    "arrayOfObjectAttrReq",
    arrayOfObjectAttrReq($)
  );
  $.arrayOfStringLiterals = $.RULE(
    "arrayOfStringLiterals",
    arrayOfStringLiterals($)
  );
  $.arrayWithValues = $.RULE("arrayWithValues", arrayWithValues($));
  $.assignableVariableAs = $.RULE(
    "assignableVariableAs",
    assignableVariableAs($)
  );
  $.assignableVariableProperty = $.RULE(
    "assignableVariableProperty",
    assignableVariableProperty($)
  );
  $.booleanValue = $.RULE("booleanValue", booleanValue($));
  $.castedValue = $.RULE("castedValue", castedValue($));
  $.chainedIdentifier = $.RULE("chainedIdentifier", chainedIdentifier($));
  $.enumValue = $.RULE("enumValue", enumValue($));
  $.functionAttrReq = $.RULE("functionAttrReq", functionAttrReq($));
  $.filterFn = $.RULE("filterFn", filterFn($));
  $.longFormVariable = $.RULE("longFormVariable", longFormVariable($));
  $.minimalFnBody = $.RULE("minimalFnBody", minimalFnBody($));
  $.numberValue = $.RULE("numberValue", numberValue($));
  $.objectAttrReq = $.RULE("objectAttrReq", objectAttrReq($));
  $.objectWithAttributes = $.RULE(
    "objectWithAttributes",
    objectWithAttributes($)
  );
  $.pipedFilter = $.RULE("pipedFilter", pipedFilter($));
  $.requiredValueFnBody = $.RULE("requiredValueFnBody", requiredValueFnBody($));
  $.shortFormVariable = $.RULE("shortFormVariable", shortFormVariable($));
  $.stringArray = $.RULE("stringArray", stringArray($));
  $.tagsAttribute = $.RULE("tagsAttribute", tagsAttribute($));
  $.valueExpression = $.RULE("valueExpression", valueExpression($));
  $.valueExpressionForResponse = $.RULE(
    "valueExpressionForResponse",
    valueExpressionForResponse($)
  );
  $.variableOnly = $.RULE("variableOnly", variableOnly($));
  $.completeAuthVariable = $.RULE(
    "completeAuthVariable",
    completeAuthVariable($)
  );
  $.completeInputVariable = $.RULE(
    "completeInputVariable",
    completeInputVariable($)
  );
  $.completeEnvVariable = $.RULE("completeEnvVariable", completeEnvVariable($));
  $.asVariable = $.RULE("asVariable", asVariable($));
};
