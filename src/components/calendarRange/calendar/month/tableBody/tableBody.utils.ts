import { format } from "date-fns";
import type { DayProps } from "../../calendar.types";

export function chunk<T>(arr: Array<T>, chunkSize = 7) {
  const res = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    res.push(chunk);
  }
  return res;
}

export const addFakeItem = (days: Array<DayProps>): Array<DayProps> => {
  const firstDay = days[0].date;
  let dayOfWeekFirstDay = firstDay.getDay();
  dayOfWeekFirstDay = dayOfWeekFirstDay === 0 ? 7 : dayOfWeekFirstDay; // change sunday index from 0 to 7

  if (dayOfWeekFirstDay > 1) {
    const fakeElements: Array<DayProps> = new Array(dayOfWeekFirstDay - 1)
      .fill(-1)
      .map((_, index) => {
        const previousDay = getPreviousDay(firstDay, index + 1);
        return {
          date: previousDay,
          formated: format(previousDay, "yyyy-MM-dd"),
          type: "PREVIOUS_DAY",
          disabled: true,
        };
      });

    days = [...fakeElements.reverse(), ...days];
  }

  const lastDay = days[days.length - 1].date;
  let dayOfWeekLastDay = lastDay.getDay();
  dayOfWeekLastDay = dayOfWeekLastDay === 0 ? 7 : dayOfWeekLastDay;

  if (dayOfWeekLastDay !== 7) {
    const fakeElements: Array<DayProps> = new Array(7 - dayOfWeekLastDay)
      .fill(-1)
      .map((_, index) => {
        const nextDay = getNextDay(lastDay, index + 1);
        return {
          date: nextDay,
          formated: format(nextDay, "yyyy-MM-dd"),
          type: "NEXT_DAY",
          disabled: true,
        };
      });

    days = [...days, ...fakeElements];
  }

  return days;
};

export const getNextDay = (date = new Date(), number = 1) => {
  const previous = new Date(date.getTime());
  previous.setDate(date.getDate() + number);

  return previous;
};

export const getPreviousDay = (date = new Date(), number = 1) => {
  const previous = new Date(date.getTime());
  previous.setDate(date.getDate() - number);

  return previous;
};
