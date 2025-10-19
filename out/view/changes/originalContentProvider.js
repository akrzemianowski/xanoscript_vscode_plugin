"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.originalContentProvider = void 0;
class OriginalContentProvider {
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
exports.originalContentProvider = new OriginalContentProvider();
//# sourceMappingURL=originalContentProvider.js.map