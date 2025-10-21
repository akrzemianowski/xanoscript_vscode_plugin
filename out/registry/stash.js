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
exports.stashChanges = stashChanges;
exports.applyStash = applyStash;
exports.readStash = readStash;
const vscode = require("vscode");
const init_1 = require("./init");
const config_1 = require("../config");
const types_1 = require("./types");
const path_1 = require("path");
const changesTreeDataProvider_1 = require("../view/changes/changesTreeDataProvider");
const fsUtils_1 = require("./fsUtils");
/**
 * Retrieve all the changed files (including the staged files) from the registry
 * and store them in the stash. If the stash is empty, it will be created.
 * If the stash is not empty, ask the user to confirm if they want to
 * overwrite the stash.
 *
 */
function stashChanges() {
    return __awaiter(this, void 0, void 0, function* () {
        const stash = yield readStash();
        if (stash.length > 0) {
            const overwrite = yield vscode.window.showWarningMessage("Stash already exists. Do you want to overwrite it?", { modal: true }, { title: "Overwrite" }, { title: "Cancel" });
            if ((overwrite === null || overwrite === void 0 ? void 0 : overwrite.title) !== "Overwrite") {
                return;
            }
            stash.length = 0; // clear the stash
        }
        const registry = yield (0, init_1.syncRegistry)();
        const changes = registry.filter((r) => r.status === types_1.XanoStatus.CHANGED ||
            r.status === types_1.XanoStatus.NEW ||
            r.status === types_1.XanoStatus.NOTFOUND);
        for (const change of changes) {
            const uri = vscode.Uri.file((0, path_1.join)(config_1.ROOT_PATH, change.path));
            // read the file content
            const fileContent = yield (0, fsUtils_1.readFile)(uri);
            const stashRecord = {
                id: change.id,
                type: change.type,
                path: change.path,
                status: change.status,
                content: fileContent.toString(),
            };
            if (change.original) {
                yield vscode.workspace.fs.writeFile(uri, Buffer.from(change.original, "base64"));
            }
            else {
                // we can delete the file
                yield vscode.workspace.fs.delete(uri);
            }
            stash.push(stashRecord);
        }
        // write the stash to the file
        yield vscode.workspace.fs.writeFile(vscode.Uri.file(config_1.XANO_STASH_PATH), Buffer.from(JSON.stringify(stash, null, 2), "utf-8"));
        yield (0, init_1.syncRegistry)();
        changesTreeDataProvider_1.changesProvider.refresh();
    });
}
function applyStash() {
    return __awaiter(this, void 0, void 0, function* () {
        const stash = yield readStash();
        if (stash.length === 0) {
            vscode.window.showWarningMessage("No stash found");
            return;
        }
        // ask the user to confirm if they want to apply the stash
        const changesStr = stash.length === 1 ? "change" : "changes";
        const apply = yield vscode.window.showWarningMessage(`Do you want to apply all ${stash.length} ${changesStr}?`, { modal: true }, { title: "Apply" }, { title: "Cancel" });
        if ((apply === null || apply === void 0 ? void 0 : apply.title) !== "Apply") {
            return;
        }
        // apply the changes
        for (const change of stash) {
            const uri = vscode.Uri.file((0, path_1.join)(config_1.ROOT_PATH, change.path));
            // create the directories if they don't exist
            const dirName = uri.path.substring(0, uri.path.lastIndexOf("/"));
            yield vscode.workspace.fs.createDirectory(vscode.Uri.file(dirName));
            // write the file content
            yield vscode.workspace.fs.writeFile(uri, Buffer.from(change.content, "utf-8"));
        }
        yield (0, init_1.syncRegistry)();
        changesTreeDataProvider_1.changesProvider.refresh();
        // clear the stash
        yield vscode.workspace.fs.writeFile(vscode.Uri.file(config_1.XANO_STASH_PATH), Buffer.from(JSON.stringify([])));
        vscode.window.showInformationMessage("Stash applied");
    });
}
/**
 * Get the registry from the local workspace
 *
 * The local registry maintains the state of each local files and their
 * association with the remote Xano workspace.
 * @returns XanoFileStash
 */
function readStash() {
    return __awaiter(this, void 0, void 0, function* () {
        if (config_1.config.isReady) {
            try {
                const data = yield (0, fsUtils_1.readFile)(config_1.XANO_STASH_PATH);
                const stash = JSON.parse(data.toString());
                return stash;
            }
            catch (err) {
                if (err instanceof vscode.FileSystemError && err.code === "ENOENT") {
                    yield (0, fsUtils_1.writeFile)(config_1.XANO_STASH_PATH, JSON.stringify([]));
                    return [];
                }
                console.error("readStash(): Error reading stash file", err);
                return [];
            }
        }
        else {
            console.error("readStash(): Xano extension has not been initialized in your current workspace");
            return [];
        }
    });
}
//# sourceMappingURL=stash.js.map