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
exports.registerJsEmbed = registerJsEmbed;
const vscode = require("vscode");
const js_embedding_1 = require("./tooling/js_embedding");
function registerJsEmbed(context) {
    // Since we can embed JS and TS, we need a virtual document provider
    // this will allow use to ask the built-in JS/TS language service for completions
    // instead of having to build our own quirky language service
    const embeddedJSContent = new Map();
    const virtualDocProvider = new (class {
        provideTextDocumentContent(uri) {
            return embeddedJSContent.get(uri.toString()) || "";
        }
    })();
    context.subscriptions.push(vscode.workspace.registerTextDocumentContentProvider("embedded-js", virtualDocProvider));
    // Middleware to delegate JavaScript regions to built-in JS language service
    return {
        provideCompletionItem: (document, position, context, token, 
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        next) => __awaiter(this, void 0, void 0, function* () {
            // Check if we're in an embedded JavaScript region
            if (document.languageId === "xanoscript" &&
                (0, js_embedding_1.isInEmbeddedJS)(document, position)) {
                const text = document.getText();
                const regions = (0, js_embedding_1.extractEmbeddedJS)(text);
                const offset = document.offsetAt(position);
                // Find which region contains this position
                for (const region of regions) {
                    const regionEnd = region.offset + region.content.length;
                    if (offset >= region.offset && offset <= regionEnd) {
                        // Calculate position within the JS content
                        const jsOffset = offset - region.offset;
                        const jsLines = region.content.substring(0, jsOffset).split("\n");
                        const jsPosition = new vscode.Position(jsLines.length - 1, jsLines[jsLines.length - 1].length);
                        // Create a cache key and virtual URI
                        const cacheKey = `${document.uri.toString()}-${region.offset}`;
                        const virtualUri = vscode.Uri.parse(`embedded-js:/${Buffer.from(cacheKey).toString("base64")}.js`);
                        // Store the JS content for the virtual document provider
                        embeddedJSContent.set(virtualUri.toString(), region.content);
                        // Get completions from JS language service
                        const jsCompletions = yield vscode.commands.executeCommand("vscode.executeCompletionItemProvider", virtualUri, jsPosition);
                        return jsCompletions;
                    }
                }
            }
            // Otherwise, use the XanoScript language server
            return next(document, position, context, token);
        }),
        provideHover: (document, position, token, 
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        next) => __awaiter(this, void 0, void 0, function* () {
            // Check if we're in an embedded JavaScript region
            if (document.languageId === "xanoscript" &&
                (0, js_embedding_1.isInEmbeddedJS)(document, position)) {
                const text = document.getText();
                const regions = (0, js_embedding_1.extractEmbeddedJS)(text);
                const offset = document.offsetAt(position);
                // Find which region contains this position
                for (const region of regions) {
                    const regionEnd = region.offset + region.content.length;
                    if (offset >= region.offset && offset <= regionEnd) {
                        // Calculate position within the JS content
                        const jsOffset = offset - region.offset;
                        const jsLines = region.content.substring(0, jsOffset).split("\n");
                        const jsPosition = new vscode.Position(jsLines.length - 1, jsLines[jsLines.length - 1].length);
                        // Create a cache key and virtual URI
                        const cacheKey = `${document.uri.toString()}-${region.offset}`;
                        const virtualUri = vscode.Uri.parse(`embedded-js:/${Buffer.from(cacheKey).toString("base64")}.js`);
                        // Store the JS content for the virtual document provider
                        embeddedJSContent.set(virtualUri.toString(), region.content);
                        // Get hover from JS language service
                        const jsHovers = yield vscode.commands.executeCommand("vscode.executeHoverProvider", virtualUri, jsPosition);
                        return (jsHovers === null || jsHovers === void 0 ? void 0 : jsHovers[0]) || null;
                    }
                }
            }
            // Otherwise, use the XanoScript language server
            return next(document, position, token);
        }),
    };
}
//# sourceMappingURL=registerJsEmbed.js.map