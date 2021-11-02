import * as vscode from "vscode";
import { getNonce } from "./getNonce";
import * as cp from "child_process";
import { setInterval } from "timers";

export class SidebarProvider implements vscode.WebviewViewProvider {
  _view?: vscode.WebviewView;
  _doc?: vscode.TextDocument;
  _sfdxetName?: string;
  _sfdxetVersion?: string;

  constructor(private readonly _extensionUri: vscode.Uri) {}

  public resolveWebviewView(webviewView: vscode.WebviewView) {
    this._view = webviewView;
    this._sfdxetName = "SFDX Easy Tools";
    this._sfdxetVersion = "v0.0.1";

    webviewView.webview.options = {
      // Allow scripts in the webview
      enableScripts: true,

      localResourceRoots: [this._extensionUri],
    };

    webviewView.webview.html = this._getHtmlForWebview(webviewView.webview);

    webviewView.webview.onDidReceiveMessage(async (data) => {
      switch (data.type) {
        case "onInfo": {
          if (!data.value) {
            return;
          }
          vscode.window.showInformationMessage(data.value);
          break;
        }
        case "onError": {
          if (!data.value) {
            return;
          }
          vscode.window.showErrorMessage(data.value);
          break;
        }
        case "onShowFolderPick": {
          const folderUris = await vscode.window.showOpenDialog({ canSelectFolders: true, canSelectFiles: false, canSelectMany: false, openLabel: 'Select folder' });
          if (!folderUris) {
            return null;
          }

          this._view?.webview.postMessage({
            type: "folderUri",
            value: folderUris
          });

          console.log(folderUris);
					
          break;
        }
        case "onTerminalRetrieve": {
          // let term = vscode.window.createTerminal('SFDX');
          // term.show();
          // term.sendText(`clear && echo "- Starting SFDX Retrieve" && echo`);

          let sfdx = 'sfdx force:source:retrieve --manifest package.xml';

          console.log(JSON.stringify(data));

          // JSON
          if(data.sJSON){
            const fs = require("fs");
            const path = require("path");

            const filePath = path.join(vscode.workspace.rootPath, `${data.vJSON ? data.vJSON : 'output'}.json`);

            let fileExists = false;

            try {
              fileExists = fs.readFileSync(filePath) ? true : false;

              if(fileExists === true){
                fs.unlink(filePath, (err: any) => {
                  if (err){
                    console.error(`${this._sfdxetName}: Error while deleting the file ${filePath}.`);
                    console.error(err);
                  }
    
                  console.log(`${this._sfdxetName}: Successfully deleted ${filePath}.`);
                });
              }
            } catch (error) {
              console.error(`${this._sfdxetName}: File ${filePath} not found.`);
            }

            sfdx += ` --json > ${data.vJSON ? data.vJSON : 'output'}.json`;
          }

          // LOGLEVEL
          if(data.vLOGLEVEL){
            sfdx += ` --loglevel ${data.vLOGLEVEL}`;
          }

          // TARGETUSERNAME
          if(data.vTARGETUSERNAME){
            sfdx += ` -u ${data.vTARGETUSERNAME}`;
          }

          // APIVERSION
          if(data.vAPIVERSION){
            sfdx += ` -a ${data.vAPIVERSION}`;
          }

          // SOURCEPATH
          if(data.vSOURCEPATH){
            sfdx += ` -a ${data.vSOURCEPATH}`;
          }

          console.log(`sfdx: ${sfdx}`);

          // vscode.window.onDidCloseTerminal((terminal) => {
          //   vscode.window.showInformationMessage(`onDidCloseTerminal, name: ${terminal.name}`);
          // });

          break;
        }

      }
    });
  }

  public revive(panel: vscode.WebviewView) {
    this._view = panel;
  }

  private _getHtmlForWebview(webview: vscode.Webview) {
    const scriptUri = webview.asWebviewUri(
    vscode.Uri.joinPath(this._extensionUri, "out/compiled", "sidebar.js")
    );
    const styleMainUri = webview.asWebviewUri(
    vscode.Uri.joinPath(this._extensionUri, "out/compiled", "sidebar.css")
    );

    const styleResetUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this._extensionUri, "media", "reset.css")
    );
    const styleVSCodeUri = webview.asWebviewUri(
        vscode.Uri.joinPath(this._extensionUri, "media", "vscode.css")
    );
    
    // Use a nonce to only allow a specific script to be run.
    const nonce = getNonce();

    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="Content-Security-Policy" content="img-src https: data:; style-src 'unsafe-inline' ${webview.cspSource}; script-src 'nonce-${nonce}';">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="${styleResetUri}" rel="stylesheet">
            <link href="${styleVSCodeUri}" rel="stylesheet">
            <link href="${styleMainUri}" rel="stylesheet">
            <script nonce="${nonce}">
              const tsvscode = acquireVsCodeApi();
            </script>
        </head>
        <body style="background-color: #111c23;">
        </body>
        <script nonce="${nonce}" src="${scriptUri}"></script>
    </html>`;
  }
}