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
exports.changesProvider = exports.ChangedFile = exports.ChangesTreeDataProvider = void 0;
const vscode = require("vscode");
const fsUtils_1 = require("../../registry/fsUtils");
const lodash_1 = require("lodash");
const types_1 = require("../../registry/types");
const registry_1 = require("../../registry/registry");
const config_1 = require("../../config");
const originalContentProvider_1 = require("./originalContentProvider");
class ChangesTreeDataProvider {
    constructor() {
        this._onDidChangeTreeData = new vscode.EventEmitter();
        this.onDidChangeTreeData = this._onDidChangeTreeData.event;
        this.changes = {
            staged: [],
            changed: [],
        };
        this.refresh();
    }
    refresh() {
        this.getChangedRecord().then((changes) => {
            this.changes = changes;
            this._onDidChangeTreeData.fire();
        });
    }
    getChild([path, fileType, staged, objType, status]) {
        if (fileType === vscode.FileType.Directory) {
            return new ChangeFolder(path);
        }
        else {
            return new ChangedFile(path, staged, objType, status);
        }
    }
    getChildren(customFunction) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!config_1.config.isReady) {
                return [];
            }
            if (!customFunction) {
                return (0, lodash_1.map)([
                    [
                        "staged",
                        vscode.FileType.Directory,
                        true,
                        types_1.XanoObjectType.UNKNOWN,
                        types_1.XanoStatus.UNCHANGED,
                    ],
                    [
                        "changed",
                        vscode.FileType.Directory,
                        false,
                        types_1.XanoObjectType.UNKNOWN,
                        types_1.XanoStatus.UNCHANGED,
                    ],
                ], this.getChild);
            }
            if (customFunction instanceof ChangeFolder) {
                if (customFunction.path === "staged") {
                    return (0, lodash_1.map)(this.changes.staged, this.getChild);
                }
                else if (customFunction.path === "changed") {
                    return (0, lodash_1.map)(this.changes.changed, this.getChild);
                }
            }
            return [];
        });
    }
    getTreeItem(element) {
        return element;
    }
    getChangedRecord() {
        return __awaiter(this, void 0, void 0, function* () {
            const index = yield (0, registry_1.getRegistry)();
            const changedRecords = index.filter((record) => record.status === types_1.XanoStatus.CHANGED ||
                record.status === types_1.XanoStatus.NEW ||
                record.status === types_1.XanoStatus.NOTFOUND);
            for (const record of changedRecords) {
                if (record.original) {
                    // record.original is base64 encoded
                    const content = Buffer.from(record.original, "base64").toString("utf-8");
                    originalContentProvider_1.originalContentProvider.updateContent(record.path, content);
                }
            }
            const [staged, changed] = (0, lodash_1.partition)(changedRecords, (record) => !!record.staged);
            return {
                staged: (0, lodash_1.map)(staged, (r) => [
                    r.path,
                    vscode.FileType.File,
                    true,
                    r.type,
                    r.status,
                ]),
                changed: (0, lodash_1.map)(changed, (r) => [
                    r.path,
                    vscode.FileType.File,
                    false,
                    r.type,
                    r.status,
                ]),
            };
        });
    }
}
exports.ChangesTreeDataProvider = ChangesTreeDataProvider;
/**
 * Represents a custom function in the tree view
 */
class ChangeFolder extends vscode.TreeItem {
    constructor(path) {
        const name = path.split("/").slice(-1)[0];
        super(name, vscode.TreeItemCollapsibleState.Expanded);
        this.path = path;
        this.contextValue = `change-folder-${path}`;
    }
}
/**
 * Represents a custom function (clickable) in the tree view
 */
class ChangedFile extends vscode.TreeItem {
    constructor(path, staged = false, objType = types_1.XanoObjectType.UNKNOWN, status = types_1.XanoStatus.UNCHANGED) {
        const name = path.split("/").slice(-1)[0];
        super(name, vscode.TreeItemCollapsibleState.None);
        this.path = path;
        this.staged = staged;
        this.objType = objType;
        this.status = status;
        this.id = path;
        this.resourceUri = (0, fsUtils_1.getUriFor)(config_1.ROOT_PATH, path);
        this.description = path;
        this.contextValue = staged ? "stagedFile" : "changedFile";
        // color the icon based on the status
        let themeColor = new vscode.ThemeColor("editor.foreground");
        if (status === types_1.XanoStatus.NEW) {
            themeColor = new vscode.ThemeColor("gitDecoration.addedResourceForeground");
        }
        else if (status === types_1.XanoStatus.CHANGED) {
            themeColor = new vscode.ThemeColor("gitDecoration.modifiedResourceForeground");
        }
        else if (status === types_1.XanoStatus.NOTFOUND) {
            themeColor = new vscode.ThemeColor("gitDecoration.deletedResourceForeground");
        }
        switch (objType) {
            case types_1.XanoObjectType.FUNCTION:
                this.iconPath = new vscode.ThemeIcon("symbol-method", themeColor);
                break;
            case types_1.XanoObjectType.API_ENDPOINT:
                this.iconPath = new vscode.ThemeIcon("plug", themeColor);
                break;
            case types_1.XanoObjectType.API_GROUP:
                this.iconPath = new vscode.ThemeIcon("folder-opened", themeColor);
                break;
            case types_1.XanoObjectType.TABLE:
                this.iconPath = new vscode.ThemeIcon("database", themeColor);
                break;
            case types_1.XanoObjectType.TASK:
                this.iconPath = new vscode.ThemeIcon("calendar", themeColor);
                break;
            case types_1.XanoObjectType.WORKFLOW_TEST:
                this.iconPath = new vscode.ThemeIcon("beaker", themeColor);
                break;
        }
        const statusString = status === types_1.XanoStatus.NOTFOUND ? "Deleted" : (0, lodash_1.capitalize)(status);
        const objTypeString = (0, lodash_1.startCase)(objType);
        if (staged) {
            this.tooltip = new vscode.MarkdownString(`${statusString} ${objTypeString} \`${name}\` is **staged** and will be sent to Xano during the next push $(repo-push)`, true // enable icon to display icons
            );
        }
        else {
            this.tooltip = new vscode.MarkdownString(`${statusString} ${objTypeString} \`${name}\`, stage it $(plus) to send it to Xano `, true // enable icon to display icons
            );
        }
        // API groups being folders, we can't display a diff on click
        // we can't also display a diff on deleted files
        if (status !== types_1.XanoStatus.NOTFOUND) {
            this.command = {
                command: "xanoscript.viewChangeDiff",
                title: "View Changes",
                arguments: [this.path],
            };
        }
    }
}
exports.ChangedFile = ChangedFile;
exports.changesProvider = new ChangesTreeDataProvider();
//# sourceMappingURL=changesTreeDataProvider.js.map