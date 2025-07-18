import { styled, IconButton as MuiIconButton } from "@mui/material";

export const Container = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(0, 1),
}));

export const IconButton = styled(MuiIconButton)(() => ({
  width: 20,
  height: 20,
  padding: 0,
}));
