"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWorkspaceObjects = getWorkspaceObjects;
const registry_1 = require("../registry/registry");
const types_1 = require("../registry/types");
const extractInputSchema_1 = require("./extractInputSchema");
const extractTableSchema_1 = require("./extractTableSchema");
/**
 * Get all workspace objects of a specific category or all objects
 * Extracts schema information for tables (table schema) and other objects (input schema)
 *
 * @param category - The category of objects to retrieve
 * @returns Array of JSON strings representing workspace objects
 */
function getWorkspaceObjects(category) {
    return __awaiter(this, void 0, void 0, function* () {
        const registry = yield (0, registry_1.getRegistry)();
        const objects = [];
        // Filter registry based on category
        const filteredRecords = registry.filter((record) => {
            if (category === "all") {
                return true;
            }
            // Map category to XanoObjectType(s)
            switch (category) {
                case "function":
                    return record.type === types_1.XanoObjectType.FUNCTION;
                case "tool":
                    return record.type === types_1.XanoObjectType.TOOL;
                case "api":
                    return record.type === types_1.XanoObjectType.API_ENDPOINT;
                case "api_group":
                    return record.type === types_1.XanoObjectType.API_GROUP;
                case "table":
                    return record.type === types_1.XanoObjectType.TABLE;
                case "agent":
                    return record.type === types_1.XanoObjectType.AGENT;
                case "mcp_server":
                    return record.type === types_1.XanoObjectType.MCP_SERVER;
                case "middleware":
                    return record.type === types_1.XanoObjectType.MIDDLEWARE;
                case "realtime_channel":
                    return record.type === types_1.XanoObjectType.REALTIME_CHANNEL;
                case "tasks":
                    return record.type === types_1.XanoObjectType.TASK;
                case "addons":
                    return record.type === types_1.XanoObjectType.ADD_ON;
                default:
                    return false;
            }
        });
        // Process each record
        for (const record of filteredRecords) {
            const content = yield (0, registry_1.fileContent)(record.path);
            // Extract name from path (remove ID prefix and .xs extension)
            const fileName = record.path.split("/").pop() || "";
            const nameMatch = fileName.match(/^\d+_(.+)\.xs$/) || fileName.match(/^(.+)\.xs$/);
            const name = nameMatch ? nameMatch[1] : fileName;
            const obj = {
                id: record.id,
                name: name,
                type: record.type,
                path: record.path,
            };
            // Extract schema based on object type
            if (record.type === types_1.XanoObjectType.TABLE) {
                // For tables, extract the table schema
                const schema = (0, extractTableSchema_1.extractTableSchema)(content);
                if (Object.keys(schema).length > 0) {
                    obj.schema = schema;
                }
            }
            else if (record.type === types_1.XanoObjectType.FUNCTION ||
                record.type === types_1.XanoObjectType.API_ENDPOINT ||
                record.type === types_1.XanoObjectType.TASK ||
                record.type === types_1.XanoObjectType.TOOL ||
                record.type === types_1.XanoObjectType.AGENT ||
                record.type === types_1.XanoObjectType.MCP_SERVER ||
                record.type === types_1.XanoObjectType.WORKFLOW_TEST) {
                // For most other objects, extract the input schema
                const schema = (0, extractInputSchema_1.extractInputSchema)(content);
                if (Object.keys(schema).length > 0) {
                    obj.schema = schema;
                }
            }
            objects.push(obj);
        }
        // Convert objects to JSON strings
        return objects.map((obj) => JSON.stringify(obj, null, 2));
    });
}
//# sourceMappingURL=getWorkspaceObjects.js.map