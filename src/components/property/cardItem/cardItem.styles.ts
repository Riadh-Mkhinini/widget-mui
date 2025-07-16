import { styled, Avatar as MuiAvatar } from "@mui/material";

export const Item = styled("span")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
  padding: theme.spacing(0, 1),
  cursor: "pointer",
  userSelect: "none",
  minHeight: 44,
  "&:hover": {
    background: theme.palette.action.hover,
  },
}));

export const Avatar = styled(MuiAvatar)<{ width?: number; height?: number }>(
  ({ width, height }) => ({
    width,
    height,
  })
);
