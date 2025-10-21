"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractInputSchema = extractInputSchema;
const inputTypes_1 = require("./inputTypes");
function extractInputSchema(tableContent) {
    const lines = tableContent.split("\n");
    const schema = {};
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        // look for input { ... }
        if (line.trim().startsWith("input {")) {
            let braceCount = 1;
            for (let j = i + 1; j < lines.length; j++) {
                const schemaLine = lines[j];
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
                    // Handle enum? syntax (type with ? attached)
                    const cleanType = type.endsWith("?") ? type.slice(0, -1) : type;
                    if (inputTypes_1.inputTypes.includes(cleanType)) {
                        // Clean the field name:
                        // - Remove ?=value pattern (optional with default value)
                        // - Keep ? if it's just optional without default
                        let cleanName = name;
                        if (name.includes("?=")) {
                            // Remove the ?=default part, keep just the field name
                            cleanName = name.split("?=")[0];
                        }
                        else if (name.endsWith("?")) {
                            cleanName = name.slice(0, -1);
                        }
                        schema[cleanName] = {
                            type: cleanType.endsWith("?")
                                ? cleanType.slice(0, -1)
                                : cleanType,
                            isArray: cleanType.endsWith("[]"),
                            default: name.split("?=")[1],
                            optional: cleanType.endsWith("?"),
                            nullable: name.endsWith("?"),
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
//# sourceMappingURL=extractInputSchema.js.map