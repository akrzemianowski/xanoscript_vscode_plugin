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
exports.unstageAllRecordsCmd = void 0;
const vscode = require("vscode");
const registry_1 = require("../registry/registry");
const changesTreeDataProvider_1 = require("../view/changes/changesTreeDataProvider");
function unstageAllRecordsCmd() {
    return __awaiter(this, void 0, void 0, function* () {
        const registry = yield (0, registry_1.getRegistry)();
        const stagedFiles = registry.filter((record) => record.staged);
        if (stagedFiles.length === 0) {
            vscode.window.showInformationMessage("No staged files to unstage.");
            return;
        }
        for (const record of stagedFiles) {
            record.staged = false;
        }
        yield (0, registry_1.saveRegistry)(registry);
        changesTreeDataProvider_1.changesProvider.refresh();
    });
}
exports.unstageAllRecordsCmd = unstageAllRecordsCmd;
//# sourceMappingURL=unstageAllRecords.js.map