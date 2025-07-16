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
  ({ theme, showSearch }) => ({
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(2),
    gap: theme.spacing(1),
    paddingBottom: showSearch ? theme.spacing(1) : theme.spacing(2),
    borderBottom: `1px solid ${theme.palette.divider}`,
    position: "relative",
  })
);

export const HeaderTop = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
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
    maxHeight: "60vh",
    padding: theme.spacing(2, 1),
    [theme.breakpoints.down("sm")]: {
      padding: 0,
      maxHeight: showSearch ? "calc(100% - 122px)" : "calc(100% - 75px)",
    },
  })
);
