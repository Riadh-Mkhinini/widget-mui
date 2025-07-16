import type { EngineSize } from "@/engine/engine.types";
import {
  styled,
  Box,
  Typography as MuiTypography,
  Button as MuiButton,
} from "@mui/material";

export const Button = styled(MuiButton)<{
  width?: number;
  radius?: number;
  height?: number;
  mode?: "button" | "icon-button";
}>(({ theme, width, radius = 0.5, height, mode }) => ({
  background: theme.palette.primary.main,
  minWidth: width,
  height,
  display: "flex",
  alignItems: "center",
  borderRadius: theme.spacing(radius),
  padding: mode === "button" ? theme.spacing(0, 2) : undefined,
  "&:hover": {
    background: theme.palette.primary.dark,
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

export const ContainerIcon = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const Typography = styled(MuiTypography)<{
  size: EngineSize;
  mode?: "button" | "icon-button";
}>(({ theme, size, mode }) => {
  let defaultStyle = {};
  if (mode === "button") {
    defaultStyle = { display: "flex" };
  } else {
    if (size === "xl" || size === "lg") {
      defaultStyle = { display: "none" };
    } else if (size === "md" || size === "sm") {
      defaultStyle = { display: "flex" };
    }
  }
  return {
    ...defaultStyle,
    color: theme.palette.primary.contrastText,
    fontSize: 18,
    fontWeight: "500",
    marginLeft: theme.spacing(1),
    textTransform: "initial",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  };
});
