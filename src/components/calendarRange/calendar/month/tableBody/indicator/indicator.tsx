import { type FC, memo } from "react";
import { ArrowRight, ArrowLeft, Container, Line } from "./indicator.styles";
import type { IndicatorProps } from "./indicator.types";

const Indicator: FC<IndicatorProps> = memo((props) => {
  const { variant, left = 0, right = 0, sizeArrow = 10 } = props;
  if (variant === "LEFT") {
    return (
      <Container left={left}>
        <Line />
        <ArrowRight size={sizeArrow} />
      </Container>
    );
  }
  return (
    <Container right={right}>
      <ArrowLeft size={sizeArrow} />
      <Line />
    </Container>
  );
});

export { Indicator };
