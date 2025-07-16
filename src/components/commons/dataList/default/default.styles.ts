import { styled, Box, IconButton as MuiIconButton } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  minWidth: 360,
  height: "100%",
  [theme.breakpoints.down("sm")]: {
    maxWidth: "100%",
  },
  [theme.breakpoints.down("xs")]: {
    maxWidth: "100%",
  },
}));

export const Header = styled("div")<{ showSearch?: boolean }>(
  ({ theme, showSearch }) => {
    if (showSearch) {
      return {
        padding: theme.spacing(0, 1),
        borderBottom: `1px solid ${theme.palette.divider}`,
        [theme.breakpoints.down("sm")]: {
          padding: theme.spacing(1),
        },
        position: "relative",
      };
    }
    return {
      display: "none",
      [theme.breakpoints.down("sm")]: {
        display: "flex",
        padding: theme.spacing(1),
        borderBottom: `1px solid ${theme.palette.divider}`,
      },
      position: "relative",
    };
  }
);

export const HeaderTop = styled(Box)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "column",
  },
}));

export const IconButton = styled(MuiIconButton)(() => ({
  position: "absolute",
  top: 4,
  right: 4,
}));

export const Content = styled("div")<{ showSearch?: boolean }>(
  ({ theme, showSearch }) => ({
    display: "flex",
    flexDirection: "column",
    overflow: "auto",
    maxHeight: 300,
    [theme.breakpoints.down("sm")]: {
      maxHeight: showSearch ? "calc(100% - 114px)" : "calc(100% - 60px)",
    },
  })
);
