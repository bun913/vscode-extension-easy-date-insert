import { DayConverter } from "../../domain/dayConverter.js"
import { vi } from "vitest"
import { describe, it, expect } from "vitest"

describe("calc", () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  describe("format property when day is 2021-01-02", () => {
    it("returns 2021-01-02 when format is YYYY-MM-DD", () => {
      vi.setSystemTime(new Date("2021-01-02"))
      const command = new DayConverter("YYYY-MM-DD")

      expect(command.calc()).toBe("2021-01-02")
    })

    it("retrurns 2021/01/02 when format is YYYY/MM/DD", () => {
      vi.setSystemTime(new Date("2021-01-02"))
      const command = new DayConverter("YYYY/MM/DD")

      expect(command.calc()).toBe("2021/01/02")
    })

    it("returns 01-02 when format is MM-DD", () => {
      vi.setSystemTime(new Date("2021-01-02"))
      const command = new DayConverter("MM-DD")

      expect(command.calc()).toBe("01-02")
    })

    it("return 01/02/2024 when format is MM/DD/YYYY", () => {
      vi.setSystemTime(new Date("2021-01-02"))
      const command = new DayConverter("MM/DD/YYYY")

      expect(command.calc()).toBe("01/02/2021")
    })

    it("return 2021年01月02日 when format is YYYY年MM月DD日", () => {
      vi.setSystemTime(new Date("2021-01-02"))
      const command = new DayConverter("YYYY年MM月DD日")

      expect(command.calc()).toBe("2021年01月02日")
    })

    it("21年01月02日 when format is YY年MM月DD日", () => {
      vi.setSystemTime(new Date("2021-01-02"))
      const command = new DayConverter("YY年MM月DD日")

      expect(command.calc()).toBe("21年01月02日")
    })

    it("01月02日 when format is MM月DD日", () => {
      vi.setSystemTime(new Date("2021-01-02"))
      const command = new DayConverter("MM月DD日")

      expect(command.calc()).toBe("01月02日")
    })
  })

  describe("calc when day is 2021-01-01", () => {
    it("return today's date(2021-01-01)", () => {
      vi.setSystemTime(new Date("2021-01-01"))

      const command = new DayConverter("YYYY-MM-DD")
      const date = command.calc()

      expect(date).toBe("2021-01-01")
    })

    it("return tomorrow's date(2021-01-02)", () => {
      vi.setSystemTime(new Date("2021-01-01"))

      const command = new DayConverter("YYYY-MM-DD")
      const date = command.calc(1)

      expect(date).toBe("2021-01-02")
    })

    it("return yesterday's date(2020-12-31)", () => {
      vi.setSystemTime(new Date("2021-01-01"))

      const command = new DayConverter("YYYY-MM-DD")
      const date = command.calc(-1)

      expect(date).toBe("2020-12-31")
    })

    it("return 1 month after date(2021-02-01)", () => {
      vi.setSystemTime(new Date("2021-01-01"))

      const command = new DayConverter("YYYY-MM-DD")
      const date = command.calc(1, "month")

      expect(date).toBe("2021-02-01")
    })

    it("return 1 year after date(2022-01-01)", () => {
      vi.setSystemTime(new Date("2021-01-01"))

      const command = new DayConverter("YYYY-MM-DD")
      const date = command.calc(1, "year")

      expect(date).toBe("2022-01-01")
    })
  })

  describe("calc when day is leap year 2020-02-29", () => {
    it("return today's date(2020-02-29)", () => {
      vi.setSystemTime(new Date("2020-02-29"))

      const command = new DayConverter("YYYY-MM-DD")
      const date = command.calc()

      expect(date).toBe("2020-02-29")
    })

    it("return tomorrow's date(2020-03-01)", () => {
      vi.setSystemTime(new Date("2020-02-29"))

      const command = new DayConverter("YYYY-MM-DD")
      const date = command.calc(1)

      expect(date).toBe("2020-03-01")
    })

    it("return 1 month after date(2020-03-29)", () => {
      vi.setSystemTime(new Date("2020-02-29"))

      const command = new DayConverter("YYYY-MM-DD")
      const date = command.calc(1, "month")

      expect(date).toBe("2020-03-29")
    })

    it("return 1 year after date(2021-02-28)", () => {
      vi.setSystemTime(new Date("2020-02-29"))

      const command = new DayConverter("YYYY-MM-DD")
      const date = command.calc(1, "year")

      expect(date).toBe("2021-02-28")
    })
  })
})

describe("endOfMonth", () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  describe("when day is 2021-01-01", () => {
    it("return end of month(2021-01-31)", () => {
      vi.setSystemTime(new Date("2021-01-01"))

      const command = new DayConverter("YYYY-MM-DD")
      const date = command.lastOfMonth()

      expect(date).toBe("2021-01-31")
    })
  })

  describe("when day is 2021-01-31", () => {
    it("return end of month(2021-01-31)", () => {
      vi.setSystemTime(new Date("2021-01-31"))

      const command = new DayConverter("YYYY-MM-DD")
      const date = command.lastOfMonth()

      expect(date).toBe("2021-01-31")
    })
  })

  describe("when day is 2020-02-01(02/29 is leap day)", () => {
    it("return end of month(2020-02-29)", () => {
      vi.setSystemTime(new Date("2020-02-01"))

      const command = new DayConverter("YYYY-MM-DD")
      const date = command.lastOfMonth()

      expect(date).toBe("2020-02-29")
    })
  })
})

describe("nextFriday", () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  describe("when day is 2021-01-01(Friday)", () => {
    it("return end of week(2021-01-01 Friday)", () => {
      vi.setSystemTime(new Date("2021-01-01"))

      const command = new DayConverter("YYYY-MM-DD")
      const date = command.nextFriday()

      expect(date).toBe("2021-01-08")
    })
  })

  describe("when day is 2021-01-02 Saturday", () => {
    it("return end of week(2021-01-08)", () => {
      vi.setSystemTime(new Date("2021-01-02"))

      const command = new DayConverter("YYYY-MM-DD")
      const date = command.nextFriday()

      expect(date).toBe("2021-01-08")
    })
  })

  describe("when day is 2021-01-04 Monday", () => {
    it("return end of week(2021-01-08)", () => {
      vi.setSystemTime(new Date("2021-01-04"))

      const command = new DayConverter("YYYY-MM-DD")
      const date = command.nextFriday()

      expect(date).toBe("2021-01-08")
    })
  })
})

describe("nextMonday", () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  describe("when day is 2021-01-01(Friday)", () => {
    it("return end of week(2021-01-04 Monday)", () => {
      vi.setSystemTime(new Date("2021-01-01"))

      const command = new DayConverter("YYYY-MM-DD")
      const date = command.nextMonday()

      expect(date).toBe("2021-01-04")
    })
  })

  describe("when day is 2021-01-02 Saturday", () => {
    it("return end of week(2021-01-04)", () => {
      vi.setSystemTime(new Date("2021-01-02"))

      const command = new DayConverter("YYYY-MM-DD")
      const date = command.nextMonday()

      expect(date).toBe("2021-01-04")
    })
  })

  describe("when day is 2021-01-04 Monday", () => {
    it("return end of week(2021-01-11)", () => {
      vi.setSystemTime(new Date("2021-01-04"))

      const command = new DayConverter("YYYY-MM-DD")
      const date = command.nextMonday()

      expect(date).toBe("2021-01-11")
    })
  })
})

describe("startOfNextMonth", () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  describe("when day is 2021-01-01", () => {
    it("return start of month(2021-02-01)", () => {
      vi.setSystemTime(new Date("2021-01-01"))

      const command = new DayConverter("YYYY-MM-DD")
      const date = command.startOfNextMonth()

      expect(date).toBe("2021-02-01")
    })
  })

  describe("when day is 2021-01-31", () => {
    it("return start of month(2021-02-01)", () => {
      vi.setSystemTime(new Date("2021-01-31"))

      const command = new DayConverter("YYYY-MM-DD")
      const date = command.startOfNextMonth()

      expect(date).toBe("2021-02-01")
    })
  })

  describe("when day is 2020-02-01(02/29 is leap day)", () => {
    it("return start of month(2020-03-01)", () => {
      vi.setSystemTime(new Date("2020-02-01"))

      const command = new DayConverter("YYYY-MM-DD")
      const date = command.startOfNextMonth()

      expect(date).toBe("2020-03-01")
    })
  })
})
