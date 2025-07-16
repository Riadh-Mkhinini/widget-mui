import type { SxProps, Theme } from "@mui/material";

export type CardItemProps = {
  item: any;
  sizeImage?: number;
  sx?: SxProps<Theme>;
  showAvatar?: boolean;
  urlAvatar?: string;
  getOptionLabel: (item: any) => string;
  getOptionSubLabel?: (item: any) => string;
  getAvatarLabel?: (item: any) => string;
  onClick?: (item: any) => void;
};
