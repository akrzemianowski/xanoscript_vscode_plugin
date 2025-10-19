"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setAccessToken = exports.getAccessToken = exports.API_ACCESS_TOKEN_KEY = exports.initSecretStore = exports.secretStore = void 0;
/**
 * A wrapper around the secret storage API to store and retrieve secrets
 * currently only used to store the XANO API access token
 */
class XsSecretStore {
    constructor(secrets) {
        this.secrets = secrets;
    }
    set(key, value) {
        return this.secrets.store(key, value);
    }
    get(key) {
        return this.secrets.get(key);
    }
}
// this is expected to be called once during the extension activation
function initSecretStore(secrets) {
    exports.secretStore = new XsSecretStore(secrets);
}
exports.initSecretStore = initSecretStore;
// helper functions to get and set the API access token
exports.API_ACCESS_TOKEN_KEY = "XanoApiToken";
function getAccessToken() {
    return exports.secretStore.get(exports.API_ACCESS_TOKEN_KEY);
}
exports.getAccessToken = getAccessToken;
function setAccessToken(token) {
    return exports.secretStore.set(exports.API_ACCESS_TOKEN_KEY, token);
}
exports.setAccessToken = setAccessToken;
//# sourceMappingURL=secrets.js.map