"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.diagnosticCollection = void 0;
exports.createDiagnosticCollection = createDiagnosticCollection;
exports.addErrorToDiagnosticCollection = addErrorToDiagnosticCollection;
const vscode = require("vscode");
/**
 * This allows us to highlight errors in the editor.
 *
 * On save we clear the diagnostic associated with a URI (could be anything, table, custom function, query...)
 * and if there is an error we add a new diagnostic.
 * @returns
 */
function createDiagnosticCollection() {
    const diagnosticCollection = vscode.languages.createDiagnosticCollection("customFunctions");
    return diagnosticCollection;
}
/**
 * Add an error to the diagnostic collection
 * @param diagnosticCollection
 * @param uri
 * @param line
 * @param fromChar
 * @param toChar
 * @param message
 */
function addErrorToDiagnosticCollection(diagnosticCollection, uri, line, fromChar, toChar, message) {
    const range = new vscode.Range(new vscode.Position(line, fromChar), new vscode.Position(line, toChar));
    const diagnostic = new vscode.Diagnostic(range, message, vscode.DiagnosticSeverity.Error);
    diagnosticCollection.set(uri, [diagnostic]);
}
// singleton instance of the diagnostic collection, so it's trivial to clear any errors
exports.diagnosticCollection = createDiagnosticCollection();
//# sourceMappingURL=diagnostic.js.map