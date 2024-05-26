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
}
