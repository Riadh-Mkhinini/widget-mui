import type { DayProps } from "@/engine/engine.types";

export type TableBodyProps = {
  mode?: "default" | "pop-up";
  daysOfMonth: Array<DayProps>;
  startDate?: DayProps | null;
  endDate?: DayProps | null;
  hoverList?: Array<string>;
  onClickDay?: (day: DayProps) => void;
  onMouseEnter?: (day: DayProps) => void;
};
