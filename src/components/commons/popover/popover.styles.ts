import { styled, Popover, Dialog } from "@mui/material";

export const CustomPopover = styled(Popover)(({ theme }) => ({
  marginTop: 4,
  [theme.breakpoints.down("sm")]: {
    marginTop: 0,
  },
  "& .MuiPopover-paper": {
    borderRadius: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      borderRadius: "0px !important",
      top: "0px !important",
      left: "0px !important",
      maxWidth: "100%",
      maxHeight: "100%",
      width: "100%",
      height: "100%",
    },
  },
}));

export const CustomDialog = styled(Dialog)(() => ({}));
