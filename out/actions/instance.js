"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setInstance = setInstance;
exports.clearInstance = clearInstance;
function setInstance(instance) {
    return {
        type: "SET_INSTANCE",
        payload: instance,
    };
}
function clearInstance() {
    return {
        type: "CLEAR_INSTANCE",
    };
}
//# sourceMappingURL=instance.js.map