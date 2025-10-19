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
const vscode = require("vscode");
const path_1 = require("path");
const mocha_1 = require("mocha");
const assert = require("assert");
const sinon = require("sinon");
const config_1 = require("../config");
const pull_1 = require("./pull");
const fsUtils_1 = require("../registry/fsUtils");
const registry_1 = require("./registry");
const types_1 = require("./types");
(0, mocha_1.suite)("pull", () => {
    // login mocks
    let loginModule;
    let assertUserIsAuthenticatedStub;
    // push mocks
    let pushModule;
    let isPushingStub;
    // vscode mocks
    let vscodeModule;
    let showErrorMessageStub;
    // fsUtils mocks
    let fsUtilsModule;
    let deleteFileStub;
    let createDirectoryStub;
    let writeFileStub;
    let readFileStub;
    let fileStatStub;
    // registry mocks
    let registryModule;
    let getRegistryStub;
    let saveRegistryStub;
    // dbo mocks
    let dboModule;
    let fetchTablesStub;
    // workflow_test mocks
    let workflowTestModule;
    let fetchWorkflowTestsStub;
    // agents mocks
    let agentsModule;
    let fetchAgentsStub;
    // mcpServer mocks
    let mcpServerModule;
    let fetchMcpServersStub;
    // tableTrigger mocks
    let tableTriggerModule;
    let fetchTableTriggersStub;
    // customFunction mocks
    let customFunctionModule;
    let fetchCustomFunctionsStub;
    // task mocks
    let taskModule;
    let fetchTasksStub;
    // addOn mocks
    let addOnModule;
    let fetchAddOnsStub;
    // middleware mocks
    let middlewareModule;
    let fetchMiddlewaresStub;
    // agent trigger mocks
    let agentTriggerModule;
    let fetchAgentTriggersStub;
    // realtime mocks
    let realtimeModule;
    let fetchRealtimeChannelsStub;
    let fetchRealtimeTriggersStub;
    // api (endpoints and groups) mocks
    let apiModule;
    let fetchApiEndpointsStub;
    let fetchApiGroupsStub;
    (0, mocha_1.beforeEach)(() => __awaiter(void 0, void 0, void 0, function* () {
        // Stub the push module to ensure they are exclusive
        pushModule = yield Promise.resolve().then(() => require("./push"));
        isPushingStub = sinon.stub(pushModule, "isPushing");
        isPushingStub.returns(false);
        config_1.config.paths.apis = "apis";
        config_1.config.paths.tables = "tables";
        config_1.config.paths.functions = "functions";
        config_1.config.paths.tasks = "tasks";
        config_1.config.paths.workflowTests = "workflow_tests";
        config_1.config.paths.agents = "agents";
        config_1.config.paths.agentTriggers = "agents/triggers";
        config_1.config.paths.mcpServers = "mcp_servers";
        config_1.config.paths.tableTriggers = "tables/triggers";
        config_1.config.paths.addOns = "addons";
        config_1.config.paths.middlewares = "middlewares";
        config_1.config.paths.agentTriggers = "agent_triggers";
        config_1.config.paths.realtimeChannels = "realtime/channels";
        config_1.config.paths.realtimeTriggers = "realtime/triggers";
        // Stub the assertUserIsAuthenticated to ensure it's called and emulate
        // authentication
        loginModule = yield Promise.resolve().then(() => require("../commands/login"));
        assertUserIsAuthenticatedStub = sinon.stub(loginModule, "assertUserIsAuthenticated");
        assertUserIsAuthenticatedStub.returns(true);
        // Stub the vscode methods
        vscodeModule = yield Promise.resolve().then(() => require("vscode"));
        showErrorMessageStub = sinon.stub(vscodeModule.window, "showErrorMessage");
        showErrorMessageStub.returns(() => {
            return Promise.resolve(undefined);
        });
        // stub the fsUtils methods since you cannot stub the methods under
        // the vscode.workspace.fs object
        fsUtilsModule = yield Promise.resolve().then(() => require("../registry/fsUtils"));
        writeFileStub = sinon.stub(fsUtilsModule, "writeFile");
        writeFileStub.callsFake((path, content) => __awaiter(void 0, void 0, void 0, function* () {
            console.log(`-- writeFile called with path: ${path} (${path instanceof vscode.Uri}), content: ${content}`);
        }));
        // writeFileStub.returns(() => Promise.resolve());
        readFileStub = sinon.stub(fsUtilsModule, "readFile");
        readFileStub.callsFake((path) => __awaiter(void 0, void 0, void 0, function* () {
            console.log(`-- readFile called with path: ${path} (is Uri: ${path instanceof vscode.Uri})`);
            if (path === config_1.XANO_OBJECTS_PATH) {
                return "[]";
            }
            return "[]";
        }));
        deleteFileStub = sinon.stub(fsUtilsModule, "deleteFile");
        deleteFileStub.returns(() => Promise.resolve());
        createDirectoryStub = sinon.stub(fsUtilsModule, "createDirectory");
        createDirectoryStub.returns(() => Promise.resolve());
        fileStatStub = sinon.stub(fsUtilsModule, "stat");
        fileStatStub.returns(() => Promise.resolve({ type: vscode.FileType.File, ctime: 0 }));
        // Stub the registry methods (getRegistry and saveRegistry)
        registryModule = yield Promise.resolve().then(() => require("./registry"));
        getRegistryStub = sinon.stub(registryModule, "getRegistry");
        getRegistryStub.returns(Promise.resolve([]));
        saveRegistryStub = sinon.stub(registryModule, "saveRegistry");
        saveRegistryStub.returns(Promise.resolve([]));
        // Stub the dbo metadata fetching methods
        dboModule = yield Promise.resolve().then(() => require("../metadata/dbo"));
        fetchTablesStub = sinon.stub(dboModule, "fetchTables");
        fetchTablesStub.returns(Promise.resolve([]));
        // Stub the workflow_test metadata fetching methods
        workflowTestModule = yield Promise.resolve().then(() => require("../metadata/workflowTest"));
        fetchWorkflowTestsStub = sinon.stub(workflowTestModule, "fetchWorkflowTests");
        fetchWorkflowTestsStub.returns(Promise.resolve([]));
        // Stub the customFunction metadata fetching methods
        customFunctionModule = yield Promise.resolve().then(() => require("../metadata/customFunction"));
        fetchCustomFunctionsStub = sinon.stub(customFunctionModule, "fetchCustomFunctions");
        fetchCustomFunctionsStub.returns(Promise.resolve([]));
        // Stub the task metadata tasks fetching methods
        taskModule = yield Promise.resolve().then(() => require("../metadata/task"));
        fetchTasksStub = sinon.stub(taskModule, "fetchTasks");
        fetchTasksStub.returns(Promise.resolve([]));
        // Stub the api metadata API (endpoint and APIGroups) fetching methods
        apiModule = yield Promise.resolve().then(() => require("../metadata/api"));
        fetchApiEndpointsStub = sinon.stub(apiModule, "fetchApiEndpoints");
        fetchApiEndpointsStub.returns(Promise.resolve([]));
        fetchApiGroupsStub = sinon.stub(apiModule, "fetchApiGroups");
        fetchApiGroupsStub.returns(Promise.resolve([]));
        // Stub the agents metadata fetching methods
        agentsModule = yield Promise.resolve().then(() => require("../metadata/agent"));
        fetchAgentsStub = sinon.stub(agentsModule, "fetchAgents");
        fetchAgentsStub.returns(Promise.resolve([]));
        // Stub the agentTrigger metadata fetching methods
        agentTriggerModule = yield Promise.resolve().then(() => require("../metadata/agentTrigger"));
        fetchAgentTriggersStub = sinon.stub(agentTriggerModule, "fetchAgentTriggers");
        fetchAgentTriggersStub.returns(Promise.resolve([]));
        // stub the middleware metadata fetching methods
        middlewareModule = yield Promise.resolve().then(() => require("../metadata/middleware"));
        fetchMiddlewaresStub = sinon.stub(middlewareModule, "fetchMiddlewares");
        fetchMiddlewaresStub.returns(Promise.resolve([]));
        // Stub the mcpServer metadata fetching methods
        mcpServerModule = yield Promise.resolve().then(() => require("../metadata/mcpServer"));
        fetchMcpServersStub = sinon.stub(mcpServerModule, "fetchMcpServers");
        fetchMcpServersStub.returns(Promise.resolve([]));
        // Stub the tableTrigger metadata fetching methods
        tableTriggerModule = yield Promise.resolve().then(() => require("../metadata/tableTrigger"));
        fetchTableTriggersStub = sinon.stub(tableTriggerModule, "fetchTableTriggers");
        fetchTableTriggersStub.returns(Promise.resolve([]));
        // Stub the addOn metadata fetching methods
        addOnModule = yield Promise.resolve().then(() => require("../metadata/addon"));
        fetchAddOnsStub = sinon.stub(addOnModule, "fetchAddOns");
        fetchAddOnsStub.returns(Promise.resolve([]));
        // Stub the realtime metadata fetching methods
        realtimeModule = yield Promise.resolve().then(() => require("../metadata/realtime"));
        fetchRealtimeChannelsStub = sinon.stub(realtimeModule, "fetchRealtimeChannels");
        fetchRealtimeChannelsStub.returns(Promise.resolve([]));
        fetchRealtimeTriggersStub = sinon.stub(realtimeModule, "fetchRealtimeTriggers");
        fetchRealtimeTriggersStub.returns(Promise.resolve([]));
    }));
    (0, mocha_1.afterEach)(() => {
        sinon.restore();
    });
    (0, mocha_1.it)("should display an error message when is currently pushing", () => __awaiter(void 0, void 0, void 0, function* () {
        isPushingStub.returns(true);
        const tree = yield (0, pull_1.pull)();
        assert.deepEqual(tree, undefined);
        assert(isPushingStub.calledOnce);
        assert(assertUserIsAuthenticatedStub.calledOnce);
        assert(showErrorMessageStub.calledOnce);
    }));
    (0, mocha_1.it)("creates a table when a new one is pulled", () => __awaiter(void 0, void 0, void 0, function* () {
        const script = `table table1 {}`;
        const table = {
            id: 33,
            guid: "abfc-1234-efgh",
            name: "table1",
            description: "table1 description",
            updatedAt: 0,
            createdAt: 0,
            auth: false,
            xanoscript: { status: "ok", value: script },
        };
        fetchTablesStub.returns(Promise.resolve([table]));
        yield (0, registry_1.readRegistry)();
        yield (0, pull_1.pull)();
        sinon.assert.calledOnce(fetchTablesStub);
        // check that the table file was created
        sinon.assert.calledWith(writeFileStub, (0, path_1.join)(config_1.ROOT_PATH, config_1.config.paths.tables, "33_table1.xs"), script);
        // save the registry
        sinon.assert.calledWith(saveRegistryStub, [
            {
                id: 33,
                type: "table",
                path: "tables/33_table1.xs",
                status: "unchanged",
                staged: false,
                sha256: (0, fsUtils_1.getFileHash)(script),
                original: Buffer.from(script).toString("base64"),
            },
        ]);
    }));
    (0, mocha_1.it)("merges a table when a new one is pulled", () => __awaiter(void 0, void 0, void 0, function* () {
        const table = {
            id: 33,
            guid: "abfc-1234-efgh",
            name: "table1",
            description: "table1 description",
            updatedAt: 0,
            createdAt: 0,
            auth: false,
        };
        // remote changed the auth property
        const remote = `table table1 {
  auth = false

  schema {
    int id
    timestamp created_at?=now
  }
}`;
        const original = `table table1 {
  auth = true

  schema {
    int id
    timestamp created_at?=now
  }
}`;
        // local added a new name property
        const localFile = `table table1 {
  auth = true

  schema {
    int id
    timestamp created_at?=now
    text name
  }
}`;
        // once both versions are merged, the auth value and name property
        // should be reconciled
        const merged = `table table1 {
  auth = false

  schema {
    int id
    timestamp created_at?=now
    text name
  }
}`;
        // local registry
        const localRegistry = [
            {
                id: 33,
                type: "table",
                path: "tables/123_table1.xs",
                status: "changed",
                staged: false,
                sha256: (0, fsUtils_1.getFileHash)(original),
                original: Buffer.from(original).toString("base64"),
            },
        ];
        fetchTablesStub.returns(Promise.resolve([
            Object.assign(Object.assign({}, table), { xanoscript: { status: "ok", value: remote } }),
        ]));
        getRegistryStub.resolves(localRegistry);
        readFileStub.resolves(localFile);
        yield (0, pull_1.pull)();
        sinon.assert.calledOnce(fetchTablesStub);
        sinon.assert.calledWith(writeFileStub, (0, path_1.join)(config_1.ROOT_PATH, config_1.config.paths.tables, "123_table1.xs"), merged);
        // the registry is refreshed
        sinon.assert.calledWith(saveRegistryStub, [
            {
                id: 33,
                type: "table",
                path: "tables/123_table1.xs",
                status: "changed",
                staged: false,
                // the original now is the remote (so the local changes are still apparent)
                sha256: (0, fsUtils_1.getFileHash)(remote),
                original: Buffer.from(remote).toString("base64"),
            },
        ]);
    }));
    (0, mocha_1.it)("creates a function file with the correct path and filename", () => __awaiter(void 0, void 0, void 0, function* () {
        const script = `function functionName {
      input {
      }

      stack {
      }

      response {
      }
    }`;
        const func = {
            id: 123,
            guid: "abcd-1234-efgh",
            name: "folder1/folder2/functionName",
            description: "function description",
            updatedAt: 0,
            createdAt: 0,
            xanoscript: { status: "ok", value: script },
        };
        fetchCustomFunctionsStub.returns(Promise.resolve([func]));
        yield (0, registry_1.readRegistry)();
        yield (0, pull_1.pull)();
        sinon.assert.calledOnce(fetchCustomFunctionsStub);
        // Check that the function file was created with the correct path and filename
        sinon.assert.calledWith(writeFileStub, (0, path_1.join)(config_1.ROOT_PATH, config_1.config.paths.functions, "folder1/folder2", `${func.id}_functionName.xs`), script);
        // Save the registry with the correct path
        sinon.assert.calledWith(saveRegistryStub, [
            {
                id: 123,
                type: "function",
                path: "functions/folder1/folder2/123_functionName.xs",
                status: "unchanged",
                staged: false,
                sha256: (0, fsUtils_1.getFileHash)(script),
                original: Buffer.from(script).toString("base64"),
            },
        ]);
    }));
    (0, mocha_1.it)("creates a task when a new one is pulled", () => __awaiter(void 0, void 0, void 0, function* () {
        const script = `task taskName {}`;
        const task = {
            id: 42,
            guid: "task-1234-efgh",
            name: "taskName",
            description: "task description",
            datasource: "live",
            active: true,
            updatedAt: 0,
            createdAt: 0,
            xanoscript: { status: "ok", value: script },
        };
        fetchTasksStub.returns(Promise.resolve([task]));
        yield (0, registry_1.readRegistry)();
        yield (0, pull_1.pull)();
        sinon.assert.calledOnce(fetchTasksStub);
        // Check that the task file was created with the correct filename
        sinon.assert.calledWith(writeFileStub, (0, path_1.join)(config_1.ROOT_PATH, config_1.config.paths.tasks, `42_taskName.xs`), script);
        // Save the registry with the correct path
        sinon.assert.calledWith(saveRegistryStub, [
            {
                id: 42,
                type: "task",
                path: "tasks/42_taskName.xs",
                status: "unchanged",
                staged: false,
                sha256: (0, fsUtils_1.getFileHash)(script),
                original: Buffer.from(script).toString("base64"),
            },
        ]);
    }));
    (0, mocha_1.it)("marks a new api group as unchanged if it exists remotely", () => __awaiter(void 0, void 0, void 0, function* () {
        const script = `api_group apiGroupName {
  canonical = "foo-12-bar"
  description = "api group description"
}`;
        const apiGroup = {
            id: 42,
            name: "apiGroupName",
            description: "api group description",
            guid: "apiGroup-1234-efgh",
            canonical: "foo-12-bar",
            updatedAt: 0,
            createdAt: 0,
            xanoscript: {
                status: "ok",
                value: script,
            },
        };
        const localRegistry = [
            {
                id: 0,
                path: "apis/apiGroupName/api_group.xs",
                status: types_1.XanoStatus.NEW,
                type: "api_group",
                staged: false,
            },
        ];
        getRegistryStub.resolves(localRegistry);
        fetchApiGroupsStub.resolves([apiGroup]);
        readFileStub.returns(Promise.resolve(script));
        yield (0, registry_1.readRegistry)();
        yield (0, pull_1.pull)();
        sinon.assert.calledWith(saveRegistryStub, [
            {
                id: 42,
                path: "apis/apiGroupName/api_group.xs",
                status: types_1.XanoStatus.UNCHANGED,
                type: "api_group",
                staged: false,
                sha256: (0, fsUtils_1.getFileHash)(script),
                original: Buffer.from(script).toString("base64"),
            },
        ]);
    }));
    (0, mocha_1.it)("marks a new api group as changed if it exists remotely but is different locally", () => __awaiter(void 0, void 0, void 0, function* () {
        const script = `api_group apiGroupName {
  canonical = "foo-12-bar"
  description = "api group description"
}`;
        const localScript = `api_group apiGroupName {
  canonical = "foo-12-bar"
  description = "a different description"
}`;
        const apiGroup = {
            id: 42,
            name: "apiGroupName",
            description: "api group description",
            guid: "apiGroup-1234-efgh",
            canonical: "foo-12-bar",
            updatedAt: 0,
            createdAt: 0,
            xanoscript: {
                status: "ok",
                value: script,
            },
        };
        const localRegistry = [
            {
                id: 0,
                path: "apis/apiGroupName/api_group.xs",
                status: types_1.XanoStatus.NEW,
                type: "api_group",
                staged: false,
            },
        ];
        getRegistryStub.resolves(localRegistry);
        fetchApiGroupsStub.resolves([apiGroup]);
        readFileStub.returns(Promise.resolve(localScript));
        yield (0, registry_1.readRegistry)();
        yield (0, pull_1.pull)();
        sinon.assert.calledWith(saveRegistryStub, [
            {
                id: 42,
                path: "apis/apiGroupName/api_group.xs",
                status: types_1.XanoStatus.CHANGED,
                type: "api_group",
                staged: false,
                sha256: (0, fsUtils_1.getFileHash)(script),
                original: Buffer.from(script).toString("base64"),
            },
        ]);
    }));
    (0, mocha_1.it)("triggers a merge when a function has the same path as a remote one", () => __awaiter(void 0, void 0, void 0, function* () {
        const remote_script = `function folder1/folder2/functionName {
  input {
    text user_name filters=trim
  }

  stack {
    var some_variable {
      value = "with some value from remote"
    }
  }

  response {
    value = null
  }
}`;
        const func = {
            id: 123,
            guid: "abcd-1234-efgh",
            name: "folder1/folder2/functionName",
            description: "function description",
            updatedAt: 0,
            createdAt: 0,
            xanoscript: {
                status: "ok",
                value: remote_script,
            },
        };
        const local_script = `function folder1/folder2/functionName {
  input {
    text some_argument? filters=trim {
      description = "the local argument"
    }
    text user_name filters=trim
  }

  stack {
  }

  response {
    value = null
  }
}`;
        const localRegistry = [
            {
                id: 0,
                type: "function",
                path: "functions/folder1/folder2/functionName.xs",
                status: "new",
                staged: false,
                // sha256: getFileHash(local_script),
                // original: Buffer.from(local_script).toString("base64"),
            },
        ];
        getRegistryStub.resolves(localRegistry);
        fetchCustomFunctionsStub.returns(Promise.resolve([func]));
        readFileStub.returns(Promise.resolve(local_script));
        yield (0, registry_1.readRegistry)();
        yield (0, pull_1.pull)();
        sinon.assert.calledWith(saveRegistryStub, [
            {
                id: 123,
                type: "function",
                path: "functions/folder1/folder2/functionName.xs",
                status: "changed",
                staged: false,
                sha256: (0, fsUtils_1.getFileHash)(remote_script),
                original: Buffer.from(remote_script).toString("base64"),
            },
        ]);
    }));
    (0, mocha_1.it)("triggers a merge when a new api group has the same path as a remote one", () => __awaiter(void 0, void 0, void 0, function* () {
        const remote_script = `api_group apiGroupName {
  canonical = "foo-12-bar"
  description = "api group description"
}`;
        const apiGroup = {
            id: 42,
            name: "apiGroupName",
            description: "api group description",
            guid: "apiGroup-1234-efgh",
            canonical: "foo-12-bar",
            updatedAt: 0,
            createdAt: 0,
            xanoscript: {
                status: "ok",
                value: remote_script,
            },
        };
        const local_script = `api_group apiGroupName {
  canonical = "apiGroupName"
}`;
        const localRegistry = [
            {
                id: 0,
                type: "api_group",
                path: "apis/apiGroupName/api_group.xs",
                status: types_1.XanoStatus.NEW,
                staged: false,
            },
        ];
        getRegistryStub.resolves(localRegistry);
        fetchApiGroupsStub.returns(Promise.resolve([apiGroup]));
        readFileStub.returns(Promise.resolve(local_script));
        yield (0, registry_1.readRegistry)();
        yield (0, pull_1.pull)();
        // sinon.assert.calledOnce(readFileStub);
        sinon.assert.calledWith(saveRegistryStub, [
            {
                id: 42,
                type: "api_group",
                path: "apis/apiGroupName/api_group.xs",
                status: "changed",
                staged: false,
                sha256: (0, fsUtils_1.getFileHash)(remote_script),
                original: Buffer.from(remote_script).toString("base64"),
            },
        ]);
    }));
});
//# sourceMappingURL=pull.test.js.map