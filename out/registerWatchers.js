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
exports.registerWatchers = registerWatchers;
const vscode = require("vscode");
const config_1 = require("./config");
const registry_1 = require("./registry/registry");
const changesTreeDataProvider_1 = require("./view/changes/changesTreeDataProvider");
const lodash_1 = require("lodash");
const init_1 = require("./registry/init");
const diagnostic_1 = require("./tooling/diagnostic");
const registerConfigWatcher_1 = require("./registerConfigWatcher");
// any new file or directory should trigger a full sync
const debounceSync = (0, lodash_1.debounce)(() => (0, init_1.syncRegistry)(), 1000);
/**
 * Register watchers to listen for file changes in the workspace.
 * @param context
 */
function registerWatchers(context) {
    const fileChangeWatcher = vscode.workspace.createFileSystemWatcher("**/*", false, false, false);
    fileChangeWatcher.onDidDelete(() => __awaiter(this, void 0, void 0, function* () {
        if (yield (0, registerConfigWatcher_1.isXanoEnabledInWorkspace)()) {
            // any file deletion should trigger a full sync
            yield (0, init_1.syncRegistry)();
        }
    }));
    /**
     * Creates an api_group.xs file if it doesn't exist when a new
     * directory is being created in apis/ folder
     *
     * This is because AI or a human might create the folder but doesn't create
     * the xanoscript code file necessary for the API group
     */
    fileChangeWatcher.onDidCreate((uri) => __awaiter(this, void 0, void 0, function* () {
        if (!(yield (0, registerConfigWatcher_1.isXanoEnabledInWorkspace)())) {
            // Xano is not enabled in this workspace we do nothing
            return;
        }
        // read the file to retrieve its type (file or dir)
        const stat = yield vscode.workspace.fs.stat(uri);
        const isDir = stat.type === vscode.FileType.Directory;
        const path = uri.path.slice(config_1.ROOT_PATH.length + 1);
        // create the api_group.xs file only if a new directory is created inside apis/
        if (isDir && path.startsWith(config_1.config.paths.apis + "/")) {
            // ... and create the "api_group.xs" file if it doesn't exist
            const apiGroupFile = vscode.Uri.joinPath(uri, "api_group.xs");
            try {
                yield vscode.workspace.fs.stat(apiGroupFile);
            }
            catch (_a) {
                // the apiGroup file does not exist
                // retrieve the api group name from the path
                const apiGroupName = path
                    .slice(config_1.config.paths.apis.length + 1)
                    .split("/")[0]
                    .trim();
                // in case we capture the creation of apis/ (and nothing after)
                if (!apiGroupName) {
                    return;
                }
                yield vscode.workspace.fs.writeFile(apiGroupFile, Buffer.from(`api_group "${apiGroupName}" {
  canonical = "${(0, lodash_1.snakeCase)(apiGroupName)}"
}`));
                console.log("API group file created: ", apiGroupFile.fsPath);
            }
        }
        // maintain debounce to prevent overuse and allow reset & pull to work properly
        debounceSync();
    }));
    context.subscriptions.push(fileChangeWatcher);
    context.subscriptions.push(vscode.workspace.onDidSaveTextDocument((document) => __awaiter(this, void 0, void 0, function* () {
        if (!(yield (0, registerConfigWatcher_1.isXanoEnabledInWorkspace)())) {
            // Xano is not enabled in this workspace we do nothing
            return;
        }
        const uri = document.uri;
        if (uri.path.endsWith(".xs")) {
            // Clear any existing diagnostics for this file on save
            // to prevent persistent backend diagnostics that might have been fixed
            diagnostic_1.diagnosticCollection.delete(uri);
            // get the relative path by subtracting the ROOT_PATH from the uri
            // so we can determine if the file is managed by the extension
            // and therefore if we need to refresh the registry with its changes
            const relativePath = uri.path.slice(config_1.ROOT_PATH.length + 1);
            console.log("XanoScript file saved: ", relativePath);
            if (config_1.config.isXanoManagedPath(relativePath)) {
                yield (0, registry_1.refreshRegistry)(yield (0, registry_1.readRegistry)(), relativePath);
                changesTreeDataProvider_1.changesProvider.refresh();
            }
        }
    })));
}
//# sourceMappingURL=registerWatchers.js.map