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
exports.createRealtimeTriggerCmd = createRealtimeTriggerCmd;
const vscode = require("vscode");
const openXanoscriptEditor_1 = require("./openXanoscriptEditor");
const config_1 = require("../config");
const path_1 = require("path");
const lodash_1 = require("lodash");
const registry_1 = require("../registry/registry");
const changesTreeDataProvider_1 = require("../view/changes/changesTreeDataProvider");
function createRealtimeTriggerCmd() {
    return __awaiter(this, void 0, void 0, function* () {
        let name = yield vscode.window.showInputBox({
            prompt: "Enter the realtime trigger name",
            placeHolder: "e.g., message_handler",
        });
        if (!name) {
            vscode.window.showErrorMessage("Realtime trigger name is required");
            return;
        }
        let channelName = yield vscode.window.showInputBox({
            prompt: "Enter the channel name this trigger will listen to",
            placeHolder: "e.g., chat_room",
        });
        if (!channelName) {
            vscode.window.showErrorMessage("Channel name is required");
            return;
        }
        const actionChoices = [
            {
                label: "message",
                description: "Trigger on message events",
                value: "message",
            },
            {
                label: "join",
                description: "Trigger on join events",
                value: "join",
            },
            {
                label: "connection",
                description: "Trigger on connection events",
                value: "connection",
            },
        ];
        const actionChoice = yield vscode.window.showQuickPick(actionChoices, {
            placeHolder: "Select the action this trigger will handle",
            title: "Trigger Action",
        });
        if (!actionChoice) {
            vscode.window.showErrorMessage("Realtime trigger creation canceled");
            return;
        }
        name = name.replace(/([^a-zA-Z0-9/]+)/g, "_");
        channelName = channelName.replace(/([^a-zA-Z0-9/]+)/g, "_");
        const triggerContent = `realtime_trigger ${name} {
  channel = "${channelName}"
  input {
    enum action {
      values = ["message", "join", "connection"]
    }
    text channel
    object client {
      schema {
        json extras
        object permissions {
          schema {
            int dbo_id
            text row_id
          }
        }
      }
    }
    object options {
      schema {
        bool authenticated
        text channel
      }
    }
    json payload
  }
  stack {
    var $message {
      value = "Handle ${actionChoice.value} event"
    }
    debug.log {
      value = $message
    }
  }
  actions = {${actionChoice.value}: true}
}`;
        try {
            const uri = vscode.Uri.file((0, path_1.join)(config_1.ROOT_PATH, config_1.config.paths.realtimeTriggers, `${(0, lodash_1.snakeCase)(name)}.xs`));
            // check if the file exist
            const fileStat = yield vscode.workspace.fs.stat(uri).then((stat) => stat, () => null);
            if (fileStat) {
                vscode.window.showErrorMessage("A file with the same name already exists");
                return;
            }
            // create the file
            yield vscode.workspace.fs.writeFile(uri, Buffer.from(triggerContent));
            (0, openXanoscriptEditor_1.openXanoscriptUri)(uri);
            vscode.window.showInformationMessage(`Realtime trigger ${name} created successfully`);
            yield (0, registry_1.scanRegistry)([uri.path.slice(config_1.ROOT_PATH.length + 1)]);
            changesTreeDataProvider_1.changesProvider.refresh();
        }
        catch (_a) {
            vscode.window.showErrorMessage("Failed to create realtime trigger");
            return;
        }
    });
}
//# sourceMappingURL=createRealtimeTrigger.js.map