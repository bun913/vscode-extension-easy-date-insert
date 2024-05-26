// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode"
import { DayConverter } from "./domain/dayConverter.js"

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  const todayCommand = vscode.commands.registerCommand(
    "easy-date-insert.today",
    () => {
      const config = vscode.workspace.getConfiguration("easyDateInsert")
      const format = config.get<string>("format") || "YYYY-MM-DD"

      const dayConverter = new DayConverter(format)
      const today = dayConverter.calc()

      // Insert the date into the active editor
      const editor = vscode.window.activeTextEditor
      if (editor) {
        editor.edit((editBuilder) => {
          editBuilder.insert(editor.selection.active, today)
        })
      }
    },
  )

  const tomorrowCommand = vscode.commands.registerCommand(
    "easy-date-insert.tomorrow",
    () => {
      const config = vscode.workspace.getConfiguration("easyDateInsert")
      const format = config.get<string>("format") || "YYYY-MM-DD"

      const dayConverter = new DayConverter(format)
      const tomorrow = dayConverter.calc(1)

      // Insert the date into the active editor
      const editor = vscode.window.activeTextEditor
      if (editor) {
        editor.edit((editBuilder) => {
          editBuilder.insert(editor.selection.active, tomorrow)
        })
      }
    },
  )

  const endOfMonthCommand = vscode.commands.registerCommand(
    "easy-date-insert.lastOfMonth",
    () => {
      const config = vscode.workspace.getConfiguration("easyDateInsert")
      const format = config.get<string>("format") || "YYYY-MM-DD"

      const dayConverter = new DayConverter(format)
      const endOfMonth = dayConverter.lastOfMonth()

      // Insert the date into the active editor
      const editor = vscode.window.activeTextEditor
      if (editor) {
        editor.edit((editBuilder) => {
          editBuilder.insert(editor.selection.active, endOfMonth)
        })
      }
    },
  )

  const nextFridayCommand = vscode.commands.registerCommand(
    "easy-date-insert.nextFriday",
    () => {
      const config = vscode.workspace.getConfiguration("easyDateInsert")
      const format = config.get<string>("format") || "YYYY-MM-DD"

      const dayConverter = new DayConverter(format)
      const nextFriday = dayConverter.nextFriday()

      // Insert the date into the active editor
      const editor = vscode.window.activeTextEditor
      if (editor) {
        editor.edit((editBuilder) => {
          editBuilder.insert(editor.selection.active, nextFriday)
        })
      }
    },
  )

  const startOfNextMonthCommand = vscode.commands.registerCommand(
    "easy-date-insert.startOfNextMonth",
    () => {
      const config = vscode.workspace.getConfiguration("easyDateInsert")
      const format = config.get<string>("format") || "YYYY-MM-DD"

      const dayConverter = new DayConverter(format)
      const startOfNextMonth = dayConverter.startOfNextMonth()

      // Insert the date into the active editor
      const editor = vscode.window.activeTextEditor
      if (editor) {
        editor.edit((editBuilder) => {
          editBuilder.insert(editor.selection.active, startOfNextMonth)
        })
      }
    },
  )

  const nextMondayCommand = vscode.commands.registerCommand(
    "easy-date-insert.nextMonday",
    () => {
      const config = vscode.workspace.getConfiguration("easyDateInsert")
      const format = config.get<string>("format") || "YYYY-MM-DD"

      const dayConverter = new DayConverter(format)
      const nextMonday = dayConverter.nextMonday()

      // Insert the date into the active editor
      const editor = vscode.window.activeTextEditor
      if (editor) {
        editor.edit((editBuilder) => {
          editBuilder.insert(editor.selection.active, nextMonday)
        })
      }
    },
  )

  const insertDateCommand = vscode.commands.registerCommand(
    "easy-date-insert.insertDate",
    async () => {
      const countOfDays = await vscode.window.showInputBox({
        prompt: "Please enter the number of days to add",
        placeHolder: "Number of days",
      })
      const unitOfDays = await vscode.window.showQuickPick(
        ["day", "week", "month", "year"],
        {
          placeHolder: "Select the unit of days to add",
        },
      )
      if (countOfDays === undefined || unitOfDays === undefined) {
        return
      }
      // validate countOfDays
      if (isNaN(Number(countOfDays))) {
        vscode.window.showErrorMessage("Please enter a number.1 ~ 3650")
        return
      }
      if (Number(countOfDays) < 1 || Number(countOfDays) > 3650) {
        vscode.window.showErrorMessage("Please enter a number.1 ~ 3650")
        return
      }

      const config = vscode.workspace.getConfiguration("easyDateInsert")
      const format = config.get<string>("format") || "YYYY-MM-DD"

      const dayConverter = new DayConverter(format)
      const date = dayConverter.calc(
        Number(countOfDays),
        unitOfDays as "day" | "month" | "year",
      )

      // Insert the date into the active editor
      const editor = vscode.window.activeTextEditor
      if (editor) {
        editor.edit((editBuilder) => {
          editBuilder.insert(editor.selection.active, date)
        })
      }
    },
  )

  context.subscriptions.push(
    todayCommand,
    tomorrowCommand,
    endOfMonthCommand,
    nextFridayCommand,
    startOfNextMonthCommand,
    nextMondayCommand,
    insertDateCommand,
  )
}

// This method is called when your extension is deactivated
export function deactivate() {}
