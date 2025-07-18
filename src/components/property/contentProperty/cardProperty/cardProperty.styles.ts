import { styled, Avatar as MuiAvatar, alpha } from "@mui/material";

export const Item = styled("span")<{
  minHeight?: number;
}>(({ theme, minHeight }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
  padding: theme.spacing(0, 1),
  borderRadius: theme.spacing(1),
  cursor: "pointer",
  userSelect: "none",
  border: `1px solid transparent`,
  minHeight,
  "&:hover": {
    background: alpha(theme.palette.primary.main, 0.1),
    border: `1px solid ${theme.palette.primary.light}`,
    ".active": {
      color: theme.palette.primary.main,
    },
  },
}));

export const Avatar = styled(MuiAvatar)<{ width?: number; height?: number }>(
  ({ width, height }) => ({
    width,
    height,
  })
);
