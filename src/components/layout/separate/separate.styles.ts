import type { EngineSize } from "@/widget/widget.types";
import { type Theme, styled } from "@mui/material";

export const Grid = styled("div")<{
  showProperty?: boolean;
  showPromoCode?: boolean;
  size: EngineSize;
}>(({ theme, showProperty, showPromoCode, size }) => {
  const { defaultLayout, breakpoints } = getDefaultLayoutAndBreakpoints({
    theme,
    size,
    showProperty,
    showPromoCode,
  });
  return {
    display: "grid",
    gap: theme.spacing(1),
    ...defaultLayout,
    ...breakpoints,
  };
});

type GetDefaultLayoutAndBreakpointsParams = {
  theme: Theme;
  size: EngineSize;
  showProperty?: boolean;
  showPromoCode?: boolean;
};

const getDefaultLayoutAndBreakpoints = (
  params: GetDefaultLayoutAndBreakpointsParams
) => {
  const { theme, size, showProperty, showPromoCode } = params;
  let defaultLayout = {};
  let breakpoints = {};
  if (size === "xl") {
    defaultLayout = sizeXl({ showProperty, showPromoCode });
    breakpoints = {
      [theme.breakpoints.down("lg")]: {
        ...sizeLg({ showProperty, showPromoCode }),
      },
      [theme.breakpoints.down("md")]: {
        ...sizeMd({ showProperty, showPromoCode }),
      },
      [theme.breakpoints.down("sm")]: {
        ...sizeSm({ showProperty, showPromoCode }),
      },
      [theme.breakpoints.down("xs")]: {
        ...sizeXs({ showProperty, showPromoCode }),
      },
    };
  } else if (size === "lg") {
    defaultLayout = sizeLg({ showProperty, showPromoCode });
    breakpoints = {
      [theme.breakpoints.down("md")]: {
        ...sizeMd({ showProperty, showPromoCode }),
      },
      [theme.breakpoints.down("sm")]: {
        ...sizeSm({ showProperty, showPromoCode }),
      },
      [theme.breakpoints.down("xs")]: {
        ...sizeXs({ showProperty, showPromoCode }),
      },
    };
  } else if (size === "md") {
    defaultLayout = sizeMd({ showProperty, showPromoCode });
    breakpoints = {
      [theme.breakpoints.down("sm")]: {
        ...sizeSm({ showProperty, showPromoCode }),
      },
      [theme.breakpoints.down("xs")]: {
        ...sizeXs({ showProperty, showPromoCode }),
      },
    };
  } else if (size === "sm") {
    defaultLayout = sizeSm({ showProperty, showPromoCode });
    breakpoints = {
      [theme.breakpoints.down("xs")]: {
        ...sizeXs({ showProperty, showPromoCode }),
      },
    };
  } else if (size === "xs") {
    defaultLayout = sizeXs({ showProperty, showPromoCode });
  }
  return { defaultLayout, breakpoints };
};

const sizeXl = ({
  showProperty,
  showPromoCode,
}: {
  showProperty?: boolean;
  showPromoCode?: boolean;
}) => {
  if (showProperty && showPromoCode) {
    return {
      gridTemplateColumns: "1fr 2fr 1fr 1fr auto",
      gridTemplateAreas: `"property calendar guests promoCode search"`,
    };
  } else if (showProperty && !showPromoCode) {
    return {
      gridTemplateColumns: "1fr 2fr 1fr auto",
      gridTemplateAreas: `"property calendar guests search"`,
    };
  } else if (!showProperty && showPromoCode) {
    return {
      gridTemplateColumns: "2fr 1fr 1fr auto",
      gridTemplateAreas: `"calendar guests promoCode search"`,
    };
  }
  return {
    gridTemplateColumns: "2fr 1fr auto",
    gridTemplateAreas: `"calendar guests search"`,
  };
};
const sizeLg = ({
  showProperty,
  showPromoCode,
}: {
  showProperty?: boolean;
  showPromoCode?: boolean;
}) => {
  if (showProperty && showPromoCode) {
    return {
      gridTemplateColumns: "1fr 2fr 1fr 1fr auto",
      gridTemplateAreas: `"property calendar guests promoCode search"`,
    };
  } else if (showProperty && !showPromoCode) {
    return {
      gridTemplateColumns: "1fr 2fr 1fr auto",
      gridTemplateAreas: `"property calendar guests search"`,
    };
  } else if (!showProperty && showPromoCode) {
    return {
      gridTemplateColumns: "2fr 1fr 1fr auto",
      gridTemplateAreas: `"calendar guests promoCode search"`,
    };
  }
  return {
    gridTemplateColumns: "2fr 1fr auto",
    gridTemplateAreas: `"calendar guests search"`,
  };
};
const sizeMd = ({
  showProperty,
  showPromoCode,
}: {
  showProperty?: boolean;
  showPromoCode?: boolean;
}) => {
  if (showProperty && showPromoCode) {
    return {
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
      gridTemplateAreas: `
      "property property"
      "calendar calendar"
      "guests search"
      `,
    };
  } else if (!showProperty && showPromoCode) {
    return {
      gridTemplateColumns: "1fr 1fr",
      gridTemplateAreas: `
      "calendar calendar"
      "guests promoCode"
      "search search"
      `,
    };
  }
  return {
    gridTemplateColumns: "1fr 1fr",
    gridTemplateAreas: `
    "calendar calendar"
    "guests search"
    `,
  };
};
const sizeSm = ({
  showProperty,
  showPromoCode,
}: {
  showProperty?: boolean;
  showPromoCode?: boolean;
}) => {
  if (showProperty && showPromoCode) {
    return {
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
    gridTemplateColumns: "1fr",
    gridTemplateAreas: `
      "calendar"
      "guests"
      "search"
      `,
  };
};

const sizeXs = ({
  showProperty,
  showPromoCode,
}: {
  showProperty?: boolean;
  showPromoCode?: boolean;
}) => {
  if (showProperty && showPromoCode) {
    return {
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
    gridTemplateColumns: "1fr",
    gridTemplateAreas: `
      "calendar"
      "guests"
      "search"
      `,
  };
};
