import { format } from "date-fns";
import type { DayProps, PropertyShortData } from "@components";
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
        label: config?.global?.title?.label,
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

export const dataProperties: Array<PropertyShortData> = [
  {
    propertyId: "6881a78d6a5f9ec143c9eff0",
    location: {
      country: {
        id: 182,
        iso2: "RU",
        iso3: "RU",
        name: "Russia",
      },
      city: {
        id: 97620,
        name: "Anapa",
      },
      region: {
        id: 1891,
        name: "Krasnodar Krai",
      },
    },
    name: " Avdallini Hotel",
    identifier: "6634572",
    logoUrl: null,
  },
  {
    propertyId: "6881b9de6a5f9ec143cf4cf1",
    location: {
      country: {
        id: 182,
        iso2: "RU",
        iso3: "RU",
        name: "Russia",
      },
      city: {
        id: 110061,
        name: "Muromskoye",
      },
      region: {
        id: 4689,
        name: "Autonomous Republic of Crimea",
      },
    },
    name: " Boutique hotel Megapolis",
    identifier: "8875059",
    logoUrl: null,
  },
  {
    propertyId: "687feb4934db74e45e08392c",
    location: {
      country: {
        id: 107,
        iso2: "IT",
        iso3: "IT",
        name: "Italy",
      },
      city: {
        id: 138563,
        name: "Florence",
      },
      region: {
        id: 1664,
        name: "Tuscany",
      },
    },
    name: " Hotel Adler Cavalieri",
    identifier: "7501617",
    logoUrl: null,
  },
  {
    propertyId: "6881f9ed6a5f9ec143e00b87",
    location: {
      country: {
        id: 182,
        iso2: "RU",
        iso3: "RU",
        name: "Russia",
      },
      city: {
        id: 100465,
        name: "Orenburg",
      },
      region: {
        id: 1886,
        name: "Orenburg Oblast",
      },
    },
    name: " Villa de Idalgo",
    identifier: "9082263",
    logoUrl: null,
  },
  {
    propertyId: "6881172d6a5f9ec143a0aa17",
    location: {
      country: {
        id: 107,
        iso2: "IT",
        iso3: "IT",
        name: "Italy",
      },
      city: {
        id: 60649,
        name: "Sciacca",
      },
      region: {
        id: 1709,
        name: "Sicily",
      },
    },
    name: "!!! Sulla Spiaggia !!! - Montalbano House",
    identifier: "10822251",
    logoUrl: null,
  },
  {
    propertyId: "6880a73534db74e45e3d98f4",
    location: {
      country: {
        id: 182,
        iso2: "RU",
        iso3: "RU",
        name: "Russia",
      },
      city: {
        id: 99310,
        name: "Krasnogorskoye",
      },
      region: {
        id: 1913,
        name: "Udmurt Republic",
      },
    },
    name: '"Aravana" Hotel',
    identifier: "8893309",
    logoUrl: null,
  },
  {
    propertyId: "6881dd7e6a5f9ec143d8c93e",
    location: {
      country: {
        id: 142,
        iso2: "MX",
        iso3: "MX",
        name: "Mexico",
      },
      city: {
        id: 142808,
        name: "Puerto Vallarta",
      },
      region: {
        id: 4857,
        name: "Jalisco",
      },
    },
    name: '"Casa Luna Del Mar" W/Private Pool @Tres Mares Marina Vallarta',
    identifier: "9885479",
    logoUrl: null,
  },
  {
    propertyId: "688195336a5f9ec143c55085",
    location: {
      country: {
        id: 21,
        iso2: "BY",
        iso3: "BY",
        name: "Belarus",
      },
      city: {
        id: 15989,
        name: "Minsk",
      },
      region: {
        id: 2958,
        name: "Minsk",
      },
    },
    name: '"Gostinitsa" Hotel',
    identifier: "8730928",
    logoUrl: null,
  },
  {
    propertyId: "688194b86a5f9ec143c527ca",
    location: {
      country: {
        id: 182,
        iso2: "RU",
        iso3: "RU",
        name: "Russia",
      },
      city: {
        id: 99739,
        name: "Magnitogorsk",
      },
      region: {
        id: 1845,
        name: "Chelyabinsk Oblast",
      },
    },
    name: '"Klubnaya" Hotel',
    identifier: "7748992",
    logoUrl: null,
  },
];
