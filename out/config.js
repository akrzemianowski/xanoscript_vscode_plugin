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
exports.config = exports.DEFAULT_XANO_CONFIG = exports.XANO_CONFIG_PATH = exports.XANO_STASH_PATH = exports.XANO_OBJECTS_PATH = exports.XANO_FOLDER_PATH = exports.ROOT_PATH = void 0;
const fs_1 = require("fs");
const path_1 = require("path");
const vscode = require("vscode");
const workspaceFolders = vscode.workspace.workspaceFolders;
exports.ROOT_PATH = workspaceFolders && workspaceFolders.length
    ? workspaceFolders[0].uri.fsPath
    : "";
exports.XANO_FOLDER_PATH = (0, path_1.join)(exports.ROOT_PATH, ".xano");
exports.XANO_OBJECTS_PATH = (0, path_1.join)(exports.XANO_FOLDER_PATH, "objects.json");
exports.XANO_STASH_PATH = (0, path_1.join)(exports.XANO_FOLDER_PATH, "stash.json");
exports.XANO_CONFIG_PATH = (0, path_1.join)(exports.XANO_FOLDER_PATH, "config.json");
exports.DEFAULT_XANO_CONFIG = {
    instanceName: "",
    workspaceId: 0,
    branch: "",
    paths: {
        functions: "functions",
        tables: "tables",
        apis: "apis",
        tasks: "tasks",
        tools: "tools",
        workflowTests: "workflow_tests",
        agents: "agents",
        agentTriggers: "agents/triggers",
        mcpServers: "mcp_servers",
        mcpServerTriggers: "mcp_servers/triggers",
        tableTriggers: "tables/triggers",
        addOns: "addons",
        middlewares: "middlewares",
        realtimeChannels: "realtime",
        realtimeTriggers: "realtime/triggers",
    },
};
class XanoConfig {
    constructor() {
        this.__config = Object.assign({}, exports.DEFAULT_XANO_CONFIG);
        this.__change_callback = [];
        this.hasUnsavedChanges = false;
        this.load();
    }
    load() {
        try {
            const configRaw = (0, fs_1.readFileSync)(exports.XANO_CONFIG_PATH, "utf8");
            const parsedConfig = JSON.parse(configRaw);
            this.__config = Object.assign(Object.assign(Object.assign({}, exports.DEFAULT_XANO_CONFIG), parsedConfig), { paths: Object.assign(Object.assign({}, exports.DEFAULT_XANO_CONFIG.paths), (parsedConfig.paths || {})) });
        }
        catch (_a) {
            console.error(`Could not read Xano config from ${exports.XANO_CONFIG_PATH}, using default config`);
        }
    }
    onChange(callback, fire = false) {
        this.__change_callback.push(callback);
        if (fire) {
            this.safeFireCallback(callback);
        }
        return new vscode.Disposable(() => {
            this.__change_callback = this.__change_callback.filter((cb) => cb !== callback);
        });
    }
    fireChange() {
        this.__change_callback.forEach((callback) => this.safeFireCallback(callback));
    }
    safeFireCallback(callback) {
        try {
            callback(this);
        }
        catch (error) {
            console.error("Error in config change callback", error);
        }
    }
    save() {
        return __awaiter(this, void 0, void 0, function* () {
            // create .xano folder if it doesn't exist
            (0, fs_1.mkdirSync)(exports.XANO_FOLDER_PATH, { recursive: true });
            (0, fs_1.writeFileSync)(exports.XANO_CONFIG_PATH, Buffer.from(JSON.stringify({
                instanceName: this.__config.instanceName,
                workspaceId: this.__config.workspaceId,
                branch: this.__config.branch,
                paths: {
                    functions: this.__config.paths.functions,
                    tables: this.__config.paths.tables,
                    apis: this.__config.paths.apis,
                    tasks: this.__config.paths.tasks,
                },
            }, null, 2)));
            this.hasUnsavedChanges = false;
        });
    }
    // getter and setter for instance
    get instanceName() {
        return this.__config.instanceName;
    }
    set instanceName(instanceName) {
        // changing the instance name resets the workspace and branch
        if (instanceName !== this.__config.instanceName) {
            console.log("setting instanceName", instanceName);
            this.__config.workspaceId = exports.DEFAULT_XANO_CONFIG.workspaceId;
            this.__config.branch = exports.DEFAULT_XANO_CONFIG.branch;
            this.__config.instanceName = instanceName;
            this.hasUnsavedChanges = true;
            this.fireChange();
        }
    }
    // detects if the provided path matches one of the paths managed by the extension
    isXanoManagedPath(relativePath) {
        return Object.values(this.__config.paths).some((p) => relativePath.startsWith(p + "/"));
    }
    // getter and setter for workspace
    get workspaceId() {
        return this.__config.workspaceId;
    }
    set workspaceId(workspaceId) {
        // changing the workspace name resets the branch
        if (workspaceId !== this.__config.workspaceId) {
            console.log("setting workspaceId", workspaceId);
            this.__config.branch = "";
            this.__config.workspaceId = workspaceId;
            this.hasUnsavedChanges = true;
        }
        this.fireChange();
    }
    // getter and setter for branch
    get branch() {
        return this.__config.branch;
    }
    set branch(branch) {
        if (branch !== this.__config.branch) {
            console.log("setting branch", branch);
            this.__config.branch = branch;
            this.hasUnsavedChanges = true;
            this.fireChange();
        }
    }
    // getter and setter for path
    get paths() {
        return this.__config.paths;
    }
    set paths(path) {
        this.__config.paths = path;
        this.fireChange();
    }
    // getter and setter for isActive
    get isReady() {
        return Boolean(this.__config.workspaceId &&
            this.__config.instanceName &&
            this.__config.branch);
    }
}
exports.config = new XanoConfig();
//# sourceMappingURL=config.js.map