import { type FC, useMemo } from "react";
import { useTheme } from "@mui/material";
//svgs
import { Svgs } from "@constants";
//styles
import { Container, IconButton } from "./header.styles";
//types
import type { HeaderProps } from "./header.types";

const Header: FC<HeaderProps> = (props) => {
  const {
    disabledNext,
    disabledPrevious,
    onClickPrevious,
    onClickNext,
    locale,
  } = props;
  const theme = useTheme();
  //memo
  const colorPrevious = useMemo(
    () =>
      disabledPrevious ? theme.palette.grey[200] : theme.palette.primary.main,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [disabledPrevious]
  );
  const colorNext = useMemo(
    () => (disabledNext ? theme.palette.grey[200] : theme.palette.primary.main),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [disabledNext]
  );

  const rotate = useMemo(
    () => (locale?.code === "ar" ? "180deg" : "0deg"),
    [locale?.code]
  );

  //render
  return (
    <Container>
      <IconButton
        aria-label="previous"
        size="medium"
        rotate={rotate}
        disabled={disabledPrevious}
        onClick={onClickPrevious}
      >
        <Svgs.IconArrowLeft stroke={colorPrevious} />
      </IconButton>

      <IconButton
        aria-label="next"
        size="medium"
        rotate={rotate}
        disabled={disabledNext}
        onClick={onClickNext}
      >
        <Svgs.IconArrowRight stroke={colorNext} />
      </IconButton>
    </Container>
  );
};

export default Header;
