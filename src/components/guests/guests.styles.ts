import { Stack, styled } from "@mui/material";

export const Container = styled(Stack)(() => ({
  minWidth: 320,
}));

export const Footer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: theme.spacing(2),
  padding: theme.spacing(1),
}));

export const Content = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  overflow: "auto",
  maxHeight: 400,
  gap: theme.spacing(1),
  padding: theme.spacing(1),
  [theme.breakpoints.down("sm")]: {
    maxHeight: "100vh",
    height: "calc(100vh - 127px)",
  },
}));
