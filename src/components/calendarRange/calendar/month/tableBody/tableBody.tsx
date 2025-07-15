import { type FC, useMemo } from "react";
import { useTheme } from "@mui/material";
//utils
import { addFakeItem, chunk } from "./tableBody.utils";
//styles
import { Indicator } from "@/components/commons";
import {
  TBody,
  Tr,
  Td,
  HeaderDay,
  FooterDay,
  Typography,
} from "./tableBody.styles";
//types
import type { TableBodyProps } from "./tableBody.types";
import type { DayProps } from "../../calendar.types";

const TableBody: FC<TableBodyProps> = (props) => {
  const { startDate, endDate, daysOfMonth, onClickDay, hoverList, mode } =
    props;
  const theme = useTheme();
  //useMemo
  const daysChunk = useMemo(() => {
    const daysMonth = addFakeItem(daysOfMonth);
    return chunk(daysMonth);
  }, [daysOfMonth]);

  //functions
  const onClickItem = (day: DayProps) => () => {
    if (onClickDay && !day.disabled) {
      onClickDay(day);
    }
  };
  const onMouseEnter = (day: DayProps) => () => {
    if (props.onMouseEnter) {
      props.onMouseEnter(day);
    }
  };

  //render
  const renderItem = () => {
    return daysChunk.map((week, index) => {
      return (
        <Tr key={index}>
          {week.map((day, iterator) => {
            if (day.type === "NEXT_DAY" || day.type === "PREVIOUS_DAY") {
              return <Td key={iterator} mode={mode} />;
            }
            const firstDay = startDate && startDate.formated === day.formated;
            const lastDay = endDate && endDate.formated === day.formated;

            const sx = {
              border: `1px solid ${theme.palette.divider}`,
              borderCollapse: "collapse",
            };
            if (firstDay || lastDay) {
              return (
                <Td
                  key={iterator}
                  sx={sx}
                  mode={mode}
                  background={theme.palette.primary.main}
                  onMouseEnter={onMouseEnter(day)}
                  onClick={onClickItem(day)}
                >
                  {firstDay && <Indicator variant="LEFT" />}
                  {lastDay && <Indicator variant="RIGHT" />}
                  <HeaderDay>
                    {day.weatherIcon}
                    <Typography
                      color={theme.palette.primary.contrastText}
                      fontsizelarge={8}
                      fontsizesmall={8}
                      fontWeight="400"
                    >
                      {day.temperature}
                    </Typography>
                  </HeaderDay>
                  <Typography
                    fontWeight="600"
                    fontsizelarge={14}
                    fontsizesmall={12}
                    color={theme.palette.primary.contrastText}
                  >
                    {day.date.getDate()}
                  </Typography>
                  <FooterDay>
                    <Typography
                      color={theme.palette.primary.contrastText}
                      fontsizelarge={12}
                      fontsizesmall={10}
                      fontWeight="400"
                    >
                      {day.price}
                    </Typography>
                  </FooterDay>
                </Td>
              );
            }
            const isBetweenDate =
              startDate &&
              endDate &&
              day.date > startDate.date &&
              day.date < endDate.date;
            const isHovered = hoverList?.indexOf(day.formated) !== -1;
            const background =
              isHovered || isBetweenDate
                ? theme.palette.secondary.dark
                : day.background;

            let color = day.color;
            if (day.disabled) {
              color = theme.palette.grey[300];
            } else if (isHovered || isBetweenDate) {
              color = theme.palette.primary.contrastText;
            }
            return (
              <Td
                key={iterator}
                sx={sx}
                mode={mode}
                background={background}
                onMouseEnter={onMouseEnter(day)}
                onClick={onClickItem(day)}
              >
                {!day.disabled && (
                  <HeaderDay>
                    {day.weatherIcon}
                    <Typography
                      color={color}
                      fontsizelarge={8}
                      fontsizesmall={8}
                      fontWeight="400"
                    >
                      {day.temperature}
                    </Typography>
                  </HeaderDay>
                )}
                <Typography
                  color={color}
                  fontsizelarge={14}
                  fontsizesmall={12}
                  fontWeight="600"
                >
                  {day.date.getDate()}
                </Typography>
                {!day.disabled && (
                  <FooterDay>
                    <Typography
                      color={color}
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
          })}
        </Tr>
      );
    });
  };
  return <TBody>{renderItem()}</TBody>;
};

export default TableBody;
