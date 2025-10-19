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
exports.getRegistryIndex = exports.extractNameFromContent = exports.getRegistryByPath = exports.removeRegistryByPath = exports.updateRegistryByPath = exports.refreshRegistry = exports.scanRegistry = exports.fileContent = exports.saveRegistry = exports.readRegistry = exports.getRegistry = exports.registryFileExists = void 0;
const vscode = require("vscode");
const path_1 = require("path");
const config_1 = require("../config");
const types_1 = require("./types");
const fsUtils_1 = require("./fsUtils");
let __cached_registry = null;
function registryFileExists() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield pathExists(config_1.XANO_OBJECTS_PATH);
            return true;
        }
        catch (_a) {
            return false;
        }
    });
}
exports.registryFileExists = registryFileExists;
function getRegistry() {
    return __awaiter(this, void 0, void 0, function* () {
        if (__cached_registry) {
            return __cached_registry;
        }
        else {
            return readRegistry();
        }
    });
}
exports.getRegistry = getRegistry;
/**
 * Get the registry from the local workspace
 *
 * The local registry maintains the state of each local files and their
 * association with the remote Xano workspace.
 * @returns XanoFileRegistry
 */
function readRegistry() {
    return __awaiter(this, void 0, void 0, function* () {
        if (config_1.config === null || config_1.config === void 0 ? void 0 : config_1.config.isReady) {
            try {
                const data = yield (0, fsUtils_1.readFile)(config_1.XANO_OBJECTS_PATH);
                const registry = JSON.parse(data.toString());
                __cached_registry = registry;
                return registry;
            }
            catch (err) {
                if (err instanceof vscode.FileSystemError && err.code === "ENOENT") {
                    // file does not exist, return an empty registry
                    yield (0, fsUtils_1.writeFile)(config_1.XANO_OBJECTS_PATH, JSON.stringify([]));
                    return [];
                }
                else {
                    // console.error("readRegistry(): Error reading registry file", err);
                    return [];
                }
            }
        }
        else {
            // only display when not in a test
            console.error("readRegistry(): Xano extension has not been initialized in your current workspace");
            return [];
        }
    });
}
exports.readRegistry = readRegistry;
/**
 * Save the registry to the workspace registry file
 * @param registry XanoFileRegistry
 * @returns
 */
function saveRegistry(registry) {
    return __awaiter(this, void 0, void 0, function* () {
        if (config_1.config.isReady) {
            try {
                const content = JSON.stringify(registry, null, 2);
                yield (0, fsUtils_1.writeFile)(config_1.XANO_OBJECTS_PATH, content);
                __cached_registry = registry;
            }
            catch (error) {
                console.error("saveRegistry(): Error writing registry file", error);
                return;
            }
        }
        else {
            throw new Error("saveRegistry(): Xano extension has not been initialized in your current workspace");
        }
    });
}
exports.saveRegistry = saveRegistry;
/**
 * Get the type of the object based on its content
 * @param content
 * @returns
 */
function getTypeFromPath(path) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!path.endsWith(".xs")) {
            // ignore non .xs files
            return types_1.XanoObjectType.UNKNOWN;
        }
        // the first word in the content is the type
        if (path.startsWith(config_1.config.paths.functions)) {
            return types_1.XanoObjectType.FUNCTION;
        }
        else if (path.startsWith(config_1.config.paths.tableTriggers)) {
            // table triggers are a sub folder of tables so we want to match it first
            return types_1.XanoObjectType.TABLE_TRIGGER;
        }
        else if (path.startsWith(config_1.config.paths.tables)) {
            return types_1.XanoObjectType.TABLE;
        }
        else if (path.startsWith(config_1.config.paths.apis)) {
            // if the filename part is api_group.xs
            if (path.endsWith("api_group.xs")) {
                return types_1.XanoObjectType.API_GROUP;
            }
            else {
                return types_1.XanoObjectType.API_ENDPOINT;
            }
        }
        else if (path.startsWith(config_1.config.paths.tasks)) {
            return types_1.XanoObjectType.TASK;
        }
        else if (path.startsWith(config_1.config.paths.tools)) {
            return types_1.XanoObjectType.TOOL;
        }
        else if (path.startsWith(config_1.config.paths.workflowTests)) {
            return types_1.XanoObjectType.WORKFLOW_TEST;
        }
        else if (path.startsWith(config_1.config.paths.agentTriggers)) {
            return types_1.XanoObjectType.AGENT_TRIGGER;
        }
        else if (path.startsWith(config_1.config.paths.agents)) {
            return types_1.XanoObjectType.AGENT;
        }
        else if (path.startsWith(config_1.config.paths.mcpServerTriggers)) {
            return types_1.XanoObjectType.MCP_SERVER_TRIGGER;
        }
        else if (path.startsWith(config_1.config.paths.mcpServers)) {
            return types_1.XanoObjectType.MCP_SERVER;
        }
        else if (path.startsWith(config_1.config.paths.addOns)) {
            return types_1.XanoObjectType.ADD_ON;
        }
        else if (path.startsWith(config_1.config.paths.middlewares)) {
            return types_1.XanoObjectType.MIDDLEWARE;
        }
        else if (path.startsWith(config_1.config.paths.realtimeTriggers)) {
            return types_1.XanoObjectType.REALTIME_TRIGGER;
        }
        else if (path.startsWith(config_1.config.paths.realtimeChannels)) {
            return types_1.XanoObjectType.REALTIME_CHANNEL;
        }
        return types_1.XanoObjectType.UNKNOWN;
    });
}
/**
 * Check if a file or directory exists in the local workspace
 * @param path
 * @returns
 */
function pathExists(path) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield (0, fsUtils_1.stat)((0, path_1.join)(config_1.ROOT_PATH, path));
            return true;
        }
        catch (err) {
            console.error("pathExists(): Error checking if file exists", err);
            return false;
        }
    });
}
/**
 * Get the content of a file in the local workspace
 * @param path
 * @returns
 */
function fileContent(path) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield (0, fsUtils_1.readFile)((0, path_1.join)(config_1.ROOT_PATH, path));
            return data;
        }
        catch (err) {
            console.error("fileContent(): Error reading file content", err);
            return "";
        }
    });
}
exports.fileContent = fileContent;
function scanRegistry(paths) {
    return __awaiter(this, void 0, void 0, function* () {
        let registry = yield readRegistry();
        for (const path of paths) {
            console.log("Scanning file: ", path);
            registry = yield refreshRegistry(registry, path);
        }
        yield saveRegistry(registry);
        return registry;
    });
}
exports.scanRegistry = scanRegistry;
/**
 * Refresh the local index by checking if the file exists and if it has changed
 *
 * The registry is an index of all xano files and their metadata. It is used to
 * keep track of the state of each object for the pull and push flow.
 * @param path
 * @returns
 */
function refreshRegistry(registry, path) {
    return __awaiter(this, void 0, void 0, function* () {
        const recordIdx = registry.findIndex((record) => path === record.path);
        const registryRecord = registry[recordIdx];
        if (registryRecord) {
            // file is referenced in the index
            const exists = yield pathExists(path);
            if (registryRecord.status === types_1.XanoStatus.NEW) {
                if (!exists) {
                    // if we deleted a new local file (not yet synced)
                    // remove it from the registry
                    registry.splice(recordIdx, 1);
                    return registry;
                }
            }
            if (exists) {
                // get the file content
                const content = yield fileContent(path);
                const localHash = (0, fsUtils_1.getFileHash)(content.toString());
                if (registryRecord.id === 0) {
                    // if the file is new and exists, update the registry
                    registryRecord.status = types_1.XanoStatus.NEW;
                    return registry;
                }
                else if (localHash !== registryRecord.sha256) {
                    // if the file has changed, update the registry
                    registryRecord.status = types_1.XanoStatus.CHANGED;
                    return registry;
                }
                else {
                    // if the file has not changed, update the registry
                    registryRecord.status = types_1.XanoStatus.UNCHANGED;
                    registryRecord.staged = false;
                    return registry;
                }
            }
            else {
                if (registryRecord.id === 0) {
                    // if the file does not exist remove from the registry if it was never synced
                    registry.splice(recordIdx, 1);
                    return registry;
                }
                else {
                    // the file should be marked as not found
                    registryRecord.status = types_1.XanoStatus.NOTFOUND;
                    return registry;
                }
            }
        }
        else {
            // file does not exist in the index
            const newRecord = {
                id: 0,
                path,
                status: types_1.XanoStatus.NEW,
                type: yield getTypeFromPath(path),
                staged: false,
            };
            registry.push(newRecord);
            return registry;
        }
    });
}
exports.refreshRegistry = refreshRegistry;
/**
 * Mutate provided registry by updating the record at the given path
 * @param registry
 * @param path
 * @param update
 * @returns
 */
function updateRegistryByPath(registry, path, update) {
    const recordIdx = registry.findIndex((record) => path === record.path);
    const record = registry[recordIdx];
    if (record) {
        Object.assign(record, update);
    }
    return registry;
}
exports.updateRegistryByPath = updateRegistryByPath;
/**
 * Mutate provided registry by removing the record at the given path
 * @param registry
 * @param path
 * @returns
 */
function removeRegistryByPath(registry, path) {
    const recordIdx = registry.findIndex((record) => path === record.path);
    const record = registry[recordIdx];
    if (record) {
        registry.splice(recordIdx, 1);
    }
    return registry;
}
exports.removeRegistryByPath = removeRegistryByPath;
/**
 * Get a record from the registry by its path
 * @param registry
 * @param path
 */
function getRegistryByPath(registry, path) {
    const recordIdx = registry.findIndex((record) => path === record.path);
    return registry[recordIdx];
}
exports.getRegistryByPath = getRegistryByPath;
/**
 * Extract the name from the first line of a XanoScript file
 * Files typically start with: "type name {" (e.g., "table user {" or "function utils/factorial {")
 * @param content
 * @returns
 */
function extractNameFromContent(content) {
    var _a;
    const firstLine = (_a = content.split("\n")[0]) === null || _a === void 0 ? void 0 : _a.trim();
    if (!firstLine) {
        return null;
    }
    // Match pattern: keyword name { ... or keyword name (
    // Only match known XanoScript keywords followed by a name (with or without quotes)
    // Examples: "table user {", "function utils/factorial {", "query search verb=GET {", "api MyAPI (", "table "my user" {"
    const keywordPattern = /^(api_group|table|function|api|task|tool|agent|query|middleware|add_on|workflow_test|table_trigger|agent_trigger|mcp_server|mcp_server_trigger|realtime_trigger|realtime_channel)\s+(?:"([^"]+)"|([^\s({]+))/;
    const match = firstLine.match(keywordPattern);
    if (match) {
        // Group 2 is quoted name, group 3 is unquoted name
        return match[2] || match[3] || null;
    }
    return null;
}
exports.extractNameFromContent = extractNameFromContent;
/**
 * Read the registry and return an object organized by type with names extracted from files
 * @returns RegistryTypeIndex
 * @example
 * {
 *   table: ["user", "order"],
 *   function: ["utils/factorial", "helpers/string"],
 *   api_endpoint: ["GET_user", "POST_order"]
 * }
 */
function getRegistryIndex() {
    return __awaiter(this, void 0, void 0, function* () {
        const registry = yield getRegistry();
        const index = {};
        for (const record of registry) {
            // Skip unknown types and files that don't exist
            if (record.type === types_1.XanoObjectType.UNKNOWN ||
                record.status === types_1.XanoStatus.NOTFOUND) {
                continue;
            }
            // Initialize the type array if it doesn't exist
            const typeKey = record.type;
            if (!index[typeKey]) {
                index[typeKey] = [];
            }
            try {
                // Read the file content
                const content = yield fileContent(record.path);
                // Extract the name from the file
                const name = extractNameFromContent(content);
                if (name) {
                    index[typeKey].push({
                        path: record.path,
                        name: name,
                        input: {},
                    });
                }
            }
            catch (error) {
                console.error(`getRegistryIndex(): Error reading file ${record.path}`, error);
                // Continue processing other files
            }
        }
        return index;
    });
}
exports.getRegistryIndex = getRegistryIndex;
//# sourceMappingURL=registry.js.map