import { type FC, useCallback, useEffect, useMemo, useState } from "react";
import { useTheme } from "@mui/material";
import { addDays, format, sub } from "date-fns";
//utils
import {
  generateDaysList,
  getDatesInRange,
  getMaxWidthPopup,
  getMinMaxDate,
} from "./calendar.utils";
//components
import { Popover } from "@/components/commons";
import Header from "./header/header";
import Month from "./month/month";
import Footer from "./footer/footer";
//styles
import { Content, List } from "./calendar.styles";
//types
import type { CalendarProps, DayProps } from "./calendar.types";

const Calendar: FC<CalendarProps> = (props) => {
  const {
    daysList = ["Mo", "Tu", "We", "Th", "Fr", "Sat", "Su"],
    defaultStartDate,
    defaultEndDate,
    locale,
    calendarConfig,
    texts,
    id,
    open,
    anchorEl,
  } = props;
  const theme = useTheme();
  //states
  const [from, setFrom] = useState<Date>(new Date());
  const [startDate, setStartDate] = useState<DayProps | null>(
    defaultStartDate || null
  );
  const [endDate, setEndDate] = useState<DayProps | null>(
    defaultEndDate || null
  );
  const [dayHovered, setDayHovered] = useState<Date | null>(null);
  const [hoverList, setHoverList] = useState<Array<string>>([]);

  //useMemo
  const config = useMemo(
    () => ({
      monthNumberDisplays:
        typeof calendarConfig?.monthNumberDisplays === "number"
          ? calendarConfig?.monthNumberDisplays
          : 0,
      maxYear: calendarConfig?.maxYear || 1,
      isVisiblePrice: calendarConfig?.isVisiblePrice,
      isVisibleWeather: calendarConfig?.isVisibleWeather,
    }),
    [calendarConfig]
  );

  const monthList = useMemo(
    () =>
      generateDaysList({
        theme,
        date: from,
        monthNumberDisplays: config.monthNumberDisplays,
        isVisiblePrice: config.isVisiblePrice,
        isVisibleWeather: config.isVisibleWeather,
      }),
    [
      theme,
      from,
      config.monthNumberDisplays,
      config.isVisiblePrice,
      config.isVisibleWeather,
    ]
  );

  const { disabledPrevious, disabledNext } = useMemo(
    () =>
      getMinMaxDate({
        from,
        maxYear: config.maxYear,
        monthNumberDisplays: config.monthNumberDisplays,
      }),
    [from, config.maxYear, config.monthNumberDisplays]
  );

  //initialist hover list when start and date equals null or differs from null at the same time.
  useEffect(() => {
    if (
      (startDate && endDate && hoverList.length > 0) ||
      (!startDate && !endDate && hoverList.length > 0)
    ) {
      setHoverList([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startDate, endDate]);

  //functions
  const onClickPrevious = useCallback(() => {
    const firstMonth = monthList[0];
    const firstDayInFirstMonth = firstMonth[0].date;
    const from = new Date(
      sub(firstDayInFirstMonth, {
        days: 1,
        months: config.monthNumberDisplays,
      }).setDate(1)
    );
    setFrom(from);
  }, [monthList, config.monthNumberDisplays]);

  const onClickNext = useCallback(() => {
    const lastMonth = monthList[monthList.length - 1];
    const lastDayInLastMonth = lastMonth[lastMonth.length - 1].date;
    const from = addDays(lastDayInLastMonth, 1);
    setFrom(from);
  }, [monthList]);

  const onClickDay = useCallback(
    (day: DayProps) => {
      if (startDate && startDate.date === day.date) return;

      if (!startDate || (startDate && endDate) || day.date < startDate.date) {
        setStartDate(day);
        setEndDate(null);
        setHoverList([]);
      } else {
        setEndDate(day);
      }
    },
    [startDate, endDate]
  );
  const onMouseEnter = useCallback(
    (day: DayProps) => {
      setDayHovered(day.date);
      if (startDate && !endDate && day.date > startDate.date) {
        const list = getDatesInRange(startDate.date, day.date);
        setHoverList(list);
      }
    },
    [startDate, endDate]
  );
  const onClose = () => {
    if (startDate && !endDate) {
      setHoverList([]);
      setStartDate(null);
      setEndDate(null);
    }
    props.onClose?.();
  };

  const onClickDone = () => {
    if (!startDate || !endDate) {
      setStartDate(null);
      setEndDate(null);
    }
    props.onClickDone?.({ startDate, endDate });
  };
  //render
  const renderMonths = () => {
    return monthList.map((month, index) => {
      return (
        <Month
          key={index}
          mode={calendarConfig?.popUpMode}
          month={format(month[0].date, "MMMM", { locale })}
          year={format(month[0].date, "yyyy", { locale })}
          locale={locale}
          startDate={startDate}
          endDate={endDate}
          daysList={daysList}
          daysOfMonth={month}
          hoverList={hoverList}
          onClickDay={onClickDay}
          onMouseEnter={onMouseEnter}
        />
      );
    });
  };
  const maxWidth = useMemo(
    () => getMaxWidthPopup(config.monthNumberDisplays),
    [config.monthNumberDisplays]
  );

  return (
    <Popover
      mode={calendarConfig?.popUpMode}
      maxWidth={maxWidth}
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      marginThreshold={0}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
    >
      <Content>
        <Header
          locale={locale}
          disabledPrevious={disabledPrevious}
          disabledNext={disabledNext}
          onClickPrevious={onClickPrevious}
          onClickNext={onClickNext}
        />
        <List monthNumberDisplays={config.monthNumberDisplays}>
          {renderMonths()}
        </List>
      </Content>
      <Footer
        label={texts?.popUpButtonDone}
        dayHovered={dayHovered}
        hoverList={hoverList}
        onClick={onClickDone}
      />
    </Popover>
  );
};

export { Calendar, type DayProps };
