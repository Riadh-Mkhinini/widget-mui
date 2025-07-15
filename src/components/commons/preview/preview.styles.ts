import { ButtonBase, styled } from "@mui/material";

export const SeparateContainer = styled(ButtonBase)<{
  background?: string;
  bordercolor?: string;
  height?: number;
  open?: boolean;
  backgroundhover?: string;
  radius?: number;
}>(
  ({
    theme,
    background,
    bordercolor,
    height,
    open,
    backgroundhover,
    radius = 0.5,
  }) => {
    let border = `1px solid ${bordercolor || theme.palette.divider}`;
    let boxShadow;
    if (open) {
      border = `1px solid ${theme.palette.primary.dark}`;
      boxShadow = `0px 0px 3px 0px ${theme.palette.primary.light}`;
    }
    return {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      padding: theme.spacing(1),
      width: "100%",
      height: height,
      background: background,
      border,
      boxShadow,
      borderRadius: theme.spacing(radius),
      "&:hover": {
        background: backgroundhover,
      },
    };
  }
);

export const CombinedContainer = styled(ButtonBase)<{
  background?: string;
  height?: number;
  backgroundhover?: string;
}>(({ theme, background, height, backgroundhover }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: theme.spacing(1),
  width: "100%",
  height: height,
  background: background,
  "&:hover": {
    background: backgroundhover,
  },
}));

export const LinkContainer = styled(ButtonBase)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: theme.spacing(1, 0),
  "&:hover": {
    ".link": {
      textDecorationLine: "underline",
    },
  },
}));
