import {
  styled,
  Accordion as MuiAccordion,
  AccordionSummary as MuiAccordionSummary,
  AccordionDetails as MuiAccordionDetails,
  alpha,
  IconButton as MuiIconButton,
} from "@mui/material";

export const Container = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(0, 1),
}));

export const Accordion = styled(MuiAccordion)(({ theme }) => ({
  overflow: "hidden",
  "&:first-of-type": {
    borderTopLeftRadius: theme.spacing(1),
    borderTopRightRadius: theme.spacing(1),
  },
  "&:last-of-type": {
    borderBottomLeftRadius: theme.spacing(1),
    borderBottomRightRadius: theme.spacing(1),
  },
}));

export const AccordionSummary = styled(MuiAccordionSummary)(({ theme }) => ({
  background: alpha(theme.palette.primary.main, 0.1),
  gap: theme.spacing(1),
}));

export const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
}));

export const IconButton = styled(MuiIconButton)(() => ({
  width: 20,
  height: 20,
  padding: 0,
}));
