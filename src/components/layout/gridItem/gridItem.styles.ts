/* eslint-disable @typescript-eslint/no-unused-vars */
import type { EngineSize, LayoutConfig } from "@/engine/engine.types";
import { Box, type Theme, styled } from "@mui/material";

export const ContainerFixed = styled(Box)<{
  layout?: LayoutConfig;
  background?: string;
  size: EngineSize;
}>(({ theme, layout, background, size, gridArea }) => {
  if (layout === "combined") {
    const { defaultLayout, breakpoints } = getDefaultLayoutAndBreakpoints({
      theme,
      size,
      gridArea,
    });

    return {
      display: "flex",
      background,
      ...defaultLayout,
      ...breakpoints,
    };
  }
  return {
    display: "flex",
    background,
  };
});

type GetDefaultLayoutAndBreakpointsParams = {
  theme: Theme;
  size: EngineSize;
  gridArea: any;
};

const getDefaultLayoutAndBreakpoints = (
  params: GetDefaultLayoutAndBreakpointsParams
) => {
  const { theme, size, gridArea } = params;
  let defaultLayout = {};
  let breakpoints = {};
  if (size === "xl") {
    defaultLayout = sizeXl(theme, gridArea);
    breakpoints = {
      [theme.breakpoints.down("lg")]: {
        ...sizeLg(theme, gridArea),
      },
      [theme.breakpoints.down("md")]: {
        ...sizeMd(theme, gridArea),
      },
      [theme.breakpoints.down("sm")]: {
        ...sizeSm(theme, gridArea),
      },
      [theme.breakpoints.down("xs")]: {
        ...sizeXs(theme, gridArea),
      },
    };
  } else if (size === "lg") {
    defaultLayout = sizeLg(theme, gridArea);
    breakpoints = {
      [theme.breakpoints.down("md")]: {
        ...sizeMd(theme, gridArea),
      },
      [theme.breakpoints.down("sm")]: {
        ...sizeSm(theme, gridArea),
      },
      [theme.breakpoints.down("xs")]: {
        ...sizeXs(theme, gridArea),
      },
    };
  } else if (size === "md") {
    defaultLayout = sizeMd(theme, gridArea);
    breakpoints = {
      [theme.breakpoints.down("sm")]: {
        ...sizeSm(theme, gridArea),
      },
      [theme.breakpoints.down("xs")]: {
        ...sizeXs(theme, gridArea),
      },
    };
  } else if (size === "sm") {
    defaultLayout = sizeSm(theme, gridArea);
    breakpoints = {
      [theme.breakpoints.down("xs")]: {
        ...sizeXs(theme, gridArea),
      },
    };
  } else if (size === "xs") {
    defaultLayout = sizeXs(theme, gridArea);
  }
  return { defaultLayout, breakpoints };
};

const sizeXl = (theme: Theme, _gridArea: any) => {
  return {
    borderRight: `1px solid ${theme.palette.divider}`,
    "&:last-of-type": {
      borderRight: "none",
    },
  };
};
const sizeLg = (theme: Theme, _gridArea: any) => {
  return {
    borderRight: `1px solid ${theme.palette.divider}`,
    "&:last-of-type": {
      borderRight: "none",
    },
  };
};
const sizeMd = (theme: Theme, gridArea: any) => {
  return {
    borderRight:
      gridArea === "guests" ? `1px solid ${theme.palette.divider}` : undefined,
    borderBottom:
      gridArea === "guests" || gridArea === "promoCode"
        ? undefined
        : `1px solid ${theme.palette.divider}`,
  };
};
const sizeSm = (theme: Theme, gridArea: any) => {
  return {
    borderBottom:
      gridArea === "promoCode" || gridArea === "search"
        ? undefined
        : `1px solid ${theme.palette.divider}`,
  };
};
const sizeXs = (theme: Theme, gridArea: any) => {
  return {
    borderBottom:
      gridArea === "promoCode" || gridArea === "search"
        ? undefined
        : `1px solid ${theme.palette.divider}`,
  };
};
