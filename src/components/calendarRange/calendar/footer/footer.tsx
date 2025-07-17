import { useMemo, type FC } from "react";
import { format } from "date-fns";
import { Button, Stack, Typography } from "@mui/material";
//styles
import { Container } from "./footer.styles";
//types
import type { FooterProps } from "./footer.types";

const Footer: FC<FooterProps> = (props) => {
  const { texts, dayHovered, hoverList = [], onClick } = props;

  const text = useMemo(() => {
    const start = hoverList.shift();
    const end = hoverList.pop();
    let text = "";
    if (dayHovered && start && end) {
      text =
        texts?.popUpStartEndDateNights?.(new Date(start), new Date(end)) || "";
    } else if (dayHovered && start) {
      text = format(new Date(start), "EEEEEE, dd MMM");
    } else if (dayHovered) {
      text = format(dayHovered, "EEEEEE, dd MMM");
    }
    return text;
  }, [dayHovered, hoverList, texts]);

  return (
    <Container>
      <Stack>
        <Typography fontSize={14} color="grey.700" fontWeight="600">
          {text}
        </Typography>
        <Typography fontSize={12} color="grey.600">
          {texts?.popUpNote}
        </Typography>
        <Typography fontSize={12} color="grey.600">
          {texts?.popUpSubNote}
        </Typography>
      </Stack>
      <Button
        variant="contained"
        sx={{ textTransform: "none" }}
        onClick={onClick}
      >
        {texts?.popUpButtonDone}
      </Button>
    </Container>
  );
};

export default Footer;
