import {
  styled,
  Typography,
  IconButton as MuiIconButton,
  alpha,
} from "@mui/material";

export const Placeholder = styled(Typography)(({ theme }) => ({
  color: alpha(theme.palette.text.secondary, 0.5),
  fontWeight: 400,
  fontSize: 14,
}));

export const IconButton = styled(MuiIconButton)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: 0,
  marginRight: theme.spacing(1),
}));
