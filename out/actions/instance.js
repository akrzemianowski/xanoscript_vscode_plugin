"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearInstance = exports.setInstance = void 0;
function setInstance(instance) {
    return {
        type: "SET_INSTANCE",
        payload: instance,
    };
}
exports.setInstance = setInstance;
function clearInstance() {
    return {
        type: "CLEAR_INSTANCE",
    };
}
exports.clearInstance = clearInstance;
//# sourceMappingURL=instance.js.map