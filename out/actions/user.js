"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearUser = exports.setUser = void 0;
function setUser(me) {
    return {
        type: "SET_USER",
        payload: me,
    };
}
exports.setUser = setUser;
function clearUser() {
    return {
        type: "CLEAR_USER",
    };
}
exports.clearUser = clearUser;
//# sourceMappingURL=user.js.map