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
exports.getAllXanoscriptFiles = exports.getAllFolders = exports.syncRegistry = exports.syncRealtimeTriggers = exports.syncRealtimeChannels = exports.syncMcpServerTriggers = exports.syncAgentTriggers = exports.syncMiddlewares = exports.syncAddOns = exports.syncMcpServers = exports.syncTableTriggers = exports.syncAgent = exports.syncApi = exports.syncAgents = exports.syncApiGroups = exports.syncTools = exports.syncTasks = exports.syncWorkflowTests = exports.syncTables = exports.syncFunctions = void 0;
const config_1 = require("../config");
const path_1 = require("path");
const registry_1 = require("./registry");
const types_1 = require("./types");
const changesTreeDataProvider_1 = require("../view/changes/changesTreeDataProvider");
const fsUtils_1 = require("./fsUtils");
function syncFunctions(registry, paths = []) {
    return __awaiter(this, void 0, void 0, function* () {
        const folder = (0, path_1.join)(config_1.ROOT_PATH, config_1.config.paths.functions || "functions");
        yield (0, fsUtils_1.createDirectory)(folder);
        const functionsFolder = yield getAllXanoscriptFiles(folder);
        for (const file of functionsFolder) {
            registry = yield (0, registry_1.refreshRegistry)(registry, file);
            paths.push(file);
        }
        return registry;
    });
}
exports.syncFunctions = syncFunctions;
function syncTables(registry, paths = []) {
    return __awaiter(this, void 0, void 0, function* () {
        const folder = (0, path_1.join)(config_1.ROOT_PATH, config_1.config.paths.tables || "tables");
        yield (0, fsUtils_1.createDirectory)(folder);
        const tablesFolder = yield getAllXanoscriptFiles(folder);
        for (const file of tablesFolder) {
            registry = yield (0, registry_1.refreshRegistry)(registry, file);
            paths.push(file);
        }
        return registry;
    });
}
exports.syncTables = syncTables;
function syncWorkflowTests(registry, paths = []) {
    return __awaiter(this, void 0, void 0, function* () {
        const folder = (0, path_1.join)(config_1.ROOT_PATH, config_1.config.paths.workflowTests || "workflow_tests");
        yield (0, fsUtils_1.createDirectory)(folder);
        const workflowTestsFolder = yield getAllXanoscriptFiles(folder);
        for (const file of workflowTestsFolder) {
            registry = yield (0, registry_1.refreshRegistry)(registry, file);
            paths.push(file);
        }
        return registry;
    });
}
exports.syncWorkflowTests = syncWorkflowTests;
function syncTasks(registry, paths = []) {
    return __awaiter(this, void 0, void 0, function* () {
        const folder = (0, path_1.join)(config_1.ROOT_PATH, config_1.config.paths.tasks || "tasks");
        yield (0, fsUtils_1.createDirectory)(folder);
        const tasksFolder = yield getAllXanoscriptFiles(folder);
        for (const file of tasksFolder) {
            registry = yield (0, registry_1.refreshRegistry)(registry, file);
            paths.push(file);
        }
        return registry;
    });
}
exports.syncTasks = syncTasks;
function syncTools(registry, paths = []) {
    return __awaiter(this, void 0, void 0, function* () {
        const folder = (0, path_1.join)(config_1.ROOT_PATH, config_1.config.paths.tools || "tools");
        yield (0, fsUtils_1.createDirectory)(folder);
        const toolsFolder = yield getAllXanoscriptFiles(folder);
        for (const file of toolsFolder) {
            registry = yield (0, registry_1.refreshRegistry)(registry, file);
            paths.push(file);
        }
        return registry;
    });
}
exports.syncTools = syncTools;
/**
 * read all the folders at the root of the config.paths.apis
 * and refreshes the registry with the files in each folder
 * @param registry
 * @param paths
 * @returns
 */
function syncApiGroups(registry, paths = []) {
    return __awaiter(this, void 0, void 0, function* () {
        // create the API groups folder if it does not exist
        const folder = (0, path_1.join)(config_1.ROOT_PATH, config_1.config.paths.apis || "apis");
        yield (0, fsUtils_1.createDirectory)(folder);
        // retrieve all API groups, aka the apis folder
        const apiGroupsFolder = yield getAllFolders(folder);
        for (const folder of apiGroupsFolder) {
            const path = (0, path_1.join)(folder, "api_group.xs");
            // check if the folder contains a api_group.xs file
            if (yield (0, fsUtils_1.fileExists)(path)) {
                // if the api_group.xs file exists, refresh the registry
                registry = yield (0, registry_1.refreshRegistry)(registry, path);
                paths.push(folder);
            }
        }
        return registry;
    });
}
exports.syncApiGroups = syncApiGroups;
/**
 * read all the folders at the root of the config.paths.agents
 * and refreshes the registry with the files in each folder
 * @param registry
 * @param paths
 * @returns
 */
function syncAgents(registry, paths = []) {
    return __awaiter(this, void 0, void 0, function* () {
        // create the Agents folder if it does not exist
        const folder = (0, path_1.join)(config_1.ROOT_PATH, config_1.config.paths.agents || "agents");
        yield (0, fsUtils_1.createDirectory)(folder);
        // retrieve all Agents, aka the agents folder
        const agentFolders = yield getAllFolders(folder);
        for (const folder of agentFolders) {
            const path = (0, path_1.join)(folder, "agent.xs");
            // check if the folder contains a agent.xs file
            if (yield (0, fsUtils_1.fileExists)(path)) {
                // if the agent.xs file exists, refresh the registry
                registry = yield (0, registry_1.refreshRegistry)(registry, path);
                paths.push(folder);
            }
        }
        return registry;
    });
}
exports.syncAgents = syncAgents;
function syncApi(registry, paths = []) {
    return __awaiter(this, void 0, void 0, function* () {
        const folder = (0, path_1.join)(config_1.ROOT_PATH, config_1.config.paths.apis || "apis");
        yield (0, fsUtils_1.createDirectory)(folder);
        const apiFolder = yield getAllXanoscriptFiles(folder);
        for (const file of apiFolder) {
            registry = yield (0, registry_1.refreshRegistry)(registry, file);
            paths.push(file);
        }
        return registry;
    });
}
exports.syncApi = syncApi;
function syncAgent(registry, paths = []) {
    return __awaiter(this, void 0, void 0, function* () {
        const folder = (0, path_1.join)(config_1.ROOT_PATH, config_1.config.paths.agents || "agents");
        yield (0, fsUtils_1.createDirectory)(folder);
        const apiFolder = yield getAllXanoscriptFiles(folder);
        for (const file of apiFolder) {
            registry = yield (0, registry_1.refreshRegistry)(registry, file);
            paths.push(file);
        }
        return registry;
    });
}
exports.syncAgent = syncAgent;
function syncTableTriggers(registry, paths = []) {
    return __awaiter(this, void 0, void 0, function* () {
        const folder = (0, path_1.join)(config_1.ROOT_PATH, config_1.config.paths.tableTriggers || "tables/triggers");
        yield (0, fsUtils_1.createDirectory)(folder);
        const triggersFolder = yield getAllXanoscriptFiles(folder);
        for (const file of triggersFolder) {
            registry = yield (0, registry_1.refreshRegistry)(registry, file);
            paths.push(file);
        }
        return registry;
    });
}
exports.syncTableTriggers = syncTableTriggers;
function syncMcpServers(registry, paths = []) {
    return __awaiter(this, void 0, void 0, function* () {
        const folder = (0, path_1.join)(config_1.ROOT_PATH, config_1.config.paths.mcpServers || "mcp_servers");
        yield (0, fsUtils_1.createDirectory)(folder);
        const mcpServersFolder = yield getAllXanoscriptFiles(folder);
        for (const file of mcpServersFolder) {
            registry = yield (0, registry_1.refreshRegistry)(registry, file);
            paths.push(file);
        }
        return registry;
    });
}
exports.syncMcpServers = syncMcpServers;
function syncAddOns(registry, paths = []) {
    return __awaiter(this, void 0, void 0, function* () {
        const folder = (0, path_1.join)(config_1.ROOT_PATH, config_1.config.paths.addOns || "addons");
        yield (0, fsUtils_1.createDirectory)(folder);
        const addOnsFolder = yield getAllXanoscriptFiles(folder);
        for (const file of addOnsFolder) {
            registry = yield (0, registry_1.refreshRegistry)(registry, file);
            paths.push(file);
        }
        return registry;
    });
}
exports.syncAddOns = syncAddOns;
function syncMiddlewares(registry, paths = []) {
    return __awaiter(this, void 0, void 0, function* () {
        const folder = (0, path_1.join)(config_1.ROOT_PATH, config_1.config.paths.middlewares || "middlewares");
        yield (0, fsUtils_1.createDirectory)(folder);
        const middlewaresFolder = yield getAllXanoscriptFiles(folder);
        for (const file of middlewaresFolder) {
            registry = yield (0, registry_1.refreshRegistry)(registry, file);
            paths.push(file);
        }
        return registry;
    });
}
exports.syncMiddlewares = syncMiddlewares;
function syncAgentTriggers(registry, paths = []) {
    return __awaiter(this, void 0, void 0, function* () {
        const folder = (0, path_1.join)(config_1.ROOT_PATH, config_1.config.paths.agentTriggers || "agents/triggers");
        yield (0, fsUtils_1.createDirectory)(folder);
        const triggersFolder = yield getAllXanoscriptFiles(folder);
        for (const file of triggersFolder) {
            registry = yield (0, registry_1.refreshRegistry)(registry, file);
            paths.push(file);
        }
        return registry;
    });
}
exports.syncAgentTriggers = syncAgentTriggers;
function syncMcpServerTriggers(registry, paths = []) {
    return __awaiter(this, void 0, void 0, function* () {
        const folder = (0, path_1.join)(config_1.ROOT_PATH, config_1.config.paths.mcpServerTriggers || "mcp_servers/triggers");
        yield (0, fsUtils_1.createDirectory)(folder);
        const triggersFolder = yield getAllXanoscriptFiles(folder);
        for (const file of triggersFolder) {
            registry = yield (0, registry_1.refreshRegistry)(registry, file);
            paths.push(file);
        }
        return registry;
    });
}
exports.syncMcpServerTriggers = syncMcpServerTriggers;
function syncRealtimeChannels(registry, paths = []) {
    return __awaiter(this, void 0, void 0, function* () {
        const folder = (0, path_1.join)(config_1.ROOT_PATH, config_1.config.paths.realtimeChannels || "realtime/channels");
        yield (0, fsUtils_1.createDirectory)(folder);
        const channelsFolder = yield getAllXanoscriptFiles(folder);
        for (const file of channelsFolder) {
            registry = yield (0, registry_1.refreshRegistry)(registry, file);
            paths.push(file);
        }
        return registry;
    });
}
exports.syncRealtimeChannels = syncRealtimeChannels;
function syncRealtimeTriggers(registry, paths = []) {
    return __awaiter(this, void 0, void 0, function* () {
        const folder = (0, path_1.join)(config_1.ROOT_PATH, config_1.config.paths.realtimeTriggers || "realtime/triggers");
        yield (0, fsUtils_1.createDirectory)(folder);
        const triggersFolder = yield getAllXanoscriptFiles(folder);
        for (const file of triggersFolder) {
            registry = yield (0, registry_1.refreshRegistry)(registry, file);
            paths.push(file);
        }
        return registry;
    });
}
exports.syncRealtimeTriggers = syncRealtimeTriggers;
function syncRegistry() {
    return __awaiter(this, void 0, void 0, function* () {
        if (!config_1.config.isReady) {
            return [];
        }
        let registry = yield (0, registry_1.readRegistry)();
        const paths = [];
        registry = yield syncFunctions(registry, paths);
        registry = yield syncTables(registry, paths);
        registry = yield syncTasks(registry, paths);
        registry = yield syncTools(registry, paths);
        registry = yield syncApiGroups(registry, paths);
        registry = yield syncApi(registry, paths);
        registry = yield syncWorkflowTests(registry, paths);
        registry = yield syncAgent(registry, paths);
        registry = yield syncAgentTriggers(registry, paths);
        registry = yield syncTableTriggers(registry, paths);
        registry = yield syncMcpServers(registry, paths);
        registry = yield syncMcpServerTriggers(registry, paths);
        registry = yield syncAddOns(registry, paths);
        registry = yield syncMiddlewares(registry, paths);
        registry = yield syncRealtimeChannels(registry, paths);
        registry = yield syncRealtimeTriggers(registry, paths);
        // detect deleted files
        for (let idx = registry.length - 1; idx >= 0; idx--) {
            const record = registry[idx];
            if (!paths.includes(record.path)) {
                if (record.id === 0) {
                    // if the file was new, remove it from the registry
                    registry.splice(idx, 1);
                }
                else if (record.original) {
                    // read the first line of the file, we'll use this to compare with any new file
                    // record.original is a base64 encoded string
                    const firstLine = Buffer.from(record.original, "base64")
                        .toString()
                        .split("\n")[0]
                        .trim();
                    // compare with all the new files
                    let foundIndex = -1;
                    for (let i = 0; i < registry.length; i++) {
                        const r = registry[i];
                        if (r.id === 0) {
                            const content = yield (0, registry_1.fileContent)(r.path);
                            const localFirstLine = content.split("\n")[0].trim();
                            if (firstLine === localFirstLine) {
                                foundIndex = i;
                                break;
                            }
                        }
                    }
                    if (foundIndex > -1) {
                        // it was just a move/rename, update the record
                        registry[foundIndex] = Object.assign(Object.assign({}, record), { path: registry[foundIndex].path });
                        registry.splice(idx, 1);
                    }
                    else {
                        record.status = types_1.XanoStatus.NOTFOUND;
                    }
                }
                else {
                    record.status = types_1.XanoStatus.NOTFOUND;
                }
            }
        }
        yield (0, registry_1.saveRegistry)(registry);
        changesTreeDataProvider_1.changesProvider.refresh();
        return registry;
    });
}
exports.syncRegistry = syncRegistry;
function getAllFolders(path) {
    return __awaiter(this, void 0, void 0, function* () {
        const folders = [];
        const directories = yield (0, fsUtils_1.readdir)(path);
        for (const directory of directories) {
            const fullPath = (0, path_1.join)(path, directory);
            if (yield (0, fsUtils_1.isDirectory)(fullPath)) {
                folders.push(config_1.ROOT_PATH ? fullPath.slice(config_1.ROOT_PATH.length + 1) : fullPath);
            }
        }
        return folders;
    });
}
exports.getAllFolders = getAllFolders;
function getAllXanoscriptFiles(folderPath) {
    return __awaiter(this, void 0, void 0, function* () {
        const files = [];
        function readDirectory(directory) {
            return __awaiter(this, void 0, void 0, function* () {
                const items = yield (0, fsUtils_1.readdir)(directory);
                for (const item of items) {
                    const fullPath = (0, path_1.join)(directory, item);
                    if (yield (0, fsUtils_1.isDirectory)(fullPath)) {
                        yield readDirectory(fullPath);
                    }
                    else if (fullPath.endsWith(".xs")) {
                        // remove the ROOT_PATH from the path
                        files.push(fullPath.slice(config_1.ROOT_PATH.length + 1));
                    }
                }
            });
        }
        // ensure the folder exists
        try {
            yield (0, fsUtils_1.fileExists)(folderPath);
        }
        catch (_a) {
            // create the folder if it doesn't exist
            yield (0, fsUtils_1.createDirectory)(folderPath);
            console.info(`Folder did not exist ${folderPath}, created`);
            return files;
        }
        yield readDirectory(folderPath);
        return files;
    });
}
exports.getAllXanoscriptFiles = getAllXanoscriptFiles;
//# sourceMappingURL=init.js.map