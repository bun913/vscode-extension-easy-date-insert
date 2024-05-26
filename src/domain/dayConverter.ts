import dayjs from "dayjs"

export class DayConverter {
  readonly format: string

  constructor(format: string) {
    this.format = format
  }

  calc(countOfDays: number = 0, unitOfDays: "day" | "month" | "year" = "day") {
    const now = dayjs()
    const added = now.add(countOfDays, unitOfDays)
    return added.format(this.format)
  }
  lastOfMonth() {
    return dayjs().endOf("month").format(this.format)
  }

  nextFriday() {
    const today = dayjs()
    // 次の金曜日までの日数
    let daysUntilNextFriday = 5 - today.day()
    // 今日が金曜日の場合は次の金曜日まで7日
    if (daysUntilNextFriday <= 0) {
      daysUntilNextFriday += 7
    }
    return today.add(daysUntilNextFriday, "day").format(this.format)
  }

  nextMonday() {
    const today = dayjs()
    // 次の月曜日までの日数
    let daysUntilNextMonday = 1 - today.day()
    // 今日が月曜日の場合は次の月曜日まで7日
    if (daysUntilNextMonday <= 0) {
      daysUntilNextMonday += 7
    }
    return today.add(daysUntilNextMonday, "day").format(this.format)
  }

  startOfNextMonth() {
    // 次の月の1日
    return dayjs().add(1, "month").startOf("month").format(this.format)
  }
}
