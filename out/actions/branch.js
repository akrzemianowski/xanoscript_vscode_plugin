"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setBranch = setBranch;
exports.clearBranch = clearBranch;
function setBranch(instance) {
    return {
        type: "SET_BRANCH",
        payload: instance,
    };
}
function clearBranch() {
    return {
        type: "CLEAR_BRANCH",
    };
}
//# sourceMappingURL=branch.js.map