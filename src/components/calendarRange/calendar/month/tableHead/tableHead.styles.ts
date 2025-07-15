import { styled } from "@mui/material";

export const Head = styled("thead")(() => ({}));

export const Row = styled("tr")(() => ({}));

export const Column = styled("th")(({ theme }) => ({
  textAlign: "center",
  width: 58,
  height: 58,
  [theme.breakpoints.down("sm")]: {
    width: 46,
    height: 46,
  },
}));
