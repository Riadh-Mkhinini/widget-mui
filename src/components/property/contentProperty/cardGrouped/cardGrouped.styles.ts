import { Box, styled, Avatar as MuiAvatar } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(1),
}));

export const Column = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
}));

export const Row = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
}));

export const Avatar = styled(MuiAvatar)<{ width?: number; height?: number }>(
  ({ width, height }) => ({
    width,
    height,
  })
);

export const Item = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
  padding: theme.spacing(0, 1),
  cursor: "pointer",
  userSelect: "none",
  height: 40,
  minHeight: 40,
  "&:hover": {
    background: theme.palette.action.hover,
    borderRadius: theme.spacing(1),
  },
}));
