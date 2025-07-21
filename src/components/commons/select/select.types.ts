import type { JSX } from "react";
import type { SxProps, Theme } from "@mui/material";

export type SelectProps<T> = {
  value?: any;
  label?: string | null;
  placeholder?: string | null;
  data: Array<T>;
  variant?: "filled" | "outlined" | "standard";
  size?: "small" | "medium";
  heightPaper?: number | string;
  fullWidth?: boolean;
  disabled?: boolean;
  multiple?: boolean;
  color?: ColorInputProps;
  sxMenuItem?: SxProps<Theme>;
  sx?: SxProps<Theme>;
  IconComponent?: React.ElementType<any, keyof React.JSX.IntrinsicElements>;
  hideLabel?: boolean;
  sxContainer?: SxProps<Theme>;
  error?: boolean;
  helperText?: string;
  sxPlaceholder?: SxProps<Theme>;
  renderValue?: (value: Array<string>) => React.ReactNode;
  getOptionValue?: (item: T) => string | number;
  getOptionLabel?: (item: T) => JSX.Element | string | number;
  getOptionDisabled?: (item: T) => boolean;
  onChange?: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | (Event & { target: { value: string[]; name: string } }),
    child: React.ReactNode
  ) => void;
};

export type ColorInputProps =
  | "error"
  | "primary"
  | "secondary"
  | "info"
  | "success"
  | "warning"
  | undefined;
