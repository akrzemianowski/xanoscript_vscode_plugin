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
exports.createTaskCmd = void 0;
const vscode = require("vscode");
const openXanoscriptEditor_1 = require("./openXanoscriptEditor");
const config_1 = require("../config");
const path_1 = require("path");
const lodash_1 = require("lodash");
const registry_1 = require("../registry/registry");
const changesTreeDataProvider_1 = require("../view/changes/changesTreeDataProvider");
/**
 * Generate a date in the format expected by our tasks
 * @returns
 */
function getFormattedDateUTC() {
    const now = new Date();
    const pad = (n) => n.toString().padStart(2, "0");
    return (now.getUTCFullYear() +
        "-" +
        pad(now.getUTCMonth() + 1) +
        "-" +
        pad(now.getUTCDate()) +
        " " +
        pad(now.getUTCHours()) +
        ":" +
        pad(now.getUTCMinutes()) +
        ":" +
        pad(now.getUTCSeconds()) +
        "+0000");
}
function createTaskCmd() {
    return __awaiter(this, void 0, void 0, function* () {
        let name = yield vscode.window.showInputBox({
            prompt: "Enter the task name",
            placeHolder: "e.g., send_email",
        });
        if (!name) {
            vscode.window.showErrorMessage("Task name is required");
            return;
        }
        const frequencies = [
            { label: "every minute", value: 60 },
            { label: "every 5 minutes", value: 300 },
            { label: "every 30 minutes", value: 1800 },
            { label: "every hour", value: 3600 },
            { label: "every day", value: 86400 },
            { label: "every week", value: 604800 },
        ];
        const frequency = yield vscode.window.showQuickPick(frequencies, {
            placeHolder: "Select the task frequency",
        });
        if (!frequency) {
            vscode.window.showErrorMessage("Task frequency is required");
            return;
        }
        name = name.replace(/([^a-zA-Z0-9/]+)/g, "_");
        const taskContent = `task "${name}" {
  active = false
  stack {
    debug.log {
      value = "This task runs ${frequency.label}"
    }
  }
  
  schedule {
    events = [
      {starts_on: ${getFormattedDateUTC()}, freq: ${frequency.value}}
    ]
  }
}`;
        try {
            const uri = vscode.Uri.file((0, path_1.join)(config_1.ROOT_PATH, config_1.config.paths.tasks, `${(0, lodash_1.snakeCase)(name)}.xs`));
            // check if the file exist
            const fileStat = yield vscode.workspace.fs.stat(uri).then((stat) => stat, () => null);
            if (fileStat) {
                vscode.window.showErrorMessage("A file with the same name already exists");
                return;
            }
            // create the file
            yield vscode.workspace.fs.writeFile(uri, Buffer.from(taskContent));
            (0, openXanoscriptEditor_1.openXanoscriptUri)(uri);
            vscode.window.showInformationMessage(`Task ${name} created successfully`);
            yield (0, registry_1.scanRegistry)([uri.path.slice(config_1.ROOT_PATH.length + 1)]);
            changesTreeDataProvider_1.changesProvider.refresh();
        }
        catch (_a) {
            vscode.window.showErrorMessage("Failed to create task");
            return;
        }
    });
}
exports.createTaskCmd = createTaskCmd;
//# sourceMappingURL=createTask.js.map