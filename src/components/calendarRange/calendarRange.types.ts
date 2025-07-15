import type { DayProps } from "@/engine/engine.types";
import type { Locale } from "date-fns";

export type CalendarRangeProps = {
  startDate?: DayProps | null;
  endDate?: DayProps | null;
  disabled?: boolean;
  locale?: Locale;
  onClickDone?: (params: {
    startDate: DayProps | null;
    endDate: DayProps | null;
  }) => void;
};
