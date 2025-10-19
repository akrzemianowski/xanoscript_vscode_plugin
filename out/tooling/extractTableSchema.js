"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractTableSchema = void 0;
const inputTypes_1 = require("./inputTypes");
function extractTableSchema(tableContent) {
    const schema = {};
    for (const line of tableContent.split("\n")) {
        // look for schema { ... }
        if (line.trim().startsWith("schema {")) {
            let braceCount = 1;
            for (const schemaLine of tableContent
                .split("\n")
                .slice(tableContent.split("\n").indexOf(line) + 1)) {
                const trimmedLine = schemaLine.trim();
                // Skip empty lines
                if (!trimmedLine) {
                    continue;
                }
                // Update brace count before processing
                const openBraces = (schemaLine.match(/{/g) || []).length;
                const closeBraces = (schemaLine.match(/}/g) || []).length;
                // Only process lines at the top level of input block (braceCount === 1)
                // Split by whitespace and filter empty strings
                const parts = trimmedLine.split(/\s+/).filter((part) => part);
                if (parts.length >= 2 && braceCount === 1) {
                    const [type, name] = parts;
                    // Check if type is an array (ends with [])
                    const isArray = type.includes("[]");
                    // Handle enum? syntax (type with ? attached) and array syntax
                    let cleanType = type.replace("[]", ""); // Remove array notation
                    cleanType = cleanType.endsWith("?")
                        ? cleanType.slice(0, -1)
                        : cleanType;
                    if (inputTypes_1.inputTypes.includes(cleanType)) {
                        // Clean the field name:
                        // - Remove ?=value pattern (optional with default value)
                        // - Remove ? if it's just optional without default
                        let cleanName = name;
                        if (name.includes("?=")) {
                            // Remove the ?=default part, keep just the field name
                            cleanName = name.split("?=")[0];
                        }
                        else if (name.endsWith("?")) {
                            cleanName = name.slice(0, -1);
                        }
                        schema[cleanName] = {
                            type: cleanType,
                            isArray: isArray,
                            default: name.split("?=")[1],
                            optional: type.includes("?") && !isArray,
                            nullable: name.endsWith("?"), // ? on name makes it nullable
                        };
                    }
                }
                // Update brace count after processing
                braceCount += openBraces - closeBraces;
                if (braceCount === 0) {
                    break;
                }
            }
        }
    }
    return schema;
}
exports.extractTableSchema = extractTableSchema;
//# sourceMappingURL=extractTableSchema.js.map