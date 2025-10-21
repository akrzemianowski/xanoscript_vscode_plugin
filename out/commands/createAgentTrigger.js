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
exports.createAgentTriggerCmd = createAgentTriggerCmd;
const vscode = require("vscode");
const openXanoscriptEditor_1 = require("./openXanoscriptEditor");
const config_1 = require("../config");
const path_1 = require("path");
const lodash_1 = require("lodash");
const registry_1 = require("../registry/registry");
const changesTreeDataProvider_1 = require("../view/changes/changesTreeDataProvider");
function createAgentTriggerCmd() {
    return __awaiter(this, void 0, void 0, function* () {
        const registryIndex = yield (0, registry_1.getRegistryIndex)();
        const agents = registryIndex["agent"] || [];
        if (agents.length === 0) {
            vscode.window.showErrorMessage("No agents to associate with. Please create an agent first.");
            return;
        }
        const agent = yield vscode.window.showQuickPick(agents.map((agent) => ({
            label: agent.name,
        })), {
            placeHolder: "Select the agent to associate with",
        });
        if (!agent) {
            vscode.window.showErrorMessage("No agent selected");
            return;
        }
        let name = yield vscode.window.showInputBox({
            prompt: "Enter the agent trigger name",
            placeHolder: "e.g., user_signup_trigger",
            value: `${agent.label}_trigger`,
        });
        if (!name) {
            vscode.window.showErrorMessage("Agent trigger name is required");
            return;
        }
        name = name.replace(/([^a-zA-Z0-9/]+)/g, "_");
        const agentTriggerContent = `agent_trigger "${name}" {
  agent = "${agent.label}"
  
  input {
    json payload
  }
  
  stack {
  }

  response = null
}`;
        try {
            const uri = vscode.Uri.file((0, path_1.join)(config_1.ROOT_PATH, config_1.config.paths.agentTriggers, `${(0, lodash_1.snakeCase)(name)}.xs`));
            // check if the file exist
            const fileStat = yield vscode.workspace.fs.stat(uri).then((stat) => stat, () => null);
            if (fileStat) {
                vscode.window.showErrorMessage("A file with the same name already exists");
                return;
            }
            // create the file
            yield vscode.workspace.fs.writeFile(uri, Buffer.from(agentTriggerContent));
            (0, openXanoscriptEditor_1.openXanoscriptUri)(uri);
            vscode.window.showInformationMessage(`Agent trigger ${name} created successfully`);
            yield (0, registry_1.scanRegistry)([uri.path.slice(config_1.ROOT_PATH.length + 1)]);
            changesTreeDataProvider_1.changesProvider.refresh();
        }
        catch (_a) {
            vscode.window.showErrorMessage("Failed to create agent trigger");
            return;
        }
    });
}
//# sourceMappingURL=createAgentTrigger.js.map