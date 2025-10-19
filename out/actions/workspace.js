"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearWorkspace = exports.setWorkspace = void 0;
function setWorkspace(instance) {
    return {
        type: "SET_WORKSPACE",
        payload: instance,
    };
}
exports.setWorkspace = setWorkspace;
function clearWorkspace() {
    return {
        type: "CLEAR_WORKSPACE",
    };
}
exports.clearWorkspace = clearWorkspace;
//# sourceMappingURL=workspace.js.map