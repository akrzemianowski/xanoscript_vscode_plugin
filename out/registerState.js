"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uiState = void 0;
const vscode = require("vscode");
const login_1 = require("./metadata/login");
const secrets_1 = require("./secrets");
const DEFAULT_STATE = {
    username: "",
    instance: "",
    workspace: "",
    instanceName: "",
};
const WORKSPACE_STATE_KEY = "xanoscript:state";
/**
 * Store additional information for the UI in the workspace state.
 * These aren't functional but are used to display information to the user.
 */
class UiStateManager {
    constructor() {
        this.context = null;
        this._username = "";
        this._instance = "";
        this._instanceName = "";
        this._workspace = "";
        this.__change_callback = [];
    }
    initialize(context) {
        (0, secrets_1.getAccessToken)().then((accessToken) => {
            if (accessToken) {
                (0, login_1.login)(accessToken).then((me) => {
                    this._username = me.name;
                    this.fireChange();
                });
            }
        });
        this.context = context;
        this.loadFromContext();
    }
    isAuthenticated() {
        return !!this._username;
    }
    logout() {
        this._username = "";
        this._instance = "";
        this._instanceName = "";
        this._workspace = "";
        if (this.context) {
            this.context.workspaceState.update(WORKSPACE_STATE_KEY, this.getState());
        }
        this.fireChange();
    }
    loadFromContext() {
        if (this.context) {
            const storedState = this.context.workspaceState.get(WORKSPACE_STATE_KEY, Object.assign({}, DEFAULT_STATE));
            console.log("loaded state", storedState);
            if (storedState.username) {
                console.log("setting up username", storedState.username);
                this._username = storedState.username;
            }
            if (storedState.instance) {
                console.log("setting up instance", storedState.instance);
                this._instance = storedState.instance;
            }
            if (storedState.instanceName) {
                console.log("setting up instance name", storedState.instanceName);
                this._instanceName = storedState.instanceName;
            }
            if (storedState.workspace) {
                console.log("setting up workspace", storedState.workspace);
                this._workspace = storedState.workspace;
            }
            this.fireChange();
        }
    }
    // to bused by the UI to refresh when the state gets updated
    onChange(callback, fire = false) {
        this.__change_callback.push(callback);
        if (fire) {
            this.safeFireCallback(callback);
        }
        return new vscode.Disposable(() => {
            this.__change_callback = this.__change_callback.filter((cb) => cb !== callback);
        });
    }
    fireChange() {
        this.__change_callback.forEach((callback) => this.safeFireCallback(callback));
    }
    safeFireCallback(callback) {
        try {
            callback(this);
        }
        catch (error) {
            console.error("Error in config change callback", error);
        }
    }
    getState() {
        return {
            username: this._username,
            instance: this._instance,
            workspace: this._workspace,
            instanceName: this._instanceName,
        };
    }
    get username() {
        return this._username || "";
    }
    set username(value) {
        if (value !== this._username) {
            this._username = value;
            if (this.context) {
                this.context.workspaceState.update(WORKSPACE_STATE_KEY, this.getState());
            }
            this.fireChange();
        }
    }
    get instance() {
        return this._instance || "";
    }
    set instance(value) {
        if (this._instance !== value) {
            this._instance = value;
            if (this.context) {
                this.context.workspaceState.update(WORKSPACE_STATE_KEY, this.getState());
            }
            this.fireChange();
        }
    }
    get instanceName() {
        return this._instanceName || "";
    }
    set instanceName(value) {
        if (this._instanceName !== value) {
            this._instanceName = value;
            if (this.context) {
                this.context.workspaceState.update(WORKSPACE_STATE_KEY, this.getState());
            }
            this.fireChange();
        }
    }
    get workspace() {
        if (this._workspace) {
            return this._workspace;
        }
        else {
            return "";
        }
    }
    set workspace(value) {
        if (this._workspace !== value) {
            this._workspace = value;
            if (this.context) {
                this.context.workspaceState.update(WORKSPACE_STATE_KEY, this.getState());
            }
            this.fireChange();
        }
    }
}
exports.uiState = new UiStateManager();
//# sourceMappingURL=registerState.js.map