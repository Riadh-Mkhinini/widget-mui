import { type FC, useMemo, useState } from "react";
import { Stack, Tooltip } from "@mui/material";
import { useController, useFormContext } from "react-hook-form";
//context
import { useIBE } from "@contextAPI";
//components
import { Preview } from "../commons";
import { Calendar } from "./calendar/calendar";
//helpers
import { getDayOfWeek } from "@helpers";
//types
import type { CalendarRangeProps } from "./calendarRange.types";
import type { DayProps, EngineState } from "@/widget/widget.types";

const CalendarRange: FC<CalendarRangeProps> = (props) => {
  const {
    disabled,
    disabledWithoutColor,
    defaultStartDate,
    defaultEndDate,
    locale,
  } = props;
  const { localeText, engineConfig } = useIBE();
  //
  const methods = useFormContext<EngineState>();
  const { fieldState } = useController({
    control: methods.control,
    name: "startDate",
    rules: {
      required: localeText?.calendar?.popUpRequiredField,
    },
  });
  const resultStartDate = methods.watch("startDate");
  const resultEndDate = methods.watch("endDate");

  //states

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  //useMemo
  const open = Boolean(anchorEl);
  const id = open ? "property-popover" : undefined;

  const daysList = useMemo(() => getDayOfWeek(locale), [locale]);
  //functions
  const onClickOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    methods.clearErrors("startDate");
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
      methods.setValue("startDate", params.startDate);
      methods.setValue("endDate", params.endDate);
    }
    setAnchorEl(null);
  };
  //render
  return (
    <Tooltip
      arrow
      open={!!fieldState.error?.message}
      title={fieldState.error?.message}
    >
      <Stack>
        <Preview
          type="rangeDate"
          disabledWithoutColor={disabledWithoutColor}
          id={id}
          disabled={disabled}
          open={open}
          startDate={resultStartDate}
          endDate={resultEndDate}
          layout={engineConfig?.global?.layout}
          labelStartDate={localeText?.calendar?.previewCheckInLabel}
          labelEndDate={localeText?.calendar?.previewCheckOutLabel}
          getLabelNights={(days) =>
            localeText?.calendar?.previewNightsLabel &&
            localeText?.calendar?.previewNightsLabel(days)
          }
          onClickOpen={onClickOpen}
        />
        <Calendar
          id={id}
          open={open}
          anchorEl={anchorEl}
          defaultStartDate={defaultStartDate}
          defaultEndDate={defaultEndDate}
          daysList={daysList}
          locale={locale}
          calendarConfig={engineConfig?.calendar}
          popUpButtonDone={localeText?.calendar?.popUpButtonDone}
          tags={[
            { label: "Available", textColor: "#027A48", background: "#ECFDF3" },
            { label: "Min-Stay", textColor: "#B54708", background: "#FFFAEB" },
            { label: "Sold Out", textColor: "#B42318", background: "#FEF3F2" },
            { label: "Min-Price", textColor: "#026AA2", background: "#F0F9FF" },
          ]}
          onClickDone={onClickDone}
          onClose={onClose}
        />
      </Stack>
    </Tooltip>
  );
};

export { CalendarRange };
