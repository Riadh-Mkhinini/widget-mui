import type { EngineSize } from "@/engine/engine.types";
import { type Theme, alpha, styled } from "@mui/material";

export const Grid = styled("div")<{
  showProperty?: boolean;
  showPromoCode?: boolean;
  size: EngineSize;
  isRounded?: boolean;
  showShadow?: boolean;
  borderWidth?: number;
}>(
  ({
    theme,
    showProperty,
    showPromoCode,
    size,
    isRounded,
    showShadow,
    borderWidth = 2,
  }) => {
    const { defaultLayout, breakpoints } = getDefaultLayoutAndBreakpoints({
      theme,
      size,
      showProperty,
      showPromoCode,
      isRounded,
    });
    return {
      display: "grid",
      border: `${borderWidth}px solid ${theme.palette.primary.main}`,
      overflow: "hidden",
      boxShadow: showShadow
        ? `0px 0px 8px 1px ${alpha(theme.palette.primary.main, 0.25)}`
        : undefined,
      ...defaultLayout,
      ...breakpoints,
    };
  }
);

type GetDefaultLayoutAndBreakpointsParams = {
  theme: Theme;
  size: EngineSize;
  showProperty?: boolean;
  showPromoCode?: boolean;
  isRounded?: boolean;
};

const getDefaultLayoutAndBreakpoints = (
  params: GetDefaultLayoutAndBreakpointsParams
) => {
  const { size, ...rest } = params;
  let defaultLayout = {};
  let breakpoints = {};
  if (size === "xl") {
    defaultLayout = sizeXl(rest);
    breakpoints = {
      [rest.theme.breakpoints.down("lg")]: {
        ...sizeLg(rest),
      },
      [rest.theme.breakpoints.down("md")]: {
        ...sizeMd(rest),
      },
      [rest.theme.breakpoints.down("sm")]: {
        ...sizeSm(rest),
      },
      [rest.theme.breakpoints.down("xs")]: {
        ...sizeXs(rest),
      },
    };
  } else if (size === "lg") {
    defaultLayout = sizeLg(rest);
    breakpoints = {
      [rest.theme.breakpoints.down("md")]: {
        ...sizeMd(rest),
      },
      [rest.theme.breakpoints.down("sm")]: {
        ...sizeSm(rest),
      },
      [rest.theme.breakpoints.down("xs")]: {
        ...sizeXs(rest),
      },
    };
  } else if (size === "md") {
    defaultLayout = sizeMd(rest);
    breakpoints = {
      [rest.theme.breakpoints.down("sm")]: {
        ...sizeSm(rest),
      },
      [rest.theme.breakpoints.down("xs")]: {
        ...sizeXs(rest),
      },
    };
  } else if (size === "sm") {
    defaultLayout = sizeSm(rest);
    breakpoints = {
      [rest.theme.breakpoints.down("xs")]: {
        ...sizeXs(rest),
      },
    };
  } else if (size === "xs") {
    defaultLayout = sizeXs(rest);
  }
  return { defaultLayout, breakpoints };
};

const sizeXl = (params: {
  theme: Theme;
  showProperty?: boolean;
  showPromoCode?: boolean;
  isRounded?: boolean;
}) => {
  const { theme, showProperty, showPromoCode, isRounded } = params;
  if (showProperty && showPromoCode) {
    return {
      borderRadius: isRounded ? "50%" : theme.spacing(1),
      gridTemplateColumns: "1fr 2fr 1fr 1fr auto",
      gridTemplateAreas: `"property calendar guests promoCode search"`,
    };
  } else if (showProperty && !showPromoCode) {
    return {
      borderRadius: isRounded ? "50%" : theme.spacing(1),
      gridTemplateColumns: "1fr 2fr 1fr auto",
      gridTemplateAreas: `"property calendar guests search"`,
    };
  } else if (!showProperty && showPromoCode) {
    return {
      borderRadius: isRounded ? "50%" : theme.spacing(1),
      gridTemplateColumns: "2fr 1fr 1fr auto",
      gridTemplateAreas: `"calendar guests promoCode search"`,
    };
  }
  return {
    borderRadius: isRounded ? "50%" : theme.spacing(1),
    gridTemplateColumns: "2fr 1fr auto",
    gridTemplateAreas: `"calendar guests search"`,
  };
};
const sizeLg = (params: {
  theme: Theme;
  showProperty?: boolean;
  showPromoCode?: boolean;
  isRounded?: boolean;
}) => {
  const { theme, showProperty, showPromoCode, isRounded } = params;
  if (showProperty && showPromoCode) {
    return {
      borderRadius: isRounded ? "50%" : theme.spacing(1),
      gridTemplateColumns: "1fr 2fr 1fr 1fr auto",
      gridTemplateAreas: `"property calendar guests promoCode search"`,
    };
  } else if (showProperty && !showPromoCode) {
    return {
      borderRadius: isRounded ? "50%" : theme.spacing(1),
      gridTemplateColumns: "1fr 2fr 1fr auto",
      gridTemplateAreas: `"property calendar guests search"`,
    };
  } else if (!showProperty && showPromoCode) {
    return {
      borderRadius: isRounded ? "50%" : theme.spacing(1),
      gridTemplateColumns: "2fr 1fr 1fr auto",
      gridTemplateAreas: `"calendar guests promoCode search"`,
    };
  }
  return {
    borderRadius: isRounded ? "50%" : theme.spacing(1),
    gridTemplateColumns: "2fr 1fr auto",
    gridTemplateAreas: `"calendar guests search"`,
  };
};
const sizeMd = (params: {
  theme: Theme;
  showProperty?: boolean;
  showPromoCode?: boolean;
  isRounded?: boolean;
}) => {
  const { theme, showProperty, showPromoCode } = params;
  if (showProperty && showPromoCode) {
    return {
      borderRadius: theme.spacing(1),
      gridTemplateColumns: "1fr 1fr",
      gridTemplateAreas: `
      "property property"
      "calendar calendar"
      "guests promoCode"
      "search search"
      `,
    };
  } else if (showProperty && !showPromoCode) {
    return {
      borderRadius: theme.spacing(1),
      gridTemplateAreas: `
      "property property"
      "calendar calendar"
      "guests search"
      `,
    };
  } else if (!showProperty && showPromoCode) {
    return {
      borderRadius: theme.spacing(1),
      gridTemplateColumns: "1fr 1fr",
      gridTemplateAreas: `
      "calendar calendar"
      "guests promoCode"
      "search search"
      `,
    };
  }
  return {
    borderRadius: theme.spacing(1),
    gridTemplateColumns: "1fr 1fr",
    gridTemplateAreas: `
    "calendar calendar"
    "guests search"
    `,
  };
};
const sizeSm = (params: {
  theme: Theme;
  showProperty?: boolean;
  showPromoCode?: boolean;
  isRounded?: boolean;
}) => {
  const { theme, showProperty, showPromoCode } = params;
  if (showProperty && showPromoCode) {
    return {
      borderRadius: theme.spacing(1),
      gridTemplateColumns: "1fr",
      gridTemplateAreas: `
      "property"
      "calendar"
      "guests"
      "promoCode"
      "search"
      `,
    };
  } else if (showProperty && !showPromoCode) {
    return {
      borderRadius: theme.spacing(1),
      gridTemplateColumns: "1fr",
      gridTemplateAreas: `
      "property"
      "calendar"
      "guests"
      "search"
      `,
    };
  } else if (!showProperty && showPromoCode) {
    return {
      borderRadius: theme.spacing(1),
      gridTemplateColumns: "1fr",
      gridTemplateAreas: `
      "calendar"
      "guests"
      "promoCode"
      "search"
      `,
    };
  }
  return {
    borderRadius: theme.spacing(1),
    gridTemplateColumns: "1fr",
    gridTemplateAreas: `
      "calendar"
      "guests"
      "search"
      `,
  };
};
const sizeXs = (params: {
  theme: Theme;
  showProperty?: boolean;
  showPromoCode?: boolean;
  isRounded?: boolean;
}) => {
  const { theme, showProperty, showPromoCode } = params;
  if (showProperty && showPromoCode) {
    return {
      borderRadius: theme.spacing(1),
      gridTemplateColumns: "1fr",
      gridTemplateAreas: `
      "property"
      "calendar"
      "guests"
      "promoCode"
      "search"
      `,
    };
  } else if (showProperty && !showPromoCode) {
    return {
      borderRadius: theme.spacing(1),
      gridTemplateColumns: "1fr",
      gridTemplateAreas: `
      "property"
      "calendar"
      "guests"
      "search"
      `,
    };
  } else if (!showProperty && showPromoCode) {
    return {
      borderRadius: theme.spacing(1),
      gridTemplateColumns: "1fr",
      gridTemplateAreas: `
      "calendar"
      "guests"
      "promoCode"
      "search"
      `,
    };
  }
  return {
    borderRadius: theme.spacing(1),
    gridTemplateColumns: "1fr",
    gridTemplateAreas: `
      "calendar"
      "guests"
      "search"
      `,
  };
};
