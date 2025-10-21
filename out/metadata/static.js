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
exports.uploadStaticContent = uploadStaticContent;
const path_1 = require("path");
const vscode = require("vscode");
const config_1 = require("../config");
const zip_js_1 = require("@zip.js/zip.js");
const fs_1 = require("fs");
const request_1 = require("./request");
/**
 * Upload content of static folder to the workspace
 *
 *
 * @param instanceName unique name of the instance abfc-1234-efgh
 * @param workspaceId the workspace ID within the instance
 * @returns
 */
function uploadStaticContent(instanceName, workspaceId, name, description, cancellationToken) {
    return __awaiter(this, void 0, void 0, function* () {
        const token = cancellationToken
            ? cancellationToken
            : new vscode.CancellationTokenSource().token;
        const staticDir = (0, path_1.join)(config_1.ROOT_PATH, "static");
        console.log("Uploading static content from", staticDir);
        const zipWriter = new zip_js_1.ZipWriter(new zip_js_1.BlobWriter("application/zip"));
        // Helper to recursively collect files, ignoring specified folders
        function collectFiles(dir, base = "") {
            const ignoreDirs = ["node_modules", "dist", "build", "out"];
            let results = [];
            for (const entry of (0, fs_1.readdirSync)(dir, { encoding: "utf8" })) {
                const relPath = base ? (0, path_1.join)(base, entry) : entry;
                const absPath = (0, path_1.join)(dir, entry);
                const stats = (0, fs_1.statSync)(absPath);
                if (stats.isDirectory()) {
                    if (ignoreDirs.includes(entry))
                        continue;
                    results = results.concat(collectFiles(absPath, relPath));
                }
                else if (stats.isFile()) {
                    results.push(relPath);
                }
            }
            return results;
        }
        const files = collectFiles(staticDir);
        console.log(`Found ${files.length} files (excluding ignored folders)`);
        for (const file of files) {
            if (token.isCancellationRequested)
                return "cancelled";
            console.log("adding", file);
            const filePath = (0, path_1.join)(staticDir, file);
            const fileData = (0, fs_1.readFileSync)(filePath);
            yield zipWriter.add(file, new zip_js_1.BlobReader(new Blob([fileData])));
        }
        console.log("Creating zip file for static content...");
        const blob = yield zipWriter.close();
        const form = new FormData();
        form.append("file", blob, "static.zip");
        form.append("deploy", "dev");
        form.append("name", name || "static");
        form.append("description", description || "Uploaded via VS Code");
        if (token.isCancellationRequested)
            return "cancelled";
        // send the zip file to the workspace (this is using fetch behind the scenes)
        return (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/static_host/default/build`, {
            method: "POST",
            body: form,
        });
    });
}
//# sourceMappingURL=static.js.map