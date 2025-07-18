import type { SxProps } from "@mui/material";
import type { ReactNode } from "react";

export type AccordionProps = {
  summary?: ReactNode;
  details?: ReactNode;
  endIcon?: ReactNode;
  sx?: SxProps;
  sxSummary?: SxProps;
  bgColorSelected?: string;
  contrastTextSelected?: string;
  defaultExpanded?: boolean;
  expanded?: boolean;
  onChange?: (event: React.SyntheticEvent, expanded: boolean) => void;
};
