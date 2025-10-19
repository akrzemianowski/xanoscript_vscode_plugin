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
const fs = require("fs");
/**
 * Building snippets is a bit of a pain as you have to stringify the body (code) of the snippets
 * to simplify it, you can create a file with the extension .xs (xano script) and write your snippet
 * in it. Any comment (starting with //) will be used as the description of the snippet
 *
 * This script runs during the build proccess and creates a xanoscript.json file in the out folder
 * for the extension to use.
 *
 * All the other rules of snippets apply (see https://code.visualstudio.com/docs/editor/userdefinedsnippets)
 */
function buildSnippets() {
    return __awaiter(this, void 0, void 0, function* () {
        const snippets = {};
        const files = fs.readdirSync(__dirname);
        files
            .filter((fileName) => fileName.endsWith(".xs"))
            .forEach((fileName) => {
            const snippetStr = fs.readFileSync(__dirname + "/" + fileName, "utf-8");
            const snippet = parseSnippet(snippetStr);
            // if the snippet file is conditional-else.xs then the prefix is conditional-else
            snippet.prefix = fileName.slice(0, -3).trim();
            // the name of the snippet is the file name without the .xs extension
            // with spaces instead of dashes
            snippets[fileName.slice(0, -3).replace(/[-_]+/g, " ")] = snippet;
        });
        const snippetJson = JSON.stringify(snippets, null, 2);
        // create the dist folder if it doesn't exist
        if (!fs.existsSync(__dirname + "/../../dist")) {
            fs.mkdirSync(__dirname + "/../../dist");
        }
        fs.writeFileSync(__dirname + "/../../dist/xanoscript.json", snippetJson);
    });
}
/**
 * Extract the comments as description and the rest as body
 * @param snippetStr
 * @returns
 */
function parseSnippet(snippetStr) {
    const snippet = {
        prefix: "",
        description: "",
        body: "",
    };
    const body = [];
    const description = [];
    // all lines starting with // are comments to be used a description
    for (const line of snippetStr.split("\n")) {
        if (line.startsWith("//")) {
            const comment = line.slice(2);
            description.push(comment.trim());
        }
        else {
            body.push(line);
        }
    }
    snippet.body = body.join("\n");
    snippet.description = description.join("\n");
    return snippet;
}
buildSnippets();
//# sourceMappingURL=build.js.map