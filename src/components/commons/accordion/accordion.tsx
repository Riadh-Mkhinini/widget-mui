import type { FC } from "react";
import { AccordionDetails, AccordionSummary } from "@mui/material";
// styles
import { MuiAccordion } from "./accordion.styles";
// types
import type { AccordionProps } from "./accordion.types";

const Accordion: FC<AccordionProps> = (props) => {
  const {
    defaultExpanded,
    expanded,
    summary,
    details,
    endIcon,
    sx,
    sxSummary,
    bgColorSelected,
    contrastTextSelected,
    onChange,
  } = props;
  return (
    <MuiAccordion
      variant="outlined"
      disableGutters
      expanded={expanded}
      defaultExpanded={defaultExpanded}
      bgcolorselected={bgColorSelected}
      contrasttextselected={contrastTextSelected}
      sx={sx}
      onChange={onChange}
    >
      <AccordionSummary
        expandIcon={endIcon}
        aria-controls="panel1-content"
        id="panel1-header"
        sx={sxSummary}
      >
        {summary}
      </AccordionSummary>
      <AccordionDetails>{details}</AccordionDetails>
    </MuiAccordion>
  );
};

export { Accordion };
