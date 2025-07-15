import { styled } from "@mui/material";

export const THead = styled("thead")(() => ({}));

export const Tr = styled("tr")(() => ({}));

export const Th = styled("th")(({ theme }) => ({
  textAlign: "center",
  height: 58,
  [theme.breakpoints.down("sm")]: {
    height: 46,
  },
}));
