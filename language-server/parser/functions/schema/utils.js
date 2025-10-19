/**
 * Check if an argument to a key is an enum (a list with at least 2 values)
 */
export function isEnumAttribute(attr) {
  if (typeof attr !== "object" || !Array.isArray(attr)) return false;
  return attr.length >= 2;
}

/**
 * Check if an argument is an array type (an array with a single value)
 */
export function isArrayAttribute(attr) {
  if (typeof attr !== "object" || !Array.isArray(attr)) return false;
  return attr.length === 1;
}

/**
 * If an attribute ends with a "?" it is optional
 * @param {*} attr
 * @returns
 */
export function isOptionalAttribute(attr) {
  if (!attr || typeof attr !== "string") return false;
  return attr.endsWith("?");
}

/**
 * if an attribute is within `[]` it's an object
 */
export function isSchemaGenericType(attr) {
  if (!attr || typeof attr !== "string") return false;
  if (isOptionalAttribute(attr)) {
    attr = attr.slice(0, -1);
  }
  return attr.startsWith("[") && attr.endsWith("]");
}

export function getSchemaGenericTypeName(attr) {
  if (!isSchemaGenericType(attr)) return null;
  if (isOptionalAttribute(attr)) {
    return attr.slice(1, -2);
  }
  return attr.slice(1, -1);
}

/**
 *
 * @param {string} attr
 * @param {string[]} types
 * @returns
 */
export function schemaExpectOneOf(attr, types) {
  if (isSchemaGenericType(attr)) {
    // remove the brackets and optional marker if present
    const typeName = isOptionalAttribute(attr)
      ? attr.slice(1, -2)
      : attr.slice(1, -1);
    return types.includes(typeName);
  }
  return false;
}
