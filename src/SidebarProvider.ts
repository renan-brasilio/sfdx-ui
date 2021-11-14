import * as vscode from "vscode";
import { getNonce } from "./getNonce";
import * as cp from "child_process";
import { setInterval } from "timers";
import { basename } from 'path';

export class SidebarProvider implements vscode.WebviewViewProvider {
  _view?: vscode.WebviewView;
  _doc?: vscode.TextDocument;
  _sfdxetName?: string;
  _sfdxetVersion?: string;

  constructor(private readonly _extensionUri: vscode.Uri) {}

  public resolveWebviewView(webviewView: vscode.WebviewView) {
    this._view = webviewView;
    this._sfdxetName = "SFDX UI";
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
					
          break;
        }
        case "onShowFilePick": {
          const fileUri = await vscode.window.showOpenDialog({ canSelectFolders: false, canSelectFiles: true, canSelectMany: false, openLabel: 'Select File' });
          if (!fileUri) {
            return null;
          }

          console.log({fileUri});

          this._view?.webview.postMessage({
            type: "fileUri",
            value: fileUri
          });
					
          break;
        }
        case "onGetAliasUsers": {
          const fs = require("fs");
          const path = require("path");

          const homedir = require('os').homedir();

          const filePath = path.join(homedir + '/.sfdx/', `alias.json`);

          let fileExists = false;

          try {
            const file = fs.readFileSync(filePath);
            fileExists = file ? true : false;

            const fileJSON = JSON.parse(file);
            if(fileJSON){
              this._view?.webview.postMessage({
                type: "aliasJSON",
                value: fileJSON.orgs
              });
            }
          } catch (error) {
            console.error(`${this._sfdxetName}: File ${filePath} not found.`);
          }
					
          break;
        }
        case "onTerminalRetrieve": {
          let term = vscode.window.createTerminal('SFDX');
          term.show();
          term.sendText(`clear && echo "- Starting SFDX: ${data.sfdx}" && echo`);
          
          console.log(JSON.stringify(data));

          let sfdx = 'sfdx ' + data.sfdx;

          // JSON
          if(data.sJSON){
            const fs = require("fs");
            const path = require("path");

            const filePath = path.join(data.vJSONPath ? data.vJSONPath : vscode.workspace.rootPath, `${data.vJSON ? data.vJSON : 'output'}.json`);

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

            sfdx += ` --json > ${data.vJSONPath ? data.vJSONPath + '/' : ''}${data.vJSON ? data.vJSON : 'output'}.json`;
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
          }else if(data.vMANIFEST){ // MANIFEST
            sfdx += ` -x ${data.vMANIFEST}`;
          }else if(data.vMETADATA){ // METADATA
            sfdx += ` -m ${data.vMETADATA}`;
          }

          // vPACKAGENAMES
          if(data.vPACKAGENAMES){
            sfdx += ` -n ${data.vPACKAGENAMES}`;
          }

          // VERBOSE
          if(data.sVERBOSE){
            sfdx += ` --verbose`;
          }

          // ADVANCED
          if(data.vADVANCED){
            sfdx += ` ${data.vADVANCED}`;
          }

          // ROOTDIR
          if(data.vROOTDIR){
            sfdx += ` -r ${data.vROOTDIR}`;
          }

          // OUTPUTDIR
          if(data.sOUTPUTDIR){
            sfdx += ` -d ${data.vOUTPUTDIR ? data.vOUTPUTDIR : ''}`;
          }

          term.sendText(sfdx);

          vscode.window.onDidCloseTerminal((terminal) => {
            if(terminal.name === 'SFDX'){
              this._view?.webview.postMessage({
                type: "sfdxClosed"
              });
            }
          });

          break;
        }

      }
    });
  }

  private getEditorInfo(): { text?: string; tooltip?: string; color?: string; } | null {
    const editor = vscode.window.activeTextEditor;

    // If no workspace is opened or just a single folder, we return without any status label
    // because our extension only works when more than one folder is opened in a workspace.
    if (!editor || !vscode.workspace.workspaceFolders || vscode.workspace.workspaceFolders.length < 2) {
        return null;
    }

    let text: string | undefined;
    let tooltip: string | undefined;
    let color: string | undefined;

    // If we have a file:// resource we resolve the WorkspaceFolder this file is from and update
    // the status accordingly.
    const resource = editor.document.uri;
    if (resource.scheme === 'file') {
        const folder = vscode.workspace.getWorkspaceFolder(resource);
        if (!folder) {
            text = `$(alert) <outside workspace> → ${basename(resource.fsPath)}`;
        } else {
            text = `$(file-submodule) ${basename(folder.uri.fsPath)} (${folder.index + 1} of ${vscode.workspace.workspaceFolders.length}) → $(file-code) ${basename(resource.fsPath)}`;
            tooltip = resource.fsPath;

            const multiRootConfigForResource = vscode.workspace.getConfiguration('multiRootSample', resource);
            color = multiRootConfigForResource.get('statusColor');
        }
    }

    return { text, tooltip, color };
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