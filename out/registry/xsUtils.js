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
exports.getXanoscriptContent = void 0;
const cache_1 = require("../metadata/cache");
const config_1 = require("../config");
function getXanoscriptContent(objectType, obj) {
    return __awaiter(this, void 0, void 0, function* () {
        // API groups don't have xanoscript content - they are just containers
        if (!obj.xanoscript) {
            // Generate a default xanoscript for api_group
            return `api_group "${obj.name}" {\n}\n`;
        }
        if (obj.xanoscript.status === "ok") {
            return obj.xanoscript.value;
        }
        else {
            const instanceDomain = yield (0, cache_1.getInstanceDomainFromCache)(config_1.config.instanceName);
            const scheme = instanceDomain.startsWith("localhost") ? "http" : "https";
            const workspaceId = config_1.config.workspaceId;
            // TODO: find a way to select the right branch ID
            const baseUrl = `${scheme}://${instanceDomain}/workspace/${workspaceId}-0`;
            if (obj.name) {
                return `Error retrieving: ${obj.name}\n---------------------------\n${obj.xanoscript.message}\n ${objectType} ID: ${obj.id}\n${baseUrl}`;
            }
            else {
                return `Error retrieving <${objectType}>\n---------------------------\n${obj.xanoscript.message}\n ${objectType} ID: ${obj.id}\n${baseUrl}`;
            }
        }
    });
}
exports.getXanoscriptContent = getXanoscriptContent;
//# sourceMappingURL=xsUtils.js.map