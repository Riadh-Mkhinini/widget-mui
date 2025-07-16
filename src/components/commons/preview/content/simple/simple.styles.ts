import { styled } from "@mui/material";

export const Container = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  flex: 1,
}));

export const ContainerIcon = styled("div")<{ open?: boolean }>(({ open }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  transition: "all .3s",
  transform: open ? "rotate(180deg)" : "rotate(0deg)",
}));
