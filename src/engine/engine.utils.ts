import * as locales from "date-fns/locale";
import { format, type Locale } from "date-fns";
import type { DayProps } from "@components";
import type { Language, LocaleText } from "./engine.types";

export const initLocaleText = (localeText?: LocaleText): LocaleText => ({
  searchLabel: localeText?.searchLabel || "Search",
  property: {
    previewLabel: localeText?.property?.previewLabel || "Choose hotel",
    previewPlaceholder:
      localeText?.property?.previewPlaceholder || "Select your destination",
    popUpTitle: localeText?.property?.popUpTitle || "Choose hotel",
    popUpSubTitle:
      localeText?.property?.popUpSubTitle || "Select your destination",
    popUpSearchPlaceholder:
      localeText?.property?.popUpSearchPlaceholder || "Search...",
  },
  guests: {
    previewLabel: localeText?.guests?.previewLabel || "Guests",
    previewValue: (rooms?: number, adults?: number, childs?: number) => {
      if (localeText?.guests?.previewValue) {
        return localeText?.guests?.previewValue(rooms, adults, childs);
      }
      return childs
        ? `${rooms} rooms, ${adults} adults, ${
            childs === 1 ? `${childs} child` : `${childs} children`
          }`
        : `${rooms} rooms, ${adults} adults`;
    },
    popUpTitle: localeText?.guests?.popUpTitle || "Guests",
    popUpRoom: (value: number) => {
      if (localeText?.guests?.popUpRoom) {
        return localeText?.guests?.popUpRoom(value);
      }
      return `ROOM ${value}`;
    },
    popUpAdults: localeText?.guests?.popUpAdults || "Adults",
    popUpAdultsCaption: localeText?.guests?.popUpAdultsCaption || "(13+ years)",
    popUpChildren: localeText?.guests?.popUpChildren || "Children",
    popUpChildrenCaption:
      localeText?.guests?.popUpChildrenCaption || "Children",
    popUpAgeChild: (value: number) => {
      if (localeText?.guests?.popUpAgeChild) {
        return localeText?.guests.popUpAgeChild(value);
      }
      return `Age of ${value} child`;
    },
    popUpButtonAddRoom: localeText?.guests?.popUpButtonAddRoom || "Add room",
    popUpButtonDone: localeText?.guests?.popUpButtonDone || "Confirm",
    popUpRequiredField:
      localeText?.guests?.popUpRequiredField || "This field is required",
    popUpAgeChildPlaceholder:
      localeText?.guests?.popUpAgeChildPlaceholder || "Select",
    popUpCountAdultChild(adults, children) {
      if (localeText?.guests?.popUpCountAdultChild) {
        return localeText?.guests.popUpCountAdultChild(adults, children);
      }
      return `${adults} adults, ${children} children`;
    },
  },
  calendar: {
    previewCheckInLabel:
      localeText?.calendar?.previewCheckInLabel || "Check in",
    previewCheckOutLabel:
      localeText?.calendar?.previewCheckOutLabel || "Check out",
    previewNightsLabel: (value: number) => {
      if (localeText?.calendar?.previewNightsLabel) {
        return localeText?.calendar.previewNightsLabel(value);
      }
      return `${value} nights`;
    },
    popUpRequiredField:
      localeText?.calendar?.popUpRequiredField || "This field is required",
    popUpButtonDone: localeText?.calendar?.popUpButtonDone || "Confirm",
  },
  promoCode: {
    previewPlaceholder:
      localeText?.promoCode?.previewPlaceholder || "Promo code",
  },
});

export const generateDayProps = (day: Date): DayProps => {
  const isWeekend = day.getDay() === 0 || day.getDay() === 6;
  return {
    date: day,
    formated: format(day, "yyyy-MM-dd"),
    disabled: false,
    background: isWeekend ? "#F9FAFB" : "#ffffff",
    color: isWeekend ? "#667085" : "#344054",
  };
};

const normalizeLang = (lang: Language): string => {
  return lang.toLowerCase().replace(/[-_].*$/, "");
};

export const getLocale = (language?: Language): Locale => {
  if (!language) return locales.enUS;

  const normalized = normalizeLang(language);

  // Try exact match first (e.g., 'en-US')
  if (language in locales) {
    return (locales as Record<string, Locale>)[language];
  }

  // Then try normalized base language code (e.g., 'en')
  if (normalized in locales) {
    return (locales as Record<string, Locale>)[normalized];
  }

  // Fallback to en-US
  return locales.enUS;
};
