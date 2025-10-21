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
exports.selectBranchCmd = selectBranchCmd;
exports.selectBranch = selectBranch;
exports.getOrSelectBranch = getOrSelectBranch;
const vscode = require("vscode");
const workspace_1 = require("../metadata/workspace");
const changesTreeDataProvider_1 = require("../view/changes/changesTreeDataProvider");
const config_1 = require("../config");
const init_1 = require("../registry/init");
const pull_1 = require("../registry/pull");
function selectBranchCmd() {
    return __awaiter(this, void 0, void 0, function* () {
        if (!config_1.config.instanceName) {
            vscode.window.showErrorMessage("Please select a Xano instance");
            return;
        }
        if (!config_1.config.workspaceId) {
            vscode.window.showErrorMessage("Please select a Xano workspace");
            return;
        }
        try {
            const branch = yield selectBranch(config_1.config.instanceName, config_1.config.workspaceId);
            // close all editors for now: Should probably just try to reload all the files but
            // because we have different API Group per branch, it's easier to just close all editors
            yield vscode.commands.executeCommand("workbench.action.closeAllEditors");
            config_1.config.branch = branch.label;
            vscode.window.showInformationMessage(`Switching to branch ${branch.label}`);
            changesTreeDataProvider_1.changesProvider.refresh();
        }
        catch (error) {
            vscode.window.showErrorMessage(`Branch selection is required: ${error}`);
        }
    });
}
function selectBranch(instanceName, workspaceId) {
    return __awaiter(this, void 0, void 0, function* () {
        // Fetch branches but filter out backup branches and the current branch
        const branches = (yield (0, workspace_1.fetchWorkspaceBranches)(instanceName, workspaceId)).filter((branch) => !branch.backup);
        const options = branches.map((branch) => ({
            kind: vscode.QuickPickItemKind.Default,
            label: `${branch.label}`,
            description: branch.live ? "Live branch" : "",
            id: branch.label,
            data: branch,
            picked: branch.label === config_1.config.branch,
        }));
        const selectedBranch = yield vscode.window.showQuickPick(options, {
            placeHolder: "Select the branch to switch to",
            title: "Select Xano Branch",
        });
        if (!selectedBranch) {
            throw new Error("No branch selected");
        }
        return selectedBranch.data;
    });
}
/**
 * Attempt to use the config branch name to fetch the branch and
 * fallback on asking the user to select a branch.
 * @param instanceName
 * @param workspaceId
 * @returns
 */
function getOrSelectBranch(instanceName, workspaceId) {
    return __awaiter(this, void 0, void 0, function* () {
        let branch;
        if (config_1.config.branch) {
            try {
                branch = yield (0, workspace_1.fetchWorkspaceBranch)(instanceName, workspaceId, config_1.config.branch);
            }
            catch (error) {
                console.error("Error fetching branch:", error);
                branch = yield selectBranch(instanceName, workspaceId);
            }
        }
        else {
            branch = yield selectBranch(instanceName, workspaceId);
        }
        if (branch) {
            config_1.config.branch = branch.label;
            if (config_1.config.hasUnsavedChanges) {
                // DONT ASK TO SAVE CONFIG, JUST SAVE IT
                // const saveConfig = await vscode.window.showInformationMessage(
                //   `Do you want to save update your configuration?`,
                //   { modal: true },
                //   "Save Configuration",
                //   "No"
                // );
                // if (saveConfig === "Save Configuration") {
                //   await config.save();
                // }
                yield config_1.config.save();
                // ask users if they want to pull latest changes
                const pullChanges = yield vscode.window.showInformationMessage(`Do you want to pull the latest changes from the branch?`, { modal: true }, "Pull Changes", "No");
                if (pullChanges === "Pull Changes") {
                    yield (0, pull_1.pull)();
                    yield (0, init_1.syncRegistry)();
                }
                changesTreeDataProvider_1.changesProvider.refresh();
                // ask users if they want to setup AI Agent documentation files
                const setupAgentInstructions = yield vscode.window.showInformationMessage(`Do you want to setup AI Agent documentation files?`, { modal: true }, "Setup AI Agent Instructions", "No");
                if (setupAgentInstructions === "Setup AI Agent Instructions") {
                    yield vscode.commands.executeCommand("xanoscript.setupAgentInstructions");
                }
            }
        }
    });
}
//# sourceMappingURL=selectBranch.js.map