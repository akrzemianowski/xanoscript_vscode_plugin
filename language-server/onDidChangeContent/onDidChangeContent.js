import { xanoscriptParser } from "../parser/parser";
import { getSchemeFromContent } from "../utils";

/**
 *
 * @param {import('vscode-languageserver-protocol').TextDocumentChangeEvent} params
 * @param {import('vscode-languageserver').Connection} connection
 * @returns
 */
export function onDidChangeContent(params, connection) {
  const document = params.document;

  if (!document) {
    console.error(
      "onDidChangeContent(): Document not found for URI:",
      params.textDocument.uri
    );
    return null;
  }

  const text = document.getText();

  const scheme = getSchemeFromContent(text);

  try {
    // Parse the XanoScript file
    const parser = xanoscriptParser(text, scheme);

    if (parser.errors.length > 0) {
      // If parsing succeeds, send an empty diagnostics array (no errors)
      connection.sendDiagnostics({ uri: document.uri, diagnostics: [] });
    }

    for (const error of parser.errors) {
      console.error(
        `onDidChangeContent(): Error parsing document: ${error.name}`
      );
    }

    // If parsing fails, create a diagnostic (error message) to display in VS Code
    const diagnostics = parser.errors.map((error) => {
      return {
        severity: 1, // Error severity
        range: error.token
          ? {
              start: document.positionAt(error.token.startOffset),
              end: document.positionAt(error.token.endOffset + 1),
            }
          : {
              start: { line: 0, character: 0 },
              end: { line: 0, character: 1 },
            },
        message: error.message,
      };
    });

    console.log(
      `onDidChangeContent(): sending diagnostic (${parser.errors.length} errors) for scheme:`,
      scheme
    );

    connection.sendDiagnostics({ uri: document.uri, diagnostics });
  } catch (error) {
    // If parsing fails, create a diagnostic (error message) to display in VS Code
    const diagnostics = [
      {
        severity: 1, // Error severity
        range: {
          start: { line: 0, character: 0 }, // Adjust range based on error details if available
          end: { line: 0, character: 1 },
        },
        message: error.message || "Syntax error in XanoScript code",
      },
    ];
    connection.sendDiagnostics({ uri: document.uri, diagnostics });
  }
}
