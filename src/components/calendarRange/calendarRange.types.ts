import type { Locale } from "date-fns";
import type { DayProps } from "./calendarRange";

export type CalendarRangeProps = {
  startDate?: DayProps | null;
  endDate?: DayProps | null;
  locale?: Locale;
  onClickDone?: (params: {
    startDate: DayProps | null;
    endDate: DayProps | null;
  }) => void;
};
