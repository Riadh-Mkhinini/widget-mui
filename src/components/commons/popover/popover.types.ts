import type {
  Breakpoint,
  PopoverProps as MuiPopoverProps,
} from "@mui/material";

export type PopoverProps = MuiPopoverProps & {
  mode?: "pop-up" | "default";
  children?: React.ReactNode;
  maxWidth?: false | Breakpoint;
};
