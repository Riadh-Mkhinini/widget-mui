import type { DayProps } from "@/widget/widget.types";
import type { Locale } from "date-fns";

export type CalendarRangeProps = {
  defaultStartDate?: DayProps | null;
  defaultEndDate?: DayProps | null;
  disabled?: boolean;
  disabledWithoutColor?: boolean;
  locale?: Locale;
};
