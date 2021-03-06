/**
 * @description: Main file which encripts all files
 * @author renanfamous@gmail.com
 */

/* Importing the vscode module, the getNonce function and the basename function from the path module. */
import * as vscode from "vscode";
import { getNonce } from "./getNonce";
import { basename } from "path";

export class SidebarProvider implements vscode.WebviewViewProvider {
  /* Main variables */
  _view?: vscode.WebviewView;
  _doc?: vscode.TextDocument;
  _sfdxetName?: string;
  _sfdxetVersion?: string;

  /**
   * The constructor function is a special function that is called when an object is created from a
   * class
   * @param _extensionUri - The URI of the extension.
   */
  constructor(private readonly _extensionUri: vscode.Uri) {}

  /**
   * It resolves the webview view and sets the view, the extension name and the extension version
   * @param webviewView - vscode.WebviewView
   */
  public resolveWebviewView(webviewView: vscode.WebviewView) {
    /* Setting the view, the extension name and the extension version. */
    this._view = webviewView;
    this._sfdxetName = "SFDX UI";
    this._sfdxetVersion = "v0.5.0";

    /* Allowing the webview to run scripts and it is setting the localResourceRoots to the
    extensionUri. */
    webviewView.webview.options = {
      // Allow scripts in the webview
      enableScripts: true,
      localResourceRoots: [this._extensionUri],
    };

    /* Setting the HTML content of the webview. */
    webviewView.webview.html = this._getHtmlForWebview(webviewView.webview);

    /* The above code is listening for messages from the webview. */
    webviewView.webview.onDidReceiveMessage(async (data) => {
      switch (data.type) {
        /* Showing an information message. */
        case "onInfo": {
          if (!data.value) {
            return;
          }
          vscode.window.showInformationMessage(data.value);
          break;
        }

        /* Showing an error message. */
        case "onError": {
          if (!data.value) {
            return;
          }
          vscode.window.showErrorMessage(data.value);
          break;
        }

        /* Showing a dialog to select a folder. */
        case "onShowFolderPick": {
          const folderUris = await vscode.window.showOpenDialog({
            canSelectFolders: true,
            canSelectFiles: false,
            canSelectMany: false,
            openLabel: "Select folder",
          });
          if (!folderUris) {
            return null;
          }

          this._view?.webview.postMessage({
            type: "folderUri",
            value: folderUris,
          });

          break;
        }

        /* Showing a dialog to select a file. */
        case "onShowFilePick": {
          const fileUri = await vscode.window.showOpenDialog({
            canSelectFolders: false,
            canSelectFiles: true,
            canSelectMany: false,
            openLabel: "Select File",
          });
          if (!fileUri) {
            return null;
          }

          this._view?.webview.postMessage({
            type: "fileUri",
            value: fileUri,
          });

          break;
        }

        /* Reading the alias.json file from the .sfdx folder and sending the orgs to the webview. */
        case "onGetAliasUsers": {
          const fs = require("fs");
          const path = require("path");

          const homedir = require("os").homedir();

          const filePath = path.join(homedir + "/.sfdx/", `alias.json`);

          let fileExists = false;

          try {
            const file = fs.readFileSync(filePath);
            fileExists = file ? true : false;

            const fileJSON = JSON.parse(file);
            if (fileJSON) {
              this._view?.webview.postMessage({
                type: "aliasJSON",
                value: fileJSON.orgs,
              });
            }
          } catch (error) {
            console.error(`${this._sfdxetName}: File ${filePath} not found.`);
          }

          break;
        }

        /* Creating a terminal and sending the command to it. */
        case "onTerminalSFDX": {
          let term = vscode.window.createTerminal("SFDX");
          term.show();
          term.sendText(`echo "- Starting SFDX..." && echo`);

          console.log(JSON.stringify(data));

          let sfdx = "sfdx " + data.terminal;

          // JSON
          if (data.vJSONPath) {
            const fs = require("fs");
            const path = require("path");

            const filePath = path.join(
              data.vJSONPath ? data.vJSONPath : vscode.workspace.rootPath,
              `${data.vJSON ? data.vJSON : "output"}.json`
            );

            let fileExists = false;

            try {
              fileExists = fs.readFileSync(filePath) ? true : false;

              if (fileExists === true) {
                fs.unlink(filePath, (err: any) => {
                  if (err) {
                    console.error(
                      `${this._sfdxetName}: Error while deleting the file ${filePath}.`
                    );
                    console.error(err);
                  }

                  console.info(
                    `${this._sfdxetName}: Successfully deleted ${filePath}.`
                  );
                });
              }
            } catch (error) {
              console.error(`${this._sfdxetName}: File ${filePath} not found.`);
            }

            sfdx += ` ${data.pJSON} > ${
              data.vJSONPath ? data.vJSONPath + "/" : ""
            }${data.vJSON ? data.vJSON : "output"}.json`;
          }

          term.sendText(sfdx);

          vscode.window.onDidCloseTerminal((terminal) => {
            if (terminal.name === "SFDX") {
              this._view?.webview.postMessage({
                type: "sfdxClosed",
              });
            }
          });

          break;
        }

        /* Showing a dialog to confirm an action. */
        case "onConfirm": {
          vscode.window
            .showInformationMessage(
              data.title,
              ...[data.confirmLabel, data.declineLabel]
            )
            .then((answer) => {
              if (answer === data.confirmLabel) {
                this._view?.webview.postMessage({
                  type: "onConfirmRet",
                  value: true,
                });
              } else {
                this._view?.webview.postMessage({
                  type: "onConfirmRet",
                  value: false,
                });
              }
            });

          break;
        }
      }
    });
  }

  /**
   * It returns an object with the following properties:
   *
   * - text: the text to display in the status bar
   * - tooltip: the tooltip to display when hovering over the status bar
   * - color: the color to use for the status bar
   *
   * The function returns null if there's no active text editor or if there's only one workspace folder
   * @returns An object with the following properties:
   * - text
   * - tooltip
   * - color
   */
  private getEditorInfo(): {
    text?: string;
    tooltip?: string;
    color?: string;
  } | null {
    /* Getting the active text editor. */
    const editor = vscode.window.activeTextEditor;

    // If no workspace is opened or just a single folder, we return without any status label
    // because our extension only works when more than one folder is opened in a workspace.
    if (
      !editor ||
      !vscode.workspace.workspaceFolders ||
      vscode.workspace.workspaceFolders.length < 2
    ) {
      return null;
    }

    /* Declaring the variables text, tooltip and color as strings and undefined. */
    let text: string | undefined;
    let tooltip: string | undefined;
    let color: string | undefined;

    // If we have a file:// resource we resolve the WorkspaceFolder this file is from and update
    // the status accordingly.
    const resource = editor.document.uri;
    if (resource.scheme === "file") {
      const folder = vscode.workspace.getWorkspaceFolder(resource);
      if (!folder) {
        text = `$(alert) <outside workspace> ??? ${basename(resource.fsPath)}`;
      } else {
        text = `$(file-submodule) ${basename(folder.uri.fsPath)} (${
          folder.index + 1
        } of ${
          vscode.workspace.workspaceFolders.length
        }) ??? $(file-code) ${basename(resource.fsPath)}`;
        tooltip = resource.fsPath;

        const multiRootConfigForResource = vscode.workspace.getConfiguration(
          "multiRootSample",
          resource
        );
        color = multiRootConfigForResource.get("statusColor");
      }
    }

    return { text, tooltip, color };
  }

  /**
   * This function is called when the panel is revived from the state where the extension was
   * deactivated.
   * @param panel - vscode.WebviewView - The panel that was revived.
   */
  public revive(panel: vscode.WebviewView) {
    this._view = panel;
  }

  /**
   * It returns a string that contains the HTML for the webview
   * @param webview - vscode.Webview - The webview that will be used to display the HTML.
   * @returns The HTML for the webview.
   */
  private _getHtmlForWebview(webview: vscode.Webview) {
    // JS
    const scriptUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this._extensionUri, "out/compiled", "sidebar.js")
    );

    // CSS
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
