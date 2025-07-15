import { type FC, useMemo, useState } from "react";
import { Stack } from "@mui/material";
//context
import { useIBE } from "@contextAPI";
//components
import { Preview } from "../commons";
import { Calendar } from "./calendar/calendar";
//helpers
import { getDayOfWeek } from "@helpers";
//types
import type { CalendarRangeProps } from "./calendarRange.types";
import type { DayProps } from "@/engine/engine.types";

const CalendarRange: FC<CalendarRangeProps> = (props) => {
  const { disabled, startDate, endDate, locale } = props;
  const { localeText, engineConfig } = useIBE();

  //states
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  //useMemo
  const open = Boolean(anchorEl);
  const id = open ? "property-popover" : undefined;

  const daysList = useMemo(() => getDayOfWeek(locale), [locale]);
  //functions
  const onClickOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const onClose = () => {
    setAnchorEl(null);
  };
  const onClickDone = (params: {
    startDate: DayProps | null;
    endDate: DayProps | null;
  }) => {
    if (params.startDate && params.endDate) {
      props.onClickDone?.(params);
    }
    setAnchorEl(null);
  };
  //render
  return (
    <Stack>
      <Preview
        type="rangeDate"
        id={id}
        disabled={disabled}
        open={open}
        startDate={startDate}
        endDate={endDate}
        layout={engineConfig?.global?.layout}
        labelStartDate={localeText?.calendar?.previewCheckInLabel}
        labelEndDate={localeText?.calendar?.previewCheckOutLabel}
        getLabelNights={localeText?.calendar?.previewNightsLabel}
        onClickOpen={onClickOpen}
      />
      <Calendar
        id={id}
        open={open}
        anchorEl={anchorEl}
        defaultStartDate={startDate}
        defaultEndDate={endDate}
        daysList={daysList}
        locale={locale}
        calendarConfig={engineConfig?.calendar}
        popUpButtonDone={localeText?.calendar?.popUpButtonDone}
        onClickDone={onClickDone}
        onClose={onClose}
      />
    </Stack>
  );
};

export { CalendarRange };
