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
        main: palette?.primary?.main || "#97BA68",
        light: palette?.primary?.light || "#6B9C27",
        dark: palette?.primary?.dark || "#3C6E0E",
        contrastText: palette?.primary?.contrastText || "#000",
      },
      secondary: {
        main: palette?.secondary?.main || "#CFE2AF",
        light: palette?.secondary?.light || "#BAD68D",
        dark: palette?.secondary?.dark || "#94BC5D",
        contrastText: palette?.secondary?.contrastText || "#000",
      },
      grey: {
        50: "#F9FAFB",
        100: "#F2F4F7",
        200: "#EAECF0",
        300: "#D0D5DD",
        400: "#98A2B3",
        500: "#667085",
        600: "#475467",
        700: "#344054",
        800: "#1D2939",
        900: "#101828",
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
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
          },
        },
      },
    },
  });
};

export { createCustomTheme };
