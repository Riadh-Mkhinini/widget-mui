import { type FC, useMemo } from "react";
import { Typography } from "@mui/material";
import { format } from "date-fns";
//svgs
import { Svgs } from "@constants";
//contextAPI
import { useIBE } from "@contextAPI";
//utils
import { getTotalOfDays } from "@helpers";
//styles
import { Row, Column, Badge } from "./rangeDate.styles";
//types
import type { DayProps } from "@/components/calendarRange/calendarRange";
import type { RangeDateProps } from "./rangeDate.types";

const RangeDate: FC<RangeDateProps> = (props) => {
  const { startDate, endDate, labelStartDate, labelEndDate, getLabelNights } =
    props;

  const { engineConfig, paramsSize, size } = useIBE();

  const totalOfDays = getTotalOfDays(startDate?.date, endDate?.date);

  const color = useMemo(() => {
    if (startDate || endDate)
      return engineConfig?.global?.preview?.value || "grey.900";

    return engineConfig?.global?.preview?.placeholder || "grey.500";
  }, [engineConfig?.global?.preview, startDate, endDate]);

  const formatDate = useMemo(
    () => `${engineConfig?.global?.preview?.formatDate || "yyyy-MM-dd"}`,
    [engineConfig?.global?.preview?.formatDate]
  );

  const renderDate = (params: {
    date?: DayProps | null;
    textAlign: "start" | "end";
  }) => {
    const { date, textAlign } = params;

    if (date) {
      return (
        <Typography
          textAlign={textAlign}
          fontSize={paramsSize.fontSizeValue}
          fontWeight="500"
          color={color}
          noWrap
        >
          {format(date.date, formatDate)}
        </Typography>
      );
    }
    return (
      <Typography
        textAlign={textAlign}
        fontSize={paramsSize.fontSizeValue}
        fontWeight="400"
        color={engineConfig?.global?.preview?.placeholder || "grey.500"}
        noWrap
      >
        {formatDate.toUpperCase()}
      </Typography>
    );
  };

  return (
    <>
      <Column>
        <Row>
          {engineConfig?.global?.preview?.showIcon && (
            <Svgs.IconCalendarCheckIn
              sx={{
                fontSize: paramsSize.sizeIcon,
                color: engineConfig?.global?.preview?.icon || "primary.main",
              }}
            />
          )}
          <Column>
            <Typography
              textAlign="start"
              fontSize={paramsSize.fontSizeLabel}
              color={engineConfig?.global?.preview?.label || "grey.700"}
              noWrap
            >
              {labelStartDate}
            </Typography>
            {renderDate({ date: startDate, textAlign: "start" })}
          </Column>
        </Row>
      </Column>
      <Badge
        background={engineConfig?.global?.preview?.background}
        bordercolor={engineConfig?.global?.preview?.border}
        size={size}
      >
        <Svgs.IconMoon
          sx={{
            fontSize: paramsSize.sizeIcon * 0.8,
            color: engineConfig?.global?.preview?.icon || "primary.main",
          }}
        />
        <Typography
          fontSize={paramsSize.fontSizeLabel}
          fontWeight="500"
          color={color}
        >
          {getLabelNights?.(totalOfDays)}
        </Typography>
      </Badge>
      <Column alignItems="flex-end">
        <Row>
          <Column>
            <Typography
              textAlign="end"
              fontSize={paramsSize.fontSizeLabel}
              color={engineConfig?.global?.preview?.label || "grey.700"}
              noWrap
            >
              {labelEndDate}
            </Typography>
            {renderDate({ date: endDate, textAlign: "end" })}
          </Column>
          {engineConfig?.global?.preview?.showIcon && (
            <Svgs.IconCalendarCheckOut
              sx={{
                fontSize: paramsSize.sizeIcon,
                color: engineConfig?.global?.preview?.icon || "primary.main",
              }}
            />
          )}
        </Row>
      </Column>
    </>
  );
};

export default RangeDate;
