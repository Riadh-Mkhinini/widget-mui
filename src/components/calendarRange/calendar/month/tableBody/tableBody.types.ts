import type { Locale } from "date-fns";
import type { DayProps } from "../../calendar.types";

export type TableBodyProps = {
  mode?: "default" | "pop-up";
  daysOfMonth: Array<DayProps>;
  startDate?: DayProps | null;
  endDate?: DayProps | null;
  hoverList?: Array<string>;
  locale?: Locale;
  onClickDay?: (day: DayProps) => void;
  onMouseEnter?: (day: DayProps) => void;
};
