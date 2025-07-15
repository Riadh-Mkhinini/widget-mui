import {
  addMonths,
  eachDayOfInterval,
  getDaysInMonth,
  format,
  addYears,
  sub,
} from "date-fns";
import type { Breakpoint } from "@mui/material";
import { groupBy } from "@helpers";
import type {
  DayProps,
  GenerateDaysListParams,
  GetMinMaxDateParams,
} from "./calendar.types";

export const getMinMaxDate = (params: GetMinMaxDateParams) => {
  const { from, maxYear, monthNumberDisplays } = params;
  const date = addYears(new Date(), maxYear);
  const maxDate = sub(date, { months: monthNumberDisplays + 1 });

  return {
    disabledPrevious:
      new Date().getFullYear() === from.getFullYear() &&
      new Date().getMonth() === from.getMonth(),
    disabledNext:
      from.getFullYear() === maxDate.getFullYear() &&
      from.getMonth() === maxDate.getMonth(),
  };
};

export const generateDaysList = (params: GenerateDaysListParams) => {
  const { theme, date, monthNumberDisplays } = params;
  const today = new Date();
  const start = new Date(date.getFullYear(), date.getMonth(), 1);
  const endDate = addMonths(start, monthNumberDisplays);
  const end = new Date(
    endDate.getFullYear(),
    endDate.getMonth(),
    getDaysInMonth(endDate)
  );
  const result = eachDayOfInterval({ start, end });
  const days: Array<DayProps> = result.map((currentDate) => {
    const isWeekend = currentDate.getDay() === 0 || currentDate.getDay() === 6;
    return {
      group: format(currentDate, "yyyy-MM"),
      date: currentDate,
      disabled: currentDate.setHours(0, 0, 0, 0) < today.setHours(0, 0, 0, 0),
      formated: format(currentDate, "yyyy-MM-dd"),
      background: isWeekend
        ? theme.palette.action.hover
        : theme.palette.background.paper,
      // weatherIcon: weatherIcon,
      // temperature: `${Math.round(Math.random() * (50 - 0))}°C`,
      // price: `${Math.round(Math.random() * (3000 - 0) + 50)}€`,
      color: isWeekend
        ? theme.palette.text.primary
        : theme.palette.text.primary,
    };
  });

  const dataGrouped = groupBy(days, "group");
  const data: Array<Array<DayProps>> = Object.keys(dataGrouped).map(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    (key) => dataGrouped[key]
  );

  return data;
};

export const getDatesInRange = (startDate: Date, endDate: Date) => {
  const date = new Date(startDate.getTime());

  const dates = [];

  while (date <= endDate) {
    const current = new Date(date);
    dates.push(format(current, "yyyy-MM-dd"));
    date.setDate(date.getDate() + 1);
  }

  return dates;
};

export const getMaxWidthPopup = (monthNumberDisplays: number): Breakpoint => {
  switch (monthNumberDisplays) {
    case 0:
      return "xs";
    case 1:
      return "md";
    case 2:
      return "xl";
    default:
      return "xl";
  }
};
