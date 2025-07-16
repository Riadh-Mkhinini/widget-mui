import type { EngineSize } from "@/engine/engine.types";
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

export const Badge = styled("div")<{
  background?: string;
  bordercolor?: string;
  size?: EngineSize;
}>(({ theme, background, bordercolor, size }) => {
  return {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    border: `1px solid ${bordercolor || theme.palette.divider}`,
    borderRadius: theme.spacing(2),

    padding: "4px 6px",
    display: size === "sm" ? "none" : "flex",
    alignItems: "center",
    gap: theme.spacing(1),
    zIndex: 99,
    background: background,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  };
});
