import type { BoxProps } from "@mui/material";

export type GridItemProps = BoxProps & {
  isVisible?: boolean;
  children?: React.ReactNode;
};
