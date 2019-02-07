"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "docs-toc" is now active!');
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('extension.docs-toc', () => {
        // The code you place here will be executed every time your command is executed
        var displayDate = new Date().toLocaleDateString();
        // Display a message box to the user
        vscode.window.showInformationMessage('Docs: Table of Content Helper (' + displayDate + ')');
    });
    context.subscriptions.push(disposable);
    console.log('Launching HTML based tool');
    context.subscriptions.push(vscode.commands.registerCommand('extension.docs-toc-html', () => {
        const panel = vscode.window.createWebviewPanel('docs-toc', 'Docs ToC Helper', vscode.ViewColumn.One, {});
    }));
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map