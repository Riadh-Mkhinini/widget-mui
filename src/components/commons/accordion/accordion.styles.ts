import { styled, Accordion } from "@mui/material";

export const MuiAccordion = styled(Accordion)<{
  bgcolorselected?: string;
  contrasttextselected?: string;
}>(({ theme, bgcolorselected, contrasttextselected }) => ({
  borderRadius: `${theme.spacing(1)} !important`,
  overflow: "hidden",
  ".MuiAccordionSummary-root": {
    padding: theme.spacing(0, 2),
  },
  "&.Mui-expanded": {
    ".MuiAccordionSummary-root": {
      background: bgcolorselected,
      svg: {
        color: contrasttextselected,
      },
    },
    ".MuiAccordionSummary-content": {
      "& > p": {
        fontWeight: 600,
        color: contrasttextselected,
      },
    },
  },
  "::before": {
    display: "none",
  },
  "& .MuiAccordionDetails-root": {
    padding: theme.spacing(2),
  },
}));
