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
exports.fileExists = fileExists;
exports.stat = stat;
exports.isDirectory = isDirectory;
exports.createDirectory = createDirectory;
exports.readdir = readdir;
exports.writeFile = writeFile;
exports.readFile = readFile;
exports.deleteFile = deleteFile;
exports.getFileHash = getFileHash;
exports.getUriFor = getUriFor;
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
function isDirectory(path) {
    return __awaiter(this, void 0, void 0, function* () {
        const fileStat = yield stat(path);
        return fileStat.type === vscode.FileType.Directory;
    });
}
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
function readdir(path) {
    return __awaiter(this, void 0, void 0, function* () {
        const fileUri = typeof path === "string" ? vscode.Uri.file(path) : path;
        const files = yield vscode.workspace.fs.readDirectory(fileUri);
        return files.map((file) => file[0]);
    });
}
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
/**
 * A light wrapper around the vscode.workspace.fs.readFile function
 * useful for testing as it allows to mock the function (functions under fs. cannot be stubbed)
 * @param path
 * @param encoding
 * @returns
 */
function readFile(path_2) {
    return __awaiter(this, arguments, void 0, function* (path, encoding = "utf8") {
        const fileUri = typeof path === "string" ? vscode.Uri.file(path) : path;
        const fileContent = yield vscode.workspace.fs.readFile(fileUri);
        return Buffer.from(fileContent).toString(encoding);
    });
}
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
function getUriFor(...path) {
    const workspaceFolders = vscode.workspace.workspaceFolders;
    if (!workspaceFolders) {
        throw new Error("No workspace folders found, please open a workspace");
    }
    return vscode.Uri.file((0, path_1.join)(workspaceFolders[0].uri.fsPath, ...path));
}
//# sourceMappingURL=fsUtils.js.map