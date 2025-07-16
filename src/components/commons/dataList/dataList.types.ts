import type { GridSize, SxProps, Theme } from "@mui/material";

export type DataListProps<T> = {
  title?: string;
  subTitle?: string;
  valueSearch?: string;
  placeholderSearch?: string;
  mode?: "default" | "pop-up";
  showSearch?: boolean;
  size?: {
    xl?: GridSize;
    lg?: GridSize;
    md?: GridSize;
    sm?: GridSize;
    xs?: GridSize;
  };
  gap?: number;
  isGrid?: boolean;
  data: Array<T>;
  sxContent?: SxProps<Theme>;
  loading?: boolean;
  componentLoader?: React.ReactNode;
  renderItem: (params: { item: T; index: number }) => React.ReactNode;
  renderFooter?: () => React.ReactNode;
  onClickClose: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  onChangeSearch?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};
