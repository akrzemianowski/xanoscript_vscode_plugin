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
exports.getInstanceDomainFromCache = void 0;
const workspace_1 = require("./workspace");
const DOMAIN_CACHE_TTL = 10 * 60 * 1000; // cache domains for 10 minutes
// maintain a cache of instance names to their respective domains
const domainCache = new Map();
/**
 * Retrieve the domain of the given instance name. This is used
 * when attempting to retrieve a resource content from the
 * virtual URI we use in vscode which only contains the instance
 * name (not it's full URL).
 *
 * Notice that this function will cache the domain for 10 minutes
 * @param instanceName
 * @returns
 */
function getInstanceDomainFromCache(instanceName) {
    return __awaiter(this, void 0, void 0, function* () {
        const cachedDomain = domainCache.get(instanceName);
        if (cachedDomain && cachedDomain.ttl > Date.now()) {
            return cachedDomain.url;
        }
        // query the metadata API to get the domain
        const instance = yield (0, workspace_1.fetchInstance)(instanceName);
        domainCache.set(instanceName, {
            url: instance.xano_domain,
            ttl: Date.now() + DOMAIN_CACHE_TTL,
        });
        return instance.xano_domain;
    });
}
exports.getInstanceDomainFromCache = getInstanceDomainFromCache;
//# sourceMappingURL=cache.js.map