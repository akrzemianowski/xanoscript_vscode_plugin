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
exports.sync = exports.isSynching = void 0;
const login_1 = require("../commands/login");
const pull_1 = require("./pull");
const push_1 = require("./push");
let synching = false;
function isSynching() {
    return synching;
}
exports.isSynching = isSynching;
/**
 * Syncs the registry with the local file system.
 *
 * First pulls all the remote files (listing only, no XS inside)
 * Compare the timestamp between the registry and the local file system
 *
 * For container like api groups, if a new api group was found remotely
 * we can just update it as new
 *
 *
 */
function sync() {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, login_1.assertUserIsAuthenticated)();
        try {
            synching = true;
            yield (0, pull_1.pull)();
            yield (0, push_1.push)();
        }
        finally {
            synching = false;
        }
    });
}
exports.sync = sync;
//# sourceMappingURL=sync.js.map