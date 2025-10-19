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
exports.pullCmd = void 0;
const pull_1 = require("../registry/pull");
const assertHasWorkspace_1 = require("./assertHasWorkspace");
function pullCmd() {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, assertHasWorkspace_1.assertHasWorkspace)();
        try {
            yield (0, pull_1.pull)();
            console.info("Xano registry pulled successfully");
        }
        catch (error) {
            console.error("Failed to pull Xano registry", error);
        }
    });
}
exports.pullCmd = pullCmd;
//# sourceMappingURL=pull.js.map