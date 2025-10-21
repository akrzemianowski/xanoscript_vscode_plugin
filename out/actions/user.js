"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setUser = setUser;
exports.clearUser = clearUser;
function setUser(me) {
    return {
        type: "SET_USER",
        payload: me,
    };
}
function clearUser() {
    return {
        type: "CLEAR_USER",
    };
}
//# sourceMappingURL=user.js.map