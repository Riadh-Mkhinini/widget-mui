import {
  styled,
  IconButton as MuiIconButton,
  type IconButtonProps,
  alpha,
} from "@mui/material";

export const Container = styled("div")(({ theme }) => {
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 999,
    padding: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
  };
});

export const IconButton = styled(MuiIconButton)<
  IconButtonProps & { rotate?: string }
>(({ theme, rotate }) => ({
  rotate,
  background: alpha(theme.palette.primary.main, 0.1),
  borderRadius: theme.spacing(1),
}));
