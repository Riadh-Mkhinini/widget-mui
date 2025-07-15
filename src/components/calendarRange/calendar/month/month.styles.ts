import { styled } from "@mui/material";

export const Section = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const Header = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",

  [theme.breakpoints.down("md")]: {
    position: "sticky",
    top: 0,
    zIndex: 2,
    background: theme.palette.common.white,
    height: 72,
  },
}));

export const Table = styled("table")(() => ({
  borderCollapse: "collapse",
  borderSpacing: 0,
}));
