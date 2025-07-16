import type { LayoutConfig, ParamsSize } from "@/engine/engine.types";
import type { SxProps, Theme } from "@mui/material";
import type { RangeDateProps } from "./content/rangeDate/rangeDate.types";
import type { SimpleProps } from "./content/simple/simple.types";
import type { InputProps } from "./content/input/input.types";

export type PreviewProps = {
  id?: string;
  open?: boolean;
  icon?: React.ReactNode;
  sizes?: ParamsSize;
  height?: number;
  borderColor?: string;
  layout?: LayoutConfig;
  sx?: SxProps<Theme>;
  onClickOpen?: (event: React.MouseEvent<HTMLButtonElement>) => void;
} & (SimpleType | RangeDateType | InputType);

export type SimpleType = { type: "simple" } & SimpleProps;

export type RangeDateType = { type: "rangeDate" } & RangeDateProps;

export type InputType = { type: "input" } & InputProps;
