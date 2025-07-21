import { styled } from "@mui/material";

export const Main = styled("div")<{
  maxWidth?: string | number;
  background?: string;
  backdropfilter?: string;
  padding?: string | number;
  borderRadius?: number;
}>(
  ({
    theme,
    background,
    backdropfilter,
    maxWidth,
    padding = 0,
    borderRadius,
  }) => ({
    display: "flex",
    flexDirection: "column",
    maxWidth,
    background: background,
    backdropFilter: backdropfilter,
    overflow: padding === 0 ? "initial" : "hidden",
    borderRadius: theme.spacing(borderRadius || 0),
    gap: theme.spacing(1),
    padding: theme.spacing(padding),
  })
);
