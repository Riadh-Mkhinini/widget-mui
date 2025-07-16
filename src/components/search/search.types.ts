import type { SxProps, Theme } from "@mui/material";

export type SearchProps = {
  sx?: SxProps<Theme>;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};
