import type { EngineSize } from "@/widget/widget.types";
import { Box, styled } from "@mui/material";

export const Row = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  flex: 1,
}));

export const Column = styled(Box)({
  display: "flex",
  flexDirection: "column",
  flex: 1,
});

export const ContainerIcon = styled("div")<{ open?: boolean }>(({ open }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  transition: "all .3s",
  transform: open ? "rotate(180deg)" : "rotate(0deg)",
}));

export const Badge = styled("div")<{
  disabled?: boolean;
  background?: string;
  bordercolor?: string;
  size?: EngineSize;
}>(({ theme, disabled, background, bordercolor, size }) => {
  return {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    border: `1px solid ${bordercolor || theme.palette.divider}`,
    borderRadius: theme.spacing(2),
    height: 32,
    minWidth: 80,
    padding: "0 8px",
    display: size === "xs" ? "none" : "flex",
    alignItems: "center",
    gap: theme.spacing(1),
    zIndex: 99,
    background: disabled ? theme.palette.grey[200] : background,
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  };
});
