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
exports.getOrSelectWorkspace = exports.selectWorkspace = exports.selectWorkspaceCmd = void 0;
const vscode = require("vscode");
const workspace_1 = require("../metadata/workspace");
const lodash_1 = require("lodash");
const config_1 = require("../config");
const registerState_1 = require("../registerState");
const selectBranch_1 = require("./selectBranch");
function selectWorkspaceCmd() {
    return __awaiter(this, void 0, void 0, function* () {
        if (!config_1.config.instanceName) {
            vscode.window.showErrorMessage("Please select a Xano instance");
            return;
        }
        try {
            const workspace = yield selectWorkspace(config_1.config.instanceName);
            config_1.config.workspaceId = workspace.id;
            registerState_1.uiState.workspace = workspace.name;
            yield (0, selectBranch_1.getOrSelectBranch)(config_1.config.instanceName, workspace.id);
        }
        catch (error) {
            vscode.window.showErrorMessage(`Workspace selection is required: ${error}`);
        }
    });
}
exports.selectWorkspaceCmd = selectWorkspaceCmd;
function selectWorkspace(instanceName) {
    return __awaiter(this, void 0, void 0, function* () {
        // index each workspace with the ID: Name so we can retrieve
        // the complete workspace object after selection
        const workspaces = (0, lodash_1.keyBy)(yield (0, workspace_1.fetchInstanceWorkspaces)(instanceName), (workspace) => `${workspace.name} (#${workspace.id})`);
        const workspaceSelected = yield vscode.window.showQuickPick(Object.keys(workspaces), {
            placeHolder: "Select the workspace to switch to",
        });
        if (!workspaceSelected) {
            throw new Error("No workspace selected");
        }
        return workspaces[workspaceSelected];
    });
}
exports.selectWorkspace = selectWorkspace;
/**
 * Attempt to use the config workspace ID to fetch the workspace and
 * fallback on asking the user to select a workspace.
 * @param instanceName
 * @returns
 */
function getOrSelectWorkspace(instanceName) {
    return __awaiter(this, void 0, void 0, function* () {
        let workspace;
        if (config_1.config.workspaceId) {
            try {
                workspace = yield (0, workspace_1.fetchInstanceWorkspace)(instanceName, config_1.config.workspaceId);
            }
            catch (error) {
                console.error("Error fetching workspace:", error);
                workspace = yield selectWorkspace(instanceName);
            }
        }
        else {
            workspace = yield selectWorkspace(instanceName);
        }
        if (workspace) {
            registerState_1.uiState.workspace = workspace.name;
            config_1.config.workspaceId = workspace.id;
            yield (0, selectBranch_1.getOrSelectBranch)(instanceName, workspace.id);
        }
    });
}
exports.getOrSelectWorkspace = getOrSelectWorkspace;
//# sourceMappingURL=selectWorkspace.js.map