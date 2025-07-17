import { createTheme, type Direction } from "@mui/material/styles";
import type { Palette } from "@/engine/engine.types";

const createCustomTheme = (params?: {
  palette?: Palette;
  direction: Direction;
}) => {
  const { palette, direction } = params || {};

  return createTheme({
    direction: direction,
    palette: {
      primary: {
        main: palette?.primary?.main || "#2250DA",
        light: palette?.primary?.light || "#82ACFE",
        dark: palette?.primary?.dark || "#031B4D",
        contrastText: palette?.primary?.contrastText || "#FFFFFF",
      },
      secondary: {
        main: palette?.secondary?.main || "#2250DA",
        light: palette?.secondary?.light || "#82ACFE",
        dark: palette?.secondary?.dark || "#031B4D",
        contrastText: palette?.secondary?.contrastText || "#FFFFFF",
      },
    },
    typography: {
      fontFamily: [
        "Inter Tight Variable",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
    },
    breakpoints: {
      values: {
        xs: 480,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
  });
};

export { createCustomTheme };
