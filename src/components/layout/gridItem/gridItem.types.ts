import type { BoxProps } from "@mui/material";

export type GridItemProps = BoxProps & {
  hide?: boolean;
  children?: React.ReactNode;
};
