// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { SETPanel } from './SETPanel';
import { SidebarProvider } from './SidebarProvider';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	// console.log('Congratulations, your extension "sfdx-easy-tools" is now active!');

	const sidebarProvider = new SidebarProvider(context.extensionUri);
	context.subscriptions.push(
		vscode.window.registerWebviewViewProvider("sfdx-easy-tools-sidebar", sidebarProvider)
	);

	context.subscriptions.push(
		vscode.commands.registerCommand('sfdx-easy-tools.helloWorld', () => {
			SETPanel.createOrShow(context.extensionUri);
		})
	);

	context.subscriptions.push(
		vscode.commands.registerCommand("sfdx-easy-tools.askQuestion", async () => {
			const answer = await vscode.window.showInformationMessage(
				"How was your day?", 
				"Good", 
				"Bad"
			);

			if(answer === "Bad"){
				vscode.window.showInformationMessage("Sorry to hear that!");
			}else{
				console.log({answer});
			}
		})
	);

	context.subscriptions.push(
		vscode.commands.registerCommand('sfdx-easy-tools.refresh', () => {
			SETPanel.kill();
			SETPanel.createOrShow(context.extensionUri);
			setTimeout(() => {
				vscode.commands.executeCommand("workbench.action.webview.openDeveloperTools");
			}, 500);
		})
	);
}

// this method is called when your extension is deactivated
export function deactivate() {}
