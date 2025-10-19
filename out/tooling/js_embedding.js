"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isInEmbeddedJS = exports.extractEmbeddedJS = void 0;
/**
 * Extracts embedded JavaScript from XanoScript documents for virtual document provider
 */
function extractEmbeddedJS(text) {
    const regions = [];
    const lambdaPattern = /code\s*=\s*"""\s*\n([\s\S]*?)\n\s*"""/g;
    let match;
    while ((match = lambdaPattern.exec(text)) !== null) {
        const fullMatch = match[0];
        const jsCode = match[1];
        const codeStartOffset = match.index + fullMatch.indexOf('"""') + 4;
        const beforeCode = text.substring(0, codeStartOffset);
        const lines = beforeCode.split("\n");
        const line = lines.length - 1;
        regions.push({ content: jsCode, offset: codeStartOffset, line });
    }
    return regions;
}
exports.extractEmbeddedJS = extractEmbeddedJS;
/**
 * Checks if a position is within an embedded JavaScript region
 */
function isInEmbeddedJS(document, position) {
    const text = document.getText();
    const offset = document.offsetAt(position);
    const regions = extractEmbeddedJS(text);
    for (const region of regions) {
        const regionEnd = region.offset + region.content.length;
        if (offset >= region.offset && offset <= regionEnd) {
            return true;
        }
    }
    return false;
}
exports.isInEmbeddedJS = isInEmbeddedJS;
//# sourceMappingURL=js_embedding.js.map