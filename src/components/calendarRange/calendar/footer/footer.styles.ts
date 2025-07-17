import { Chip, styled } from "@mui/material";

export const Container = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderTop: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(1, 2),
  gap: theme.spacing(1),
  [theme.breakpoints.down("sm")]: {
    alignItems: "flex-start",
  },
}));

export const Tag = styled(Chip)<{ textcolor?: string; background?: string }>(
  ({ theme, textcolor, background }) => ({
    color: textcolor,
    background,
    fontSize: 14,
    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
    },
  })
);
