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
exports.getOrSelectInstance = exports.selectInstance = exports.selectInstanceCmd = void 0;
const vscode = require("vscode");
const lodash_1 = require("lodash");
const workspace_1 = require("../metadata/workspace");
const config_1 = require("../config");
const selectWorkspace_1 = require("./selectWorkspace");
const registerState_1 = require("../registerState");
const assertHasWorkspace_1 = require("./assertHasWorkspace");
function selectInstanceCmd() {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, assertHasWorkspace_1.assertHasWorkspace)();
        try {
            const instance = yield selectInstance();
            // proceed with the workspace selection
            if (instance) {
                registerState_1.uiState.instance = instance.name;
                registerState_1.uiState.instanceName = instance.display;
                config_1.config.instanceName = instance.name;
                yield (0, selectWorkspace_1.getOrSelectWorkspace)(instance.name);
            }
            vscode.commands.executeCommand("xanoscript.selectWorkspace");
        }
        catch (error) {
            vscode.window.showErrorMessage(`Instance selection is required: ${error}`);
        }
    });
}
exports.selectInstanceCmd = selectInstanceCmd;
function selectInstance() {
    return __awaiter(this, void 0, void 0, function* () {
        const instances = (0, lodash_1.keyBy)(yield (0, workspace_1.fetchInstances)(), (instance) => `${instance.display} (${instance.name})`);
        const instanceSelected = yield vscode.window.showQuickPick(Object.keys(instances), {
            placeHolder: "Select the instance to switch to",
        });
        if (!instanceSelected) {
            throw new Error("No instance selected");
        }
        return instances[instanceSelected];
    });
}
exports.selectInstance = selectInstance;
/**
 * Attempt to use the config instance name to fetch the instance and
 * fallback on asking the user to select an instance.
 *
 * @returns
 */
function getOrSelectInstance() {
    return __awaiter(this, void 0, void 0, function* () {
        let instance;
        if (config_1.config.instanceName) {
            try {
                instance = yield (0, workspace_1.fetchInstance)(config_1.config.instanceName);
            }
            catch (error) {
                instance = yield selectInstance();
                console.error("Error fetching instance:", error);
            }
        }
        else {
            instance = yield selectInstance();
        }
        // then proceed with the workspace selection
        if (instance) {
            registerState_1.uiState.instance = instance.name;
            registerState_1.uiState.instanceName = instance.display;
            config_1.config.instanceName = instance.name;
            yield (0, selectWorkspace_1.getOrSelectWorkspace)(instance.name);
        }
    });
}
exports.getOrSelectInstance = getOrSelectInstance;
//# sourceMappingURL=selectInstance.js.map