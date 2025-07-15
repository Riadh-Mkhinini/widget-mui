import type { DayProps, LayoutConfig, ParamsSize } from "@/engine/engine.types";
import type { SxProps, Theme } from "@mui/material";

export type PreviewProps = {
  id?: string;
  open?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  showIconSelect?: boolean;
  sizes?: ParamsSize;
  height?: number;
  background?: string;
  borderColor?: string;
  layout?: LayoutConfig;
  sx?: SxProps<Theme>;
  onClickOpen?: (event: React.MouseEvent<HTMLButtonElement>) => void;
} & (SimpleType | RangeDateType);

export type SimpleType = { type: "simple" } & {
  label?: string;
  placeholder?: string;
  value?: string | number | null;
};

export type RangeDateType = { type: "rangeDate" } & {
  startDate?: DayProps | null;
  endDate?: DayProps | null;
  labelStartDate?: string;
  labelEndDate?: string;
  getLabelNights?: (days: number) => string | undefined;
};
