"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearBranch = exports.setBranch = void 0;
function setBranch(instance) {
    return {
        type: "SET_BRANCH",
        payload: instance,
    };
}
exports.setBranch = setBranch;
function clearBranch() {
    return {
        type: "CLEAR_BRANCH",
    };
}
exports.clearBranch = clearBranch;
//# sourceMappingURL=branch.js.map