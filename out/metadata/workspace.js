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
exports.fetchWorkspaceDataSources = exports.fetchWorkspaceBranch = exports.fetchWorkspaceBranches = exports.fetchInstanceWorkspaces = exports.fetchInstanceWorkspace = exports.fetchInstance = exports.fetchInstances = void 0;
const request_1 = require("./request");
/**
 * Retrieve all the instances the user has access to
 */
function fetchInstances() {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, request_1.metadataXanoRequest)("instance");
    });
}
exports.fetchInstances = fetchInstances;
/**
 * Retrieve the instance info provided that the current user
 * has access to it.
 */
function fetchInstance(instanceName) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const instance = yield (0, request_1.metadataXanoRequest)(`instance/${instanceName}`);
            return instance;
        }
        catch (error) {
            // TODO: remove once we can query the instance directly
            // fallback to fetching all instances and finding the right one
            // the instance hosting the free plan cannot be queried directly
            const instances = yield fetchInstances();
            const instance = instances.find((inst) => inst.name === instanceName);
            if (instance) {
                return instance;
            }
            throw error;
        }
    });
}
exports.fetchInstance = fetchInstance;
/**
 * Retrieve the instance info provided that the current user
 * has access to it.
 */
function fetchInstanceWorkspace(instanceName, workspaceId) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}`);
    });
}
exports.fetchInstanceWorkspace = fetchInstanceWorkspace;
/**
 * Retrieve all the workspaces within a given instance
 * /workspace
 */
function fetchInstanceWorkspaces(instanceName) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, request_1.metadataInstanceRequest)(instanceName, `workspace`);
    });
}
exports.fetchInstanceWorkspaces = fetchInstanceWorkspaces;
/**
 * Get workspace branches
 */
function fetchWorkspaceBranches(instanceName, workspaceId) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/branch`);
    });
}
exports.fetchWorkspaceBranches = fetchWorkspaceBranches;
/**
 * Get workspace branch
 */
function fetchWorkspaceBranch(instanceName, workspaceId, branchLabel) {
    return __awaiter(this, void 0, void 0, function* () {
        const branches = yield fetchWorkspaceBranches(instanceName, workspaceId);
        const branch = branches.find((branch) => branch.label === branchLabel);
        if (branch) {
            return branch;
        }
        throw new Error(`Branch ${branchLabel} not found`);
    });
}
exports.fetchWorkspaceBranch = fetchWorkspaceBranch;
/**
 * Get workspace data sources
 */
function fetchWorkspaceDataSources(instanceName, workspaceId) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/datasource`);
    });
}
exports.fetchWorkspaceDataSources = fetchWorkspaceDataSources;
//# sourceMappingURL=workspace.js.map