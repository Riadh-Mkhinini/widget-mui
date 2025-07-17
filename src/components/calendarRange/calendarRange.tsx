import { type FC, useMemo, useState } from "react";
import { format } from "date-fns";
import { useTranslation } from "react-i18next";
//context
import { useIBE } from "@contextAPI";
//components
import { Preview } from "../commons";
import { Calendar, type DayProps } from "./calendar/calendar";
//helpers
import { getDayOfWeek, getTotalOfDays } from "@helpers";
//types
import type { CalendarRangeProps } from "./calendarRange.types";

const CalendarRange: FC<CalendarRangeProps> = (props) => {
  const { startDate, endDate, locale } = props;
  const { t } = useTranslation();
  const { engineConfig } = useIBE();

  //states
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  //useMemo
  const open = Boolean(anchorEl);
  const id = open ? "calendar-popover" : undefined;

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
    <>
      <Preview
        type="rangeDate"
        id={id}
        open={open}
        startDate={startDate}
        endDate={endDate}
        layout={engineConfig?.global?.layout}
        labelStartDate={t("calendar.preview_check_in_label")}
        labelEndDate={t("calendar.preview_check_out_label")}
        getLabelNights={(days) =>
          t("calendar.preview_nights_label", { value: days })
        }
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
        texts={{
          popUpButtonDone: t("calendar.pop_up_button_done"),
          popUpNote: t("calendar.pop_up_note"),
          popUpSubNote: t("calendar.pop_up_sub_note"),
          popUpStartEndDateNights: (start, end) =>
            t("calendar.pop_up_start_end_date_nights", {
              start: format(start, "EEEEEE, dd MMM"),
              end: format(end, "EEEEEE, dd MMM"),
              nights: getTotalOfDays(start, end),
            }),
        }}
        onClickDone={onClickDone}
        onClose={onClose}
      />
    </>
  );
};

export { CalendarRange, type DayProps };
