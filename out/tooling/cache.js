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
exports.hasCache = exports.deleteCache = exports.setCache = exports.getCacheOrFillWith = exports.getCache = void 0;
const _cache = {};
/**
 * Get a cached value
 *
 * @param key the key to get from the cache
 * @param defaultValue the default value to return if the key is not found
 * @returns
 */
function getCache(key, defaultValue = null) {
    if (hasCache(key)) {
        const record = _cache[key];
        return record.value;
    }
    return defaultValue;
}
exports.getCache = getCache;
/**
 * Get a cached value or fill the cache with the provided function
 *
 * @param key the key to get from the cache
 * @param fillFn the function providing the value to cache
 * @returns
 */
function getCacheOrFillWith(key, fillFn, ttl) {
    return __awaiter(this, void 0, void 0, function* () {
        if (hasCache(key)) {
            return _cache[key].value;
        }
        const value = yield fillFn();
        setCache(key, value, ttl);
        return value;
    });
}
exports.getCacheOrFillWith = getCacheOrFillWith;
/**
 * Set a cached value
 *
 * @param key the key to cache
 * @param value the value to cache
 * @param ttl time to live in milliseconds
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function setCache(key, value, ttl) {
    _cache[key] = {
        key,
        value,
        expires: Date.now() + ttl,
    };
}
exports.setCache = setCache;
/**
 * Delete a cached value
 * @param key
 */
function deleteCache(key) {
    delete _cache[key];
}
exports.deleteCache = deleteCache;
/**
 * Check if a key exists in the cache
 *
 * Note that this function will also delete the key if it has expired
 * @param key
 * @returns boolean true if the key exists and is not expired
 */
function hasCache(key) {
    if (_cache[key]) {
        if (_cache[key].expires > Date.now()) {
            return true;
        }
        else {
            deleteCache(key);
        }
    }
    return false;
}
exports.hasCache = hasCache;
//# sourceMappingURL=cache.js.map