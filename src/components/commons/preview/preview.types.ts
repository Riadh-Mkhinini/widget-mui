import type { DayProps, LayoutConfig, ParamsSize } from "@/widget/widget.types";
import type { SxProps, Theme } from "@mui/material";

export type PreviewProps = {
  id?: string;
  open?: boolean;
  disabled?: boolean;
  disabledWithoutColor?: boolean;
  icon?: React.ReactNode;
  showIconSelect?: boolean;
  sizes?: ParamsSize;
  height?: number;
  background?: string;
  borderColor?: string;
  layout?: LayoutConfig;
  sx?: SxProps<Theme>;
  onClickOpen?: (event: React.MouseEvent<HTMLButtonElement>) => void;
} & (ButtonType | SimpleType | RangeDateType | LinkType | InputType);

export type ButtonType = { type: "button" } & {
  textButton?: string;
  textButtonColor?: string;
  hoverButton?: string;
  right?: React.ReactNode;
};
export type SimpleType = { type: "simple" } & {
  label?: string;
  placeholder?: string;
  value?: string | number | null;
};

export type LinkType = { type: "link" } & {
  label?: string;
  value?: string | number | null;
};

export type RangeDateType = { type: "rangeDate" } & {
  startDate?: DayProps | null;
  endDate?: DayProps | null;
  labelStartDate?: string;
  labelEndDate?: string;
  getLabelNights?: (days: number) => string | undefined;
};

export type InputType = { type: "input" } & {
  name: string;
  placeholder?: string;
  value?: string | number | null;
};
