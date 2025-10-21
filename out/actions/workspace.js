"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setWorkspace = setWorkspace;
exports.clearWorkspace = clearWorkspace;
function setWorkspace(instance) {
    return {
        type: "SET_WORKSPACE",
        payload: instance,
    };
}
function clearWorkspace() {
    return {
        type: "CLEAR_WORKSPACE",
    };
}
//# sourceMappingURL=workspace.js.map