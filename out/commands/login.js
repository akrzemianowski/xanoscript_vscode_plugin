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
exports.assertUserIsAuthenticated = exports.xanoWebLogin = exports.signupCmd = exports.changeAccessToken = exports.loginCmd = void 0;
const vscode = require("vscode");
const login_1 = require("../metadata/login");
const secrets_1 = require("../secrets");
const registerState_1 = require("../registerState");
const selectInstance_1 = require("./selectInstance");
const assertHasWorkspace_1 = require("./assertHasWorkspace");
function loginCmd() {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, assertHasWorkspace_1.assertHasWorkspace)();
        try {
            // display a select between re-connect and update access token
            const accessToken = yield (0, secrets_1.getAccessToken)();
            const authChoices = [
                {
                    label: "Login to Xano",
                    description: "Authenticate with Xano via your web browser",
                    id: "login",
                },
                {
                    label: "Enter Access Token",
                    description: "Provide an Access Token",
                    id: "access_token",
                },
            ];
            if (accessToken) {
                authChoices.push({
                    label: "Select Instance",
                    description: "Select an instance",
                    id: "instance",
                });
                authChoices.push({
                    label: "Logout",
                    description: "Logout and remove the saved Access Token",
                    id: "logout",
                });
            }
            const shouldUpdate = yield vscode.window.showQuickPick(authChoices, {
                placeHolder: accessToken
                    ? "You are logged in. What would you like to do?"
                    : "You are not logged in. Do you want to update your access token?",
                ignoreFocusOut: true,
            });
            if (shouldUpdate) {
                if (shouldUpdate.id === "access_token") {
                    const me = yield changeAccessToken();
                    registerState_1.uiState.username = me.name;
                    (0, selectInstance_1.getOrSelectInstance)();
                }
                else if (shouldUpdate.id === "logout") {
                    yield (0, secrets_1.setAccessToken)("");
                    registerState_1.uiState.logout();
                    vscode.window.showInformationMessage("Logged out successfully.");
                }
                else if (shouldUpdate.id === "instance") {
                    (0, selectInstance_1.getOrSelectInstance)();
                }
                else {
                    const me = yield xanoWebLogin();
                    registerState_1.uiState.username = me.name;
                    (0, selectInstance_1.getOrSelectInstance)();
                }
            }
        }
        catch (error) {
            vscode.window.showErrorMessage(`Invalid Access Token ${error}`);
        }
    });
}
exports.loginCmd = loginCmd;
function changeAccessToken() {
    return __awaiter(this, void 0, void 0, function* () {
        const accessToken = yield vscode.window.showInputBox({
            placeHolder: "Enter your Xano Access Token key",
            ignoreFocusOut: true,
            password: true,
        });
        if (!accessToken) {
            // if you didn't already have an accessToken we need to warn you
            // that it's a requirement for the extension to work
            throw new Error("Access Token is required");
        }
        const me = yield (0, login_1.login)(accessToken);
        yield (0, secrets_1.setAccessToken)(accessToken);
        return me;
    });
}
exports.changeAccessToken = changeAccessToken;
function signupCmd() {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, assertHasWorkspace_1.assertHasWorkspace)();
        try {
            const me = yield xanoWebLogin(true);
            registerState_1.uiState.username = me.name;
            (0, selectInstance_1.getOrSelectInstance)();
        }
        catch (error) {
            vscode.window.showErrorMessage(`Invalid Access Token ${error}`);
        }
    });
}
exports.signupCmd = signupCmd;
function xanoWebLogin(signup = false) {
    return __awaiter(this, void 0, void 0, function* () {
        // Get the API URL from configuration
        const vsconfig = vscode.workspace.getConfiguration("xanoscript");
        const apiUrl = vsconfig.get("xanoUrl", "https://app.xano.com");
        // Create a promise that will resolve when we receive the token
        const tokenPromise = new Promise((resolve, reject) => {
            // Set up a one-time URI handler to receive the token
            const uriHandler = vscode.window.registerUriHandler({
                handleUri(uri) {
                    // Check if this is our callback
                    if (uri.path === "/auth-callback") {
                        const token = uri.query.split("=")[1]; // Assuming format: token=<access_token>
                        if (token) {
                            resolve(decodeURIComponent(token));
                            disposable.dispose(); // Clean up the handler
                        }
                        else {
                            reject(new Error("No token received in callback"));
                            disposable.dispose();
                        }
                    }
                },
            });
            const disposable = uriHandler;
            // Set a timeout in case the user never completes the auth
            setTimeout(() => {
                reject(new Error("Authentication timeout - no token received"));
                disposable.dispose();
            }, 300000); // 5 minute timeout
        });
        // Construct the login URL with a callback parameter
        // The callback URL should use the appropriate protocol for the current editor (vscode://, windsurf://, etc.)
        const extensionId = "xano.xanoscript"; // This should match your publisher.name from package.json
        const uriScheme = vscode.env.uriScheme; // Dynamically gets the URI scheme (vscode, windsurf, etc.)
        const callbackUrl = encodeURIComponent(`${uriScheme}://${extensionId}/auth-callback`);
        const authUrl = `${apiUrl}/${signup ? "signup" : "login"}?dest=vscode&callback=${callbackUrl}`;
        // Open the login page in the user's default browser
        yield vscode.env.openExternal(vscode.Uri.parse(authUrl));
        // Show a message to the user
        vscode.window.showInformationMessage("Please complete the login process in your browser. The extension is waiting for your authentication...");
        try {
            // Wait for the token
            const accessToken = yield tokenPromise;
            if (!accessToken) {
                throw new Error("Access Token is required");
            }
            const me = yield (0, login_1.login)(accessToken);
            yield (0, secrets_1.setAccessToken)(accessToken);
            vscode.window.showInformationMessage("Successfully logged in to Xano!");
            return me;
        }
        catch (error) {
            // Clean up on error
            vscode.window.showErrorMessage(`Authentication failed: ${error}`);
            throw error;
        }
    });
}
exports.xanoWebLogin = xanoWebLogin;
/**
 * Ensure the user is logged in to Xano and has a valid access token.
 * If not, prompt them to log in or provide a new access token.
 */
function assertUserIsAuthenticated() {
    return __awaiter(this, void 0, void 0, function* () {
        const accessToken = yield (0, secrets_1.getAccessToken)();
        try {
            if (!accessToken) {
                return xanoWebLogin();
            }
            else {
                return (0, login_1.login)(accessToken);
            }
        }
        catch (error) {
            // display error to the user
            vscode.window.showErrorMessage(`Failed to login to Xano. Please check your access token. ${error}`);
            throw new Error("Login failed");
        }
    });
}
exports.assertUserIsAuthenticated = assertUserIsAuthenticated;
//# sourceMappingURL=login.js.map