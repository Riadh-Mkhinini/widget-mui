import { format } from "date-fns";
import type { DayProps } from "@components";

export const generateDayProps = (day: Date): DayProps => {
  const isWeekend = day.getDay() === 0 || day.getDay() === 6;
  return {
    date: day,
    formated: format(day, "yyyy-MM-dd"),
    disabled: false,
    background: isWeekend ? "#F9FAFB" : "#ffffff",
  };
};
