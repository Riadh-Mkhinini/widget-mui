import { useMemo, type FC } from "react";
import { Button, Stack, Typography } from "@mui/material";
//styles
import { Container } from "./footer.styles";
//types
import type { FooterProps } from "./footer.types";
import { format } from "date-fns";
import { getTotalOfDays } from "@helpers";

const Footer: FC<FooterProps> = (props) => {
  const { label = "Done", dayHovered, hoverList = [], onClick } = props;

  const text = useMemo(() => {
    const start = hoverList.shift();
    const end = hoverList.pop();
    let text = "";
    if (dayHovered && start && end) {
      text = `${format(new Date(start), "EEEEEE, dd MMM")} - ${format(
        new Date(end),
        "EEEEEE, dd MMM"
      )} (${getTotalOfDays(new Date(start), new Date(end))} nights)`;
    } else if (dayHovered && start) {
      text = format(new Date(start), "EEEEEE, dd MMM");
    } else if (dayHovered) {
      text = format(dayHovered, "EEEEEE, dd MMM");
    }
    return text;
  }, [dayHovered, hoverList]);

  return (
    <Container>
      <Stack>
        <Typography fontSize={14} color="grey.700" fontWeight="600">
          {text}
        </Typography>
        <Typography fontSize={12} color="grey.600">
          The best booking prices for 1 person per night
        </Typography>
        <Typography fontSize={12} color="grey.600">
          Prices are subject to special booking conditions
        </Typography>
      </Stack>
      <Button
        variant="contained"
        sx={{ textTransform: "none" }}
        onClick={onClick}
      >
        {label}
      </Button>
    </Container>
  );
};

export default Footer;
