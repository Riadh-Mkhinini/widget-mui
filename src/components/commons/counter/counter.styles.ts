import { styled, ButtonBase, Box } from "@mui/material";

export const Main = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1),
}));

export const Container = styled("div")<{ mode: "rounded" | "circular" }>(
  ({ theme, mode }) => {
    if (mode === "circular") {
      return {
        display: "flex",
        height: 30,
      };
    }
    return {
      borderRadius: theme.spacing(1),
      height: 30,
      border: `1px solid ${theme.palette.divider}`,
      display: "flex",
      overflow: "hidden",
    };
  }
);

export const ContainerIcon = styled(ButtonBase)<{
  mode: "rounded" | "circular";
}>(({ theme, mode }) => {
  if (mode === "circular") {
    return {
      width: 30,
      border: `1px solid ${theme.palette.divider}`,
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "&:hover": {
        background: theme.palette.action.hover,
      },
    };
  }
  return {
    width: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {
      background: theme.palette.action.hover,
    },
  };
});

export const Content = styled("div")<{ mode: "rounded" | "circular" }>(
  ({ theme, mode }) => {
    if (mode === "circular") {
      return {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minWidth: 30,
        flex: 1,
        padding: theme.spacing(0, 1),
      };
    }
    return {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minWidth: 30,
      flex: 1,
      padding: theme.spacing(0, 1),
      borderRight: `1px solid ${theme.palette.divider}`,
      borderLeft: `1px solid ${theme.palette.divider}`,
      background: theme.palette.grey[50],
    };
  }
);
