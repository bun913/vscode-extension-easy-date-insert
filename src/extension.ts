// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode"
import { DayConverter } from "./domain/dayConverter.js"

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    "easy-date-insert.today",
    () => {
      // debbug
      vscode.window.showInformationMessage("Hello World from easy-date-insert!")
      // const config = vscode.workspace.getConfiguration("easyDateInsert.format")
      // const format = config.get<string>("format") || "YYYY-MM-DD"
      //
      // const dayConverter = new DayConverter(format)
      // const today = dayConverter.calc()
      //
      // // Insert the date into the active editor
      // const editor = vscode.window.activeTextEditor
      // if (editor) {
      //   editor.edit((editBuilder) => {
      //     editBuilder.insert(editor.selection.active, today)
      //   })
      // }
    },
  )

  context.subscriptions.push(disposable)
}

// This method is called when your extension is deactivated
export function deactivate() {}
