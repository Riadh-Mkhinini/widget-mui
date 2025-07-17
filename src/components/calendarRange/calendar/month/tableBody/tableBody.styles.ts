import { styled, Typography as MuiTypography } from "@mui/material";

export const TBody = styled("tbody")(() => ({}));

export const Tr = styled("tr")(() => ({}));

export const Td = styled("td")<{
  background?: string;
  mode?: "default" | "pop-up";
}>(({ theme, background, mode }) => ({
  background,
  height: 50,
  minWidth: mode === "default" ? 42 : undefined,
  textAlign: "center",
  padding: theme.spacing(1),
  position: "relative",
  cursor: "pointer",
  [theme.breakpoints.down("sm")]: {
    height: 26,
    minWidth: "unset",
    padding: theme.spacing(0.5),
  },
}));

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
