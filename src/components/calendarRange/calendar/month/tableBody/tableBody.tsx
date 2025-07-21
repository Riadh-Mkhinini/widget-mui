import { type FC, useMemo, useCallback } from "react";
import { useTheme } from "@mui/material";
import { Indicator } from "./indicator/indicator";
import { formatNumber } from "@helpers";
import { addFakeItem, chunk } from "./tableBody.utils";
import {
  TBody,
  Tr,
  Td,
  HeaderDay,
  FooterDay,
  Typography,
} from "./tableBody.styles";
import type { TableBodyProps } from "./tableBody.types";
import type { DayProps } from "../../calendar.types";

const TableBody: FC<TableBodyProps> = (props) => {
  const {
    startDate,
    endDate,
    daysOfMonth,
    onClickDay,
    onMouseEnter,
    hoverList,
    mode = "default",
    locale,
  } = props;
  const theme = useTheme();
  const lang = useMemo(
    () => (locale?.code === "ar" ? "ar-EG" : undefined),
    [locale]
  );

  const daysChunk = useMemo(
    () => chunk(addFakeItem(daysOfMonth)),
    [daysOfMonth]
  );

  const handleClick = useCallback(
    (day: DayProps) => () => !day.disabled && onClickDay?.(day),
    [onClickDay]
  );

  const handleHover = useCallback(
    (day: DayProps) => () => onMouseEnter?.(day),
    [onMouseEnter]
  );

  const baseSx = useMemo(
    () => ({
      border: `1px solid ${theme.palette.divider}`,
      borderCollapse: "collapse",
    }),
    [theme]
  );

  const renderDayCell = (day: DayProps, key: number) => {
    const IconWeather = day.weatherIcon;

    if (day.type === "NEXT_DAY" || day.type === "PREVIOUS_DAY") {
      return <Td key={key} mode={mode} />;
    }

    const isFirst = startDate?.formated === day.formated;
    const isLast = endDate?.formated === day.formated;
    const isBetween =
      startDate &&
      endDate &&
      day.date > startDate.date &&
      day.date < endDate.date;
    const isHovered = hoverList?.includes(day.formated) ?? false;

    const isActive = isFirst || isLast;
    const isInteractive = !day.disabled;
    const highlight = isBetween || isHovered;

    let background = day.background;
    let primaryText = theme.palette.grey[700];
    let secondaryText = theme.palette.grey[400];

    if (day.disabled) {
      primaryText = theme.palette.grey[300];
      secondaryText = theme.palette.grey[200];
    } else if (isActive) {
      background = theme.palette.primary.main;
      primaryText = theme.palette.primary.contrastText;
      secondaryText = theme.palette.primary.contrastText;
    } else if (highlight) {
      background = theme.palette.secondary.dark;
      primaryText = theme.palette.primary.contrastText;
      secondaryText = theme.palette.primary.contrastText;
    }

    return (
      <Td
        key={key}
        sx={baseSx}
        mode={mode}
        background={background}
        onMouseEnter={handleHover(day)}
        onClick={handleClick(day)}
      >
        {isActive && <Indicator variant={isFirst ? "LEFT" : "RIGHT"} />}
        {isInteractive && (
          <HeaderDay>
            {IconWeather && (
              <IconWeather sx={{ fontSize: 16, color: secondaryText }} />
            )}
            <Typography
              color={secondaryText}
              fontsizelarge={8}
              fontsizesmall={8}
              fontWeight="400"
            >
              {day.temperature}
            </Typography>
          </HeaderDay>
        )}
        <Typography
          color={primaryText}
          fontsizelarge={14}
          fontsizesmall={12}
          fontWeight="600"
        >
          {formatNumber(day.date.getDate(), lang)}
        </Typography>
        {isInteractive && day.price && (
          <FooterDay>
            <Typography
              color={secondaryText}
              fontsizelarge={12}
              fontsizesmall={10}
              fontWeight="400"
            >
              {day.price}
            </Typography>
          </FooterDay>
        )}
      </Td>
    );
  };

  return (
    <TBody>
      {daysChunk.map((week, weekIndex) => (
        <Tr key={weekIndex}>
          {week.map((day, dayIndex) => renderDayCell(day, dayIndex))}
        </Tr>
      ))}
    </TBody>
  );
};

export default TableBody;
