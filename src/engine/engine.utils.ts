import { format } from "date-fns";
import type { DayProps } from "@components";
import type { EngineConfig } from "@engine";

export const generateDayProps = (day: Date): DayProps => {
  const isWeekend = day.getDay() === 0 || day.getDay() === 6;
  return {
    date: day,
    formated: format(day, "yyyy-MM-dd"),
    disabled: false,
    background: isWeekend ? "#F9FAFB" : "#ffffff",
  };
};

export const initConfigEngine = (config?: EngineConfig): EngineConfig => {
  return {
    size: config?.size,
    colors: {
      primary: {
        main: config?.colors?.primary?.main || "#2250DA",
        light: config?.colors?.primary?.light || "#82ACFE",
        dark: config?.colors?.primary?.dark || "#031B4D",
        contrastText: config?.colors?.primary?.contrastText || "#FFFFFF",
      },
      secondary: {
        main: config?.colors?.secondary?.main || "#2250DA",
        light: config?.colors?.secondary?.light || "#82ACFE",
        dark: config?.colors?.secondary?.dark || "#031B4D",
        contrastText: config?.colors?.secondary?.contrastText || "#FFFFFF",
      },
    },

    global: {
      layout: config?.global?.layout || "combined",
      preview: {
        showIcon: config?.global?.preview?.showIcon ?? true,
        radius: config?.global?.preview?.radius ?? 1,
        background: config?.global?.preview?.background,
        borderWidth: config?.global?.preview?.borderWidth,
        isRounded: config?.global?.preview?.isRounded,
        border: config?.global?.preview?.border,
        size: config?.global?.preview?.size,
        label: config?.global?.preview?.label,
        value: config?.global?.preview?.value,
        placeholder: config?.global?.preview?.placeholder,
        icon: config?.global?.preview?.icon,
        formatDate: config?.global?.preview?.formatDate || "dd-MM-yyyy",
        showShadow: config?.global?.preview?.showShadow ?? false,
        customParamsSize: config?.global?.preview?.customParamsSize,
      },
      container: {
        padding: config?.global?.container?.padding,
        background: config?.global?.container?.background,
        borderRadius: config?.global?.container?.borderRadius,
        backdropFilter: config?.global?.container?.backdropFilter,
        backgroundFilter: config?.global?.container?.backgroundFilter,
      },
      title: {
        fontSize: config?.global?.title?.fontSize,
        color: config?.global?.title?.color,
        fontWeight: config?.global?.title?.fontWeight,
        textAlign: config?.global?.title?.textAlign,
      },
    },
    calendar: {
      popUpMode: config?.calendar?.popUpMode || "default",
      monthNumberDisplays: config?.calendar?.monthNumberDisplays ?? 1,
      maxYear: config?.calendar?.maxYear ?? 1,
      isVisiblePrice: config?.calendar?.isVisiblePrice ?? false,
      isVisibleWeather: config?.calendar?.isVisibleWeather ?? false,
    },
    property: {
      mode: config?.property?.mode ?? "simple",
      popUpMode: config?.property?.popUpMode ?? "default",
      showSearch: config?.property?.showSearch ?? true,
      showProperty: config?.property?.showProperty ?? false,
    },
    promoCode: {
      showPromoCode: config?.promoCode?.showPromoCode ?? false,
    },
    guests: {
      mode: config?.guests?.mode ?? "accordion",
      popUpMode: config?.guests?.popUpMode ?? "default",
      counterMode: config?.guests?.counterMode ?? "circular",
      maxAdults: config?.guests?.maxAdults ?? 6,
      maxChildren: config?.guests?.maxChildren ?? 6,
      maxAgesChildren: config?.guests?.maxAgesChildren ?? 16,
      maxRoom: config?.guests?.maxRoom ?? 10,
    },
    search: {
      mode: config?.search?.mode ?? "button",
      showIcon: config?.search?.showIcon ?? true,
    },
  };
};
