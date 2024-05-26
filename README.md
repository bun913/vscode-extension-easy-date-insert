# easy-date-insert README

Extension for easy date entry.

![Demo](https://github.com/bun913/vscode-extension-easy-date-insert/raw/main/docs/images/easy-date-insert.gif)

## Features

You can use the following commands to insert date.

- `easy-date-insert.insertDate` : Insert today's date.
- `easy-date-insert.tomorrow` : Insert tomorrow's date.
- `easy-date-insert.lastOfMonth` : Insert the last day of the month.
- `easy-date-insert.nextFriday` : Insert the date of the next Friday.
- `easy-date-insert.nextMonday` : Insert the date of the next Monday.
- `easy-date-insert.startOfNextMonth` : Insert the date of the first day of the next month.
- `easy-date-insert.insertDate` : Insert added days from today.You can choose the unit of days, weeks, months, and years.

### Date format

You can choose the date format from the following.

![Date format setting](https://github.com/bun913/vscode-extension-easy-date-insert/raw/main/docs/images/easy-insert-date-setting-format.png)


### Shortcuts

You can set the shortcut key for each command.

```
// Your keybindins.json
{
  // example for tommorow command
  {
    "key": "cmd+shift+d",
    "command": "easy-date-insert.tomorrow"
  }
  // You can set another command in the same way.
}
```

## Release Notes

Users appreciate release notes as you update your extension.

### 0.8.0

Initial release of ...
