import {
  addDays,
  eachDayOfInterval,
  format,
  startOfWeek,
  type Locale,
} from "date-fns";
import type { TFunction } from "i18next";

export function groupBy<T>(array: Array<T>, key: keyof T) {
  return array.reduce((objectsByKeyValue, obj) => {
    const value = obj[key];
    //@ts-ignore
    objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
    return objectsByKeyValue;
  }, {});
}

export const getDayOfWeek = (locale?: Locale) => {
  const date = startOfWeek(new Date(), { weekStartsOn: 1 });
  const daysOfWeek = eachDayOfInterval({ start: date, end: addDays(date, 6) });

  const weekdays = daysOfWeek.map((day) => format(day, "EEEEEE", { locale }));

  return weekdays;
};

type GetTotalNumberSelectedParams<T> = {
  data: Array<T>;
  key: keyof T;
};

export function getTotalNumberSelected<T>(
  params: GetTotalNumberSelectedParams<T>
): number {
  const { data, key } = params;
  let total = 0;
  data.forEach((element) => {
    if (element[key]) {
      total++;
    }
  });
  return total;
}

export const getTotalOfDays = (start?: Date, end?: Date) => {
  if (!start || !end) {
    return 0;
  }
  const startDate = new Date(new Date(start).setHours(8, 0, 0, 0));
  const endDate = new Date(new Date(end).setHours(8, 0, 0, 0));
  const timeStart = startDate.getTime();
  const timeEnd = endDate.getTime();
  if (Number.isNaN(timeEnd) || Number.isNaN(timeStart)) {
    return 0;
  }
  const difference = timeEnd - timeStart;
  const totalDays = Math.ceil(difference / (1000 * 3600 * 24));
  return totalDays;
};

export const getMessageGuests = (params: {
  t: TFunction;
  rooms?: number;
  adults: number;
  children: number;
}) => {
  const { t, rooms = 0, adults, children } = params;
  const data = [
    {
      count: rooms,
      message:
        rooms === 1 ? t("guests.room") : t("guests.rooms", { value: rooms }),
    },
    {
      count: adults,
      message:
        adults === 1
          ? t("guests.adult")
          : t("guests.adults", { value: adults }),
    },
    {
      count: children,
      message:
        children === 1
          ? t("guests.child")
          : t("guests.children", { value: children }),
    },
  ];
  return data
    .filter((o) => o.count > 0)
    .map((o) => o.message)
    .join(", ");
};
