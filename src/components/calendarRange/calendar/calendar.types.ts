import type { CalendarConfig } from "@/engine/engine.types";
import type { Theme } from "@mui/material";
import type { Locale } from "date-fns";

export type CalendarProps = {
  id?: string;
  open: boolean;
  anchorEl?: HTMLButtonElement | null;
  daysList?: Array<string>;
  defaultStartDate?: DayProps | null;
  defaultEndDate?: DayProps | null;
  locale?: Locale;
  calendarConfig?: CalendarConfig;
  popUpButtonDone?: string;
  tags?: Array<Tag>;
  onClose?: () => void;
  onClickDone?: (params: {
    startDate: DayProps | null;
    endDate: DayProps | null;
  }) => void;
};

export type Tag = {
  label?: string;
  textColor?: string;
  background?: string;
};
export type DayProps = {
  date: Date;
  formated: string;
  type?: "PREVIOUS_DAY" | "NEXT_DAY";
  disabled?: boolean;
  background?: string;
  color?: string;
  weatherIcon?: React.ReactNode;
  temperature?: string;
  price?: string;
  group?: string;
};

//functions
export type GenerateDaysListParams = {
  theme: Theme;
  date: Date;
  monthNumberDisplays: number;
  weatherIcon: React.ReactNode;
};

export type GetMinMaxDateParams = {
  from: Date;
  maxYear: number;
  monthNumberDisplays: number;
};
