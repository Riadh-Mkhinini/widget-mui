import type { DayProps } from "@/components/calendarRange/calendarRange";

export type RangeDateProps = {
  startDate?: DayProps | null;
  endDate?: DayProps | null;
  labelStartDate?: string;
  labelEndDate?: string;
  getLabelNights?: (days: number) => string | undefined;
};
