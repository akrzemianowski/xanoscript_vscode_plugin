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
exports.setupAgentInstructionsCmd = void 0;
const function_guideline_md_1 = require("../docs/function_guideline.md");
const function_examples_md_1 = require("../docs/function_examples.md");
const api_query_guideline_md_1 = require("../docs/api_query_guideline.md");
const api_query_examples_md_1 = require("../docs/api_query_examples.md");
const table_guideline_md_1 = require("../docs/table_guideline.md");
const table_examples_md_1 = require("../docs/table_examples.md");
const task_guideline_md_1 = require("../docs/task_guideline.md");
const task_examples_md_1 = require("../docs/task_examples.md");
const build_from_loveable_md_1 = require("../docs/build_from_loveable.md");
const unit_testing_guideline_md_1 = require("../docs/unit_testing_guideline.md");
const functions_md_1 = require("../docs/functions.md");
const workspace_md_1 = require("../docs/workspace.md");
const frontend_guideline_md_1 = require("../docs/frontend_guideline.md");
const input_guideline_md_1 = require("../docs/input_guideline.md");
const db_query_guideline_md_1 = require("../docs/db_query_guideline.md");
const expression_guideline_md_1 = require("../docs/expression_guideline.md");
const AGENTS_md_1 = require("../docs/AGENTS.md");
const API_AGENTS_md_1 = require("../docs/API_AGENTS.md");
const TASK_AGENTS_md_1 = require("../docs/TASK_AGENTS.md");
const FUNCTION_AGENTS_md_1 = require("../docs/FUNCTION_AGENTS.md");
const TABLE_AGENTS_md_1 = require("../docs/TABLE_AGENTS.md");
const tips_and_tricks_md_1 = require("../docs/tips_and_tricks.md");
// all the AI related docs
const agent_examples_md_1 = require("../docs/agent_examples.md");
const agent_guideline_md_1 = require("../docs/agent_guideline.md");
const mcp_server_examples_md_1 = require("../docs/mcp_server_examples.md");
const mcp_server_guideline_md_1 = require("../docs/mcp_server_guideline.md");
const tool_examples_md_1 = require("../docs/tool_examples.md");
const tool_guideline_md_1 = require("../docs/tool_guideline.md");
const vscode = require("vscode");
const fsUtils_1 = require("../registry/fsUtils");
const path_1 = require("path");
const config_1 = require("../config");
const docs = [
    { name: "function_guideline", content: function_guideline_md_1.default },
    { name: "function_examples", content: function_examples_md_1.default },
    { name: "api_query_guideline", content: api_query_guideline_md_1.default },
    { name: "api_query_examples", content: api_query_examples_md_1.default },
    { name: "table_guideline", content: table_guideline_md_1.default },
    { name: "table_examples", content: table_examples_md_1.default },
    { name: "task_guideline", content: task_guideline_md_1.default },
    { name: "task_examples", content: task_examples_md_1.default },
    { name: "unit_testing_guideline", content: unit_testing_guideline_md_1.default },
    { name: "functions", content: functions_md_1.default },
    { name: "workspace", content: workspace_md_1.default },
    { name: "tips_and_tricks", content: tips_and_tricks_md_1.default },
    { name: "expression_guideline", content: expression_guideline_md_1.default },
    { name: "frontend_guideline", content: frontend_guideline_md_1.default },
    { name: "input_guideline", content: input_guideline_md_1.default },
    { name: "db_query_guideline", content: db_query_guideline_md_1.default },
    { name: "build_from_loveable", content: build_from_loveable_md_1.default },
    { name: "agent_guideline", content: agent_guideline_md_1.default },
    { name: "agent_examples", content: agent_examples_md_1.default },
    { name: "mcp_server_guideline", content: mcp_server_guideline_md_1.default },
    { name: "mcp_server_examples", content: mcp_server_examples_md_1.default },
    { name: "tool_guideline", content: tool_guideline_md_1.default },
    { name: "tool_examples", content: tool_examples_md_1.default },
];
function setupAgentInstructionsCmd() {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        // create the main AGENTS.md file at the root of the project
        const rootUri = vscode.Uri.parse(((_a = vscode.workspace.workspaceFolders) === null || _a === void 0 ? void 0 : _a[0].uri.toString()) || "");
        yield (0, fsUtils_1.writeFile)((0, path_1.join)(rootUri.fsPath, "AGENTS.md"), AGENTS_md_1.default);
        yield (0, fsUtils_1.writeFile)((0, path_1.join)(rootUri.fsPath, "CLAUDE.md"), AGENTS_md_1.default);
        // install generic documentation files in a "docs" folder
        const docsUri = vscode.Uri.joinPath(rootUri, "docs");
        try {
            yield vscode.workspace.fs.stat(docsUri);
        }
        catch (_b) {
            yield vscode.workspace.fs.createDirectory(docsUri);
        }
        for (const doc of docs) {
            const fileUri = vscode.Uri.joinPath(docsUri, doc.name + ".md");
            yield vscode.workspace.fs.writeFile(fileUri, Buffer.from(doc.content, "utf-8"));
        }
        // for vscode, we'll also add it to the .github folder
        const githubUri = vscode.Uri.joinPath(rootUri, ".github");
        try {
            yield vscode.workspace.fs.stat(githubUri);
        }
        catch (_c) {
            yield vscode.workspace.fs.createDirectory(githubUri);
        }
        yield (0, fsUtils_1.writeFile)((0, path_1.join)(githubUri.fsPath, "copilot-instructions.md"), AGENTS_md_1.default.replace(/\(\.\/docs\//g, "(../docs/"));
        const cursorRulesUri = vscode.Uri.joinPath(rootUri, ".cursor", "rules");
        try {
            yield vscode.workspace.fs.stat(cursorRulesUri);
        }
        catch (_d) {
            yield vscode.workspace.fs.createDirectory(cursorRulesUri);
        }
        yield (0, fsUtils_1.writeFile)((0, path_1.join)(cursorRulesUri.fsPath, "xanoscript.md"), AGENTS_md_1.default.replace(/\(\.\/docs\//g, "(/docs/"));
        // install API AGENTS.md documentation files
        yield (0, fsUtils_1.writeFile)((0, path_1.join)(rootUri.fsPath, config_1.config.paths.apis, "AGENTS.md"), API_AGENTS_md_1.default);
        // install task AGENTS.md documentation files
        yield (0, fsUtils_1.writeFile)((0, path_1.join)(rootUri.fsPath, config_1.config.paths.tasks, "AGENTS.md"), TASK_AGENTS_md_1.default);
        // install table AGENTS.md documentation files
        yield (0, fsUtils_1.writeFile)((0, path_1.join)(rootUri.fsPath, config_1.config.paths.tables, "AGENTS.md"), TABLE_AGENTS_md_1.default);
        // install Function AGENTS.md documentation files
        yield (0, fsUtils_1.writeFile)((0, path_1.join)(rootUri.fsPath, config_1.config.paths.functions, "AGENTS.md"), FUNCTION_AGENTS_md_1.default);
        // // install frontend documentation file in the static folder
        // const staticUri = vscode.Uri.joinPath(rootUri, "static");
        // try {
        //   await vscode.workspace.fs.stat(staticUri);
        // } catch {
        //   await vscode.workspace.fs.createDirectory(staticUri);
        // }
        // await writeFile(join(staticUri.fsPath, "AGENTS.md"), xs_frontend);
        vscode.window.showInformationMessage("Agent instruction files have been set up in your project.");
    });
}
exports.setupAgentInstructionsCmd = setupAgentInstructionsCmd;
//# sourceMappingURL=setupAgentInstructions.js.map