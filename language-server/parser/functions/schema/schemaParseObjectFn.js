import { get, isPlainObject, keys, some } from "lodash-es";
import {
  ColonToken,
  CommaToken,
  LCurly,
  RCurly,
} from "../../../lexer/control.js";
import { StringLiteral } from "../../../lexer/literal.js";
import { DotToken, Identifier, NewlineToken } from "../../../lexer/tokens.js";
import {
  getSchemaGenericTypeName,
  isOptionalAttribute,
  isSchemaGenericType,
} from "./utils.js";

/**
 * Parse an object schema, set isAttribute to true if parsing an attribute
 * object (uses = instead of :)
 * captured will contain the tokens of the captured keys on the object
 * allowing for better error messages later on
 * @param {import('../../base_parser.js').XanoBaseParser} $
 */
export function schemaParseObjectFn($) {
  return (token, schema, captured = {}) => {
    let needSeparator = false;
    let lastToken = null;

    // grab all the keys, they contain the schema for the keys
    const objectKeys = keys(schema);
    const missingKeys = [...objectKeys];
    const keyNames = [];

    // you cannot have a generic mixed with another generic
    $.ACTION(() => {
      if (
        objectKeys.length > 1 &&
        some(objectKeys, (k) => isSchemaGenericType(k))
      ) {
        throw new Error(
          "schemaParseObjectFn supports only one generic type when multiple keys are defined"
        );
      }
    });

    $.CONSUME(LCurly); // "{"
    $.MANY(() => {
      $.MANY1(() => {
        needSeparator = false;
        $.CONSUME(NewlineToken);
      });

      if (needSeparator) {
        $.addInvalidValueError(
          lastToken,
          "Expected a comma, a new line or closing bracket"
        );
      }

      // first we capture the key
      let objectKeyToken;
      const keyValue = $.OR([
        {
          ALT: () => {
            objectKeyToken = $.CONSUME(Identifier);
            const tokens = [objectKeyToken];
            $.MANY3(() => {
              tokens.push($.CONSUME(DotToken));
              $.CONSUME1(Identifier);
            });
            const fullKey = tokens.map((t) => t.image).join(".");
            return fullKey;
          },
        },
        {
          ALT: () => {
            const objectKeyToken = $.CONSUME(StringLiteral);
            return objectKeyToken.image.slice(1, -1);
          },
        },
      ]);

      if (keyNames.includes(keyValue)) {
        $.addInvalidValueError(
          objectKeyToken,
          `Duplicate key '${keyValue}' found`
        );
      } else {
        keyNames.push(keyValue);
        captured[keyValue] = { key: objectKeyToken, value: null };
      }

      const subSchemaKey = keyMatchRequirements(keyValue, objectKeys);
      if (!subSchemaKey) {
        $.addInvalidValueError(
          objectKeyToken,
          `The key '${keyValue}' is not valid in this context`
        );
      }

      // remove from missing keys
      missingKeys.splice(missingKeys.indexOf(subSchemaKey), 1);

      $.CONSUME(ColonToken); // ":"

      const subSchema = get(schema, subSchemaKey, null);

      $.SUBRULE($.schemaFn, {
        ARGS: [objectKeyToken, subSchema, captured[keyValue]],
      });

      needSeparator = true;
      $.MANY2(() => {
        needSeparator = false;
        $.CONSUME1(NewlineToken);
      });

      $.OPTION(() => {
        needSeparator = false;
        $.CONSUME1(CommaToken);
      });
    });
    $.CONSUME(RCurly); // "}"

    if (missingKeys.length) {
      const missingKeyNames = missingKeys.filter(
        (k) => !isOptionalAttribute(k)
      );
      if (missingKeyNames.length > 1) {
        $.addInvalidValueError(
          lastToken || token,
          `The following required keys are missing: ${missingKeyNames.join(
            ", "
          )}`
        );
      } else if (missingKeyNames.length === 1) {
        $.addInvalidValueError(
          lastToken || token,
          `Missing required key '${missingKeyNames[0]}'`
        );
      }
    }

    return { foo: "foo-bar" };
  };
}

/**
 *
 * @param {*} key
 * @param {*} objectKeys
 * @returns {boolean|string} type name if matches, false if not, or the generic type that matches
 */
export const keyMatchRequirements = (key, objectKeys) => {
  for (const objectKey of objectKeys) {
    // is the key a generic type? (there can be only one then)
    if (isSchemaGenericType(objectKey)) {
      switch (getSchemaGenericTypeName(objectKey)) {
        case "string":
          if (typeof key === "string") return objectKey;
          break;
        case "number":
          if (!isNaN(Number(key))) return objectKey;
          break;
        case "boolean":
          if (key === "true" || key === "false") return objectKey;
          break;
      }
    } else if (
      isOptionalAttribute(objectKey) &&
      key === objectKey.slice(0, -1)
    ) {
      return objectKey;
    } else if (key === objectKey) {
      return objectKey;
    }
  }
  return false;
};

/**
 *
 * @param {*} attr
 * @returns
 */
export function schemaExpectObject(attr) {
  return isPlainObject(attr);
}
