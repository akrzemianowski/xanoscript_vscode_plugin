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
exports.login = void 0;
const vscode = require("vscode");
function login(accessToken) {
    return __awaiter(this, void 0, void 0, function* () {
        const vsconfig = vscode.workspace.getConfiguration("xanoscript");
        const apiUrl = vsconfig.get("xanoUrl", "https://app.xano.com");
        const url = `${apiUrl}/api:meta/auth/me`;
        const response = yield fetch(url, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json",
            },
        });
        if (!response.ok) {
            vscode.window.showErrorMessage(`Failed to login ${url}: ${response.statusText}`);
            throw new Error(response.statusText);
        }
        try {
            const me = (yield response.json());
            return me;
        }
        catch (_a) {
            vscode.window.showErrorMessage(`Failed to parse JSON response from ${url}: ${response.statusText}`);
            throw new Error(response.statusText);
        }
    });
}
exports.login = login;
//# sourceMappingURL=login.js.map