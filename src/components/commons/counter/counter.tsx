import { type FC, useMemo } from "react";
import { Stack, Typography } from "@mui/material";
//svgs
import { Svgs } from "@constants";
//styles
import { Container, ContainerIcon, Content, Main } from "./counter.styles";
//types
import type { CounterProps } from "./counter.types";

const Counter: FC<CounterProps> = (props) => {
  const {
    mode = "rounded",
    value = 0,
    label,
    caption,
    min,
    max,
    direction = "column",
    onChange,
  } = props;

  const minValue = useMemo(() => (typeof min === "number" ? min : 0), [min]);
  const maxValue = useMemo(() => (typeof max === "number" ? max : 30), [max]);

  //functions
  const onClickDecrease = () => {
    onChange?.(value - 1);
  };
  const onClickIncrease = () => {
    onChange?.(value + 1);
  };

  //render
  const colorLeft = useMemo(
    () => (value === minValue ? "grey.400" : "grey.700"),
    [value, minValue]
  );
  const colorRight = useMemo(
    () => (value === maxValue ? "grey.400" : "grey.700"),
    [value, maxValue]
  );
  const alignItems = useMemo(
    () => (direction === "row" ? "center" : "start"),
    [direction]
  );

  return (
    <Main flexDirection={direction} alignItems={alignItems}>
      <Stack flex={1}>
        <Typography fontSize={14} fontWeight="500" color="grey.700">
          {label}
        </Typography>
        {caption && (
          <Typography
            component="span"
            fontSize={12}
            fontWeight="400"
            color="grey.400"
          >
            {caption}
          </Typography>
        )}
      </Stack>
      <Container mode={mode}>
        <ContainerIcon
          mode={mode}
          disabled={value === minValue}
          onClick={onClickDecrease}
        >
          <Svgs.IconMinus sx={{ fontSize: 18, color: colorLeft }} />
        </ContainerIcon>
        <Content mode={mode}>
          <Typography fontSize={16} fontWeight="600" color="grey.700">
            {value}
          </Typography>
        </Content>
        <ContainerIcon
          mode={mode}
          disabled={value === maxValue}
          onClick={onClickIncrease}
        >
          <Svgs.IconPlus sx={{ fontSize: 18, color: colorRight }} />
        </ContainerIcon>
      </Container>
    </Main>
  );
};

export { Counter };
