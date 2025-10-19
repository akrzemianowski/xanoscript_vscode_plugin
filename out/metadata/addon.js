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
exports.deleteAddon = exports.createAddon = exports.createAddonFromXs = exports.fetchAddOns = exports.updateAddon = exports.fetchAddOn = void 0;
const request_1 = require("./request");
const vscode = require("vscode");
/**
 * Return the Xanoscript version of a given Addon within your workspace.
 * @param instanceName unique name of the instance abfc-1234-efgh
 * @param workspaceId the workspace ID within the instance
 * @param addonId the addon ID to fetch the Xanoscript from
 * @returns
 */
function fetchAddOn(instanceName, workspaceId, addonId) {
    return (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/addon/${addonId}`);
}
exports.fetchAddOn = fetchAddOn;
/**
 * Update the Xanoscript version of a given Addon within your workspace.
 * @param instanceName unique name of the instance abfc-1234-efgh
 * @param workspaceId the workspace ID within the instance
 * @param addonId the addon ID to update
 * @param xanoscript the new Xanoscript to update the addon with
 * @returns
 */
function updateAddon(instanceName, workspaceId, addonId, xanoscript) {
    const queryParams = new URLSearchParams();
    queryParams.set("include_xanoscript", "true");
    return (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/addon/${addonId}?${queryParams.toString()}`, {
        method: "PUT",
        body: xanoscript,
        headers: {
            "Content-Type": "text/x-xanoscript",
        },
    });
}
exports.updateAddon = updateAddon;
/**
 * Fetch the list of addons within your workspace.
 * @param instanceName unique name of the instance abfc-1234-efgh
 * @param workspaceId the workspace ID within the instance
 * @returns list of addon objects
 */
function fetchAddOns(instanceName, workspaceId) {
    return __awaiter(this, void 0, void 0, function* () {
        let nextPage = 1;
        const addons = [];
        const vsconfig = vscode.workspace.getConfiguration("xanoscript");
        const draftMode = vsconfig.get("draftMode", false);
        const queryParams = new URLSearchParams();
        queryParams.set("include_draft", draftMode ? "true" : "false");
        queryParams.set("include_xanoscript", "true");
        queryParams.set("per_page", "20");
        while (nextPage) {
            queryParams.set("page", nextPage.toString());
            const response = yield (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/addon?${queryParams.toString()}`);
            addons.push(...response.items);
            nextPage = response.nextPage;
        }
        return addons;
    });
}
exports.fetchAddOns = fetchAddOns;
/**
 * Create a new addon within your workspace using XanoScript.
 * @param instanceName unique name of the instance abfc-1234-efgh
 * @param workspaceId the workspace ID within the instance
 * @param xanoscript the XanoScript to create the addon with
 * @returns
 */
function createAddonFromXs(instanceName, workspaceId, xanoscript) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/addon`, {
            method: "POST",
            body: xanoscript,
            headers: {
                "Content-Type": "text/x-xanoscript",
            },
        });
        if (!response) {
            throw new Error("Addon creation failed");
        }
        return fetchAddOn(instanceName, workspaceId, response.id);
    });
}
exports.createAddonFromXs = createAddonFromXs;
/**
 * Create a new addon within your workspace with form data.
 * @param instanceName unique name of the instance abfc-1234-efgh
 * @param workspaceId the workspace ID within the instance
 * @param name the name of the addon
 * @param description the description of the addon
 * @param branch the branch for the addon
 * @returns
 */
function createAddon(instanceName, workspaceId, name, description, branch = "v1") {
    return __awaiter(this, void 0, void 0, function* () {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("description", description);
        formData.append("branch", branch);
        formData.append("include_xanoscript", true);
        const response = yield (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/addon`, {
            method: "POST",
            body: formData,
        });
        if (!response) {
            throw new Error("Addon creation failed");
        }
        return fetchAddOn(instanceName, workspaceId, response.id);
    });
}
exports.createAddon = createAddon;
/**
 * Delete an addon within your workspace.
 * @param instanceName unique name of the instance abfc-1234-efgh
 * @param workspaceId the workspace ID within the instance
 * @param addonId the addon ID to delete
 */
function deleteAddon(instanceName, workspaceId, addonId) {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/addon/${addonId}`, {
            method: "DELETE",
        });
    });
}
exports.deleteAddon = deleteAddon;
//# sourceMappingURL=addon.js.map