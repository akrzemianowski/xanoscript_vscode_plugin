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
exports.createRealtimeChannelCmd = void 0;
const vscode = require("vscode");
const openXanoscriptEditor_1 = require("./openXanoscriptEditor");
const config_1 = require("../config");
const path_1 = require("path");
const lodash_1 = require("lodash");
const registry_1 = require("../registry/registry");
const changesTreeDataProvider_1 = require("../view/changes/changesTreeDataProvider");
function createRealtimeChannelCmd() {
    return __awaiter(this, void 0, void 0, function* () {
        let name = yield vscode.window.showInputBox({
            prompt: "Enter the realtime channel name",
            placeHolder: "e.g., chat_room",
        });
        if (!name) {
            vscode.window.showErrorMessage("Realtime channel name is required");
            return;
        }
        const publicMessagingChoice = yield vscode.window.showQuickPick([
            {
                label: "Yes",
                description: "Enable public messaging",
                value: true,
            },
            {
                label: "No",
                description: "Disable public messaging",
                value: false,
            },
        ], {
            placeHolder: "Enable public messaging?",
            title: "Public Messaging",
        });
        if (!publicMessagingChoice) {
            vscode.window.showErrorMessage("Realtime channel creation canceled");
            return;
        }
        const privateMessagingChoice = yield vscode.window.showQuickPick([
            {
                label: "Yes",
                description: "Enable private messaging",
                value: true,
            },
            {
                label: "No",
                description: "Disable private messaging",
                value: false,
            },
        ], {
            placeHolder: "Enable private messaging?",
            title: "Private Messaging",
        });
        if (!privateMessagingChoice) {
            vscode.window.showErrorMessage("Realtime channel creation canceled");
            return;
        }
        name = name.replace(/([^a-zA-Z0-9/]+)/g, "_");
        const channelContent = `realtime_channel ${name} {
  public_messaging = {active: ${publicMessagingChoice.value}}
  private_messaging = {active: ${privateMessagingChoice.value}}
  settings = {
    anonymous_clients: false
    nested_channels  : false
    message_history  : 0
    auth_channel     : false
    presence         : false
  }
}`;
        try {
            const uri = vscode.Uri.file((0, path_1.join)(config_1.ROOT_PATH, config_1.config.paths.realtimeChannels, `${(0, lodash_1.snakeCase)(name)}.xs`));
            // check if the file exist
            const fileStat = yield vscode.workspace.fs.stat(uri).then((stat) => stat, () => null);
            if (fileStat) {
                vscode.window.showErrorMessage("A file with the same name already exists");
                return;
            }
            // create the file
            yield vscode.workspace.fs.writeFile(uri, Buffer.from(channelContent));
            (0, openXanoscriptEditor_1.openXanoscriptUri)(uri);
            vscode.window.showInformationMessage(`Realtime channel ${name} created successfully`);
            yield (0, registry_1.scanRegistry)([uri.path.slice(config_1.ROOT_PATH.length + 1)]);
            changesTreeDataProvider_1.changesProvider.refresh();
        }
        catch (_a) {
            vscode.window.showErrorMessage("Failed to create realtime channel");
            return;
        }
    });
}
exports.createRealtimeChannelCmd = createRealtimeChannelCmd;
//# sourceMappingURL=createRealtimeChannel.js.map