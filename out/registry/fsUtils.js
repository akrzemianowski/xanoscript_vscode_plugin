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
exports.getUriFor = exports.getFileHash = exports.deleteFile = exports.readFile = exports.writeFile = exports.readdir = exports.createDirectory = exports.isDirectory = exports.stat = exports.fileExists = void 0;
const vscode = require("vscode");
const crypto_1 = require("crypto");
const path_1 = require("path");
function fileExists(path) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const fileUri = typeof path === "string" ? vscode.Uri.file(path) : path;
            const stat = yield vscode.workspace.fs.stat(fileUri);
            return stat;
        }
        catch (_a) {
            return false;
        }
    });
}
exports.fileExists = fileExists;
/**
 * A light wrapper around the vscode.workspace.fs.stat function
 * useful for testing as it allows to mock the function (functions under fs. cannot be stubbed)
 * @param path String or Uri to the file
 * @returns
 */
function stat(path) {
    return __awaiter(this, void 0, void 0, function* () {
        const fileUri = typeof path === "string" ? vscode.Uri.file(path) : path;
        return vscode.workspace.fs.stat(fileUri);
    });
}
exports.stat = stat;
function isDirectory(path) {
    return __awaiter(this, void 0, void 0, function* () {
        const fileStat = yield stat(path);
        return fileStat.type === vscode.FileType.Directory;
    });
}
exports.isDirectory = isDirectory;
/**
 * A light wrapper around the vscode.workspace.fs.createDirectory function
 * useful for testing as it allows to mock the function (functions under fs. cannot be stubbed)
 * @param path
 */
function createDirectory(path) {
    return __awaiter(this, void 0, void 0, function* () {
        const folderUri = typeof path === "string" ? vscode.Uri.file(path) : path;
        return vscode.workspace.fs.createDirectory(folderUri);
    });
}
exports.createDirectory = createDirectory;
function readdir(path) {
    return __awaiter(this, void 0, void 0, function* () {
        const fileUri = typeof path === "string" ? vscode.Uri.file(path) : path;
        const files = yield vscode.workspace.fs.readDirectory(fileUri);
        return files.map((file) => file[0]);
    });
}
exports.readdir = readdir;
/**
 * A light wrapper around the vscode.workspace.fs.writeFile function
 * useful for testing as it allows to mock the function (functions under fs. cannot be stubbed)
 * @param path
 * @param content
 */
function writeFile(path, content) {
    return __awaiter(this, void 0, void 0, function* () {
        const fileUri = typeof path === "string" ? vscode.Uri.file(path) : path;
        const contentBuffer = typeof content === "string" ? Buffer.from(content) : content;
        yield vscode.workspace.fs.writeFile(fileUri, contentBuffer);
    });
}
exports.writeFile = writeFile;
/**
 * A light wrapper around the vscode.workspace.fs.readFile function
 * useful for testing as it allows to mock the function (functions under fs. cannot be stubbed)
 * @param path
 * @param encoding
 * @returns
 */
function readFile(path, encoding = "utf8") {
    return __awaiter(this, void 0, void 0, function* () {
        const fileUri = typeof path === "string" ? vscode.Uri.file(path) : path;
        const fileContent = yield vscode.workspace.fs.readFile(fileUri);
        return Buffer.from(fileContent).toString(encoding);
    });
}
exports.readFile = readFile;
/**
 * A light wrapper around the vscode.workspace.fs.delete function
 * useful for testing as it allows to mock the function (functions under fs. cannot be stubbed)
 * @param path
 */
function deleteFile(path) {
    return __awaiter(this, void 0, void 0, function* () {
        const fileUri = typeof path === "string" ? vscode.Uri.file(path) : path;
        return yield vscode.workspace.fs.delete(fileUri);
    });
}
exports.deleteFile = deleteFile;
/**
 * Get the hash of a xanoscript content
 * @param content The xanoscript content
 * @returns The hash of the content
 */
function getFileHash(content) {
    const hash = (0, crypto_1.createHash)("sha256");
    hash.update(content);
    return hash.digest("hex");
}
exports.getFileHash = getFileHash;
function getUriFor(...path) {
    const workspaceFolders = vscode.workspace.workspaceFolders;
    if (!workspaceFolders) {
        throw new Error("No workspace folders found, please open a workspace");
    }
    return vscode.Uri.file((0, path_1.join)(workspaceFolders[0].uri.fsPath, ...path));
}
exports.getUriFor = getUriFor;
//# sourceMappingURL=fsUtils.js.map