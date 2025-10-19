"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remoteContentProvider = void 0;
class RemoteContentProvider {
    constructor() {
        this.contents = new Map();
    }
    updateContent(path, content) {
        this.contents.set(path, content);
    }
    provideTextDocumentContent(uri) {
        const path = uri.path;
        return this.contents.get(path) || "";
    }
}
exports.remoteContentProvider = new RemoteContentProvider();
//# sourceMappingURL=remoteContentProvider.js.map