import { styled, Typography as MuiTypography } from "@mui/material";

export const Body = styled("tbody")(() => ({}));

export const Row = styled("tr")(() => ({}));

export const Column = styled("td")<{ background?: string }>(
  ({ theme, background }) => ({
    background,
    width: 58,
    height: 58,
    minWidth: 58,
    minHeight: 58,
    textAlign: "center",
    padding: theme.spacing(1),
    position: "relative",
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      width: 46,
      height: 46,
      minWidth: 46,
      minHeight: 46,
    },
  })
);

export const HeaderDay = styled("span")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

export const FooterDay = styled("span")(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

export const Typography = styled(MuiTypography)<{
  fontsizelarge: number;
  fontsizesmall: number;
}>(({ theme, fontsizelarge, fontsizesmall }) => ({
  fontSize: fontsizelarge,
  [theme.breakpoints.down("sm")]: {
    fontSize: fontsizesmall,
  },
}));
