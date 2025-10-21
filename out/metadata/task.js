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
exports.fetchTask = fetchTask;
exports.updateTaskScript = updateTaskScript;
exports.activateTask = activateTask;
exports.fetchTasks = fetchTasks;
exports.createTaskFromXs = createTaskFromXs;
exports.createTask = createTask;
exports.deleteTask = deleteTask;
const request_1 = require("./request");
const config_1 = require("../config");
const vscode = require("vscode");
/**
 * Return the Xanoscript version of a given Task within your workspace.
 *
 * @param instanceName unique name of the instance abfc-1234-efgh
 * @param workspaceId the workspace ID within the instance
 * @param taskId the task ID to fetch the Xanoscript from
 * @returns
 */
function fetchTask(instanceName, workspaceId, taskId) {
    const vsconfig = vscode.workspace.getConfiguration("xanoscript");
    const draftMode = vsconfig.get("draftMode", false);
    const queryParams = new URLSearchParams();
    queryParams.set("include_draft", draftMode ? "true" : "false");
    queryParams.set("include_xanoscript", "true");
    return (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/task/${taskId}?${queryParams.toString()}`);
}
/**
 * Update the Xanoscript version of a given Task within your workspace.
 *
 * @param instanceName unique name of the instance abfc-1234-efgh
 * @param workspaceId the workspace ID within the instance
 * @param taskId the task ID to fetch the Xanoscript from
 * @param script the new Xanoscript to update the task with
 */
function updateTaskScript(instanceName, workspaceId, taskId, script) {
    return __awaiter(this, void 0, void 0, function* () {
        const vsconfig = vscode.workspace.getConfiguration("xanoscript");
        const draftMode = vsconfig.get("draftMode", false);
        const queryParams = new URLSearchParams();
        queryParams.set("publish", draftMode ? "false" : "true");
        queryParams.set("include_draft", draftMode ? "true" : "false");
        queryParams.set("include_xanoscript", "true");
        return (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/task/${taskId}?${queryParams.toString()}`, {
            method: "PUT",
            body: script,
            headers: {
                "Content-Type": "text/x-xanoscript",
            },
        });
    });
}
/**
 * Update the metadata of a given Task within your workspace.
 *
 * @param instanceName unique name of the instance abfc-1234-efgh
 * @param workspaceId the workspace ID within the instance
 * @param taskId the task ID to fetch the Xanoscript from
 * @param script the new Xanoscript to update the task with
 * @returns
 */
function activateTask(instanceName, workspaceId, taskId, active) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/task/${taskId}/activate`, {
            method: "PUT",
            body: JSON.stringify({ type: "xs", active }),
        });
    });
}
/**
 * Fetch the list of tasks within your workspace.
 *
 * @param instanceName unique name of the instance abfc-1234-efgh
 * @param workspaceId the workspace ID within the instance
 * @returns list of task objects
 */
function fetchTasks(instanceName, workspaceId) {
    return __awaiter(this, void 0, void 0, function* () {
        let nextPage = 1;
        const tasks = [];
        const vsconfig = vscode.workspace.getConfiguration("xanoscript");
        const draftMode = vsconfig.get("draftMode", false);
        const queryParams = new URLSearchParams();
        queryParams.set("include_draft", draftMode ? "true" : "false");
        queryParams.set("per_page", "20");
        queryParams.set("branch", encodeURIComponent(config_1.config.branch));
        queryParams.set("include_xanoscript", "true");
        while (nextPage) {
            queryParams.set("page", nextPage.toString());
            const response = yield (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/task?${queryParams.toString()}`);
            tasks.push(...response.items);
            nextPage = response.nextPage;
        }
        return tasks;
    });
}
/**
 * Create a new task ysing XanoScript
 * @param instanceName unique name of the instance abfc-1234-efgh
 * @param workspaceId the workspace ID within the instance
 * @param script the XanoScript to create the task with
 */
function createTaskFromXs(instanceName, workspaceId, script) {
    return __awaiter(this, void 0, void 0, function* () {
        const queryParams = new URLSearchParams();
        queryParams.set("branch", config_1.config.branch);
        queryParams.set("include_xanoscript", "true");
        return (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/task?${queryParams.toString()}`, {
            method: "POST",
            body: script,
            headers: {
                "Content-Type": "text/x-xanoscript",
            },
        });
    });
}
/**
 * Create a new Task within your workspace.
 * @param instanceName unique name of the instance abfc-1234-efgh
 * @param workspaceId the workspace ID within the instance
 * @param name the name of the task
 * @param description the description of the task
 */
function createTask(instanceName, workspaceId, name) {
    return __awaiter(this, void 0, void 0, function* () {
        const queryParams = new URLSearchParams();
        queryParams.set("branch", config_1.config.branch);
        queryParams.set("include_xanoscript", "true");
        // name should start with a letter and contain only letters, numbers, and underscores
        if (!/^[a-zA-Z][a-zA-Z0-9_]*$/.test(name)) {
            throw new Error("Task name must start with a letter and contain only letters, numbers, and underscores");
        }
        const script = `task ${name} {
  stack {
  }
  
  schedule {
    events = []
  }
}`;
        return (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/task?${queryParams.toString()}`, {
            method: "POST",
            body: script,
            headers: {
                "Content-Type": "text/x-xanoscript",
            },
        });
    });
}
/**
 * Delete a task within your workspace.
 * @param instanceName unique name of the instance abfc-1234-efgh
 * @param workspaceId the workspace ID within the instance
 * @param taskId the task ID to delete
 */
function deleteTask(instanceName, workspaceId, taskId) {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/task/${taskId}`, {
            method: "DELETE",
        });
    });
}
//# sourceMappingURL=task.js.map