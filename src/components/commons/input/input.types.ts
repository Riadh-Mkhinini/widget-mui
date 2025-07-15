import type { SxProps, Theme } from "@mui/material";
import type { FieldPath, FieldValues, RegisterOptions } from "react-hook-form";

export type InputProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  name: TName;
  rules?: Omit<
    RegisterOptions<TFieldValues, TName>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
  label?: React.ReactNode;
  placeholder?: string | null;
  fullWidth?: boolean;
  multiline?: boolean;
  hideLabel?: boolean;
  rows?: number;
  maxRows?: number;
  type?: React.HTMLInputTypeAttribute;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  disabled?: boolean;
  size?: "small" | "medium";
  variant?: "filled" | "outlined";
  color?: ColorInputProps;
  autoFocus?: boolean;
  sxContainer?: SxProps<Theme>;
  sx?: SxProps<Theme>;
  autoComplete?: string;
  getFieldValue?: (value: any) => string;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onFocus?: (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>
  ) => void;
  onBlur?: (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>
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
