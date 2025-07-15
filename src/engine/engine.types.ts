import type { PaletteOptions, Theme } from "@mui/material";
import type { Locale } from "date-fns";

export type DayProps = {
  date: Date;
  formated: string;
  type?: "PREVIOUS_DAY" | "NEXT_DAY";
  disabled?: boolean;
  background?: string;
  color?: string;
  weatherIcon?: React.ReactNode;
  temperature?: string;
  price?: string;
  group?: string;
};

//*****************PROPS******************** */
export type EngineProps = {
  disabled?: boolean;
  disabledWithoutColor?: boolean;
  defaultState?: EngineState;
  state?: EngineState;
  locale?: Locale;
  engineConfig?: EngineConfig;
  localeText?: LocaleText;
  size: EngineSize;
  title?: string;
  onClickSearch?: (values: EngineState) => Promise<void>;
};

export type EngineSize = "xl" | "lg" | "md" | "sm" | "xs";
//*****************STATE******************** */

export type EngineState = {
  searchProperty?: string;
  property?: PropertyItem | null;
  //
  startDate?: DayProps | null;
  endDate?: DayProps | null;
  //
  guestsResult?: { rooms: number; adults: number; childs: number };
  rooms?: Array<RoomGuests>;
  //
  promoCode: string;
};

export type PropertyItem = {
  id: string;
  name: string;
  country: string;
  city: string;
  image?: string;
};
export type RoomGuests = {
  adultsCount: number;
  childCount: number;
  childs: Array<{ value: number | null }>;
};

//*****************ENGINE CONFIG******************** */
// Engine config
export type EngineConfig = {
  global?: GlobalConfig;
  property?: PropertyConfig;
  calendar?: CalendarConfig;
  guests?: GuestsPropertyConfig;
  promoCode?: PromoCodeConfig;
};

//****GLOBAL***

export type GlobalConfig = {
  theme?: Theme;
  container?: ContainerConfig;
  layout?: LayoutConfig;
  preview?: PreviewConfig;
  search?: SearchEngineConfig;
  title?: TitleConfig;
};

export type TitleConfig = {
  fontSize?: number | string;
  color?: string;
  fontWeight?: string;
  textAlign?: "left" | "center" | "right" | "justify";
};

export type Palette = PaletteOptions;

export type ContainerConfig = {
  background?: string;
  backgroundFilter?: string;
  backdropFilter?: string;
  borderRadius?: number;
  padding?: number;
};
export type LayoutConfig = "separate" | "combined";
export type PreviewConfig = {
  //isRounded and boxShadow worked only when layout = combined
  isRounded?: boolean;
  showShadow?: boolean;
  background?: string;
  radius?: number;
  borderWidth?: number;
  icon?: string;
  border?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  disabled?: string;
  size?: "small" | "medium" | "large" | "custom";
  formatDate?: "dd-MM-yyyy" | "yyyy-MM-dd";
  formatTime?: "24" | "12";
  showIcon?: boolean;
  customParamsSize?: ParamsSize;
};

export type ParamsSize = {
  sizeIcon: number;
  fontSizeLabel: number;
  fontSizeValue: number;
  fontSizeButton: number;
  heightContent: number;
};
//****CALENDAR***
export type CalendarConfig = {
  popUpMode?: "default" | "pop-up";
  monthNumberDisplays?: number;
  maxYear?: number;
};

//****PROPERTY***
export type PropertyConfig = {
  popUpMode?: "default" | "pop-up";
  mode?: "simple" | "grouped" | "cards";
  data?: Array<PropertyItem>;
  showSearch?: boolean;
  showProperty?: boolean;
};

//****GUESTS***
export type GuestsPropertyConfig = {
  mode?: "default" | "accordion";
  popUpMode?: "default" | "pop-up";
  counterMode?: "rounded" | "circular";
  maxRoom?: number;
  maxAdults?: number;
  maxChildren?: number;
  maxAgesChildren?: number;
};
//****PROMO CODE***
export type PromoCodeConfig = {
  showPromoCode?: boolean;
};
export type SearchEngineConfig = {
  mode?: "button" | "icon-button";
  showIcon?: boolean;
};

//*****************TRANSLATION******************** */
export type LocaleText = {
  searchLabel?: string;
  property?: {
    previewLabel?: string;
    previewPlaceholder?: string;
    popUpTitle?: string;
    popUpSubTitle?: string;
    popUpSearchPlaceholder?: string;
  };
  guests?: {
    previewLabel?: string;
    previewValue?: (rooms?: number, adults?: number, childs?: number) => string;
    popUpTitle?: string;
    popUpRoom?: (value: number) => string;
    popUpAdults?: string;
    popUpAdultsCaption?: string;
    popUpChildren?: string;
    popUpChildrenCaption?: string;
    popUpAgeChildPlaceholder?: string;
    popUpAgeChild?: (value: number) => string;
    popUpCountAdultChild?: (adults: number, children: number) => string;
    popUpButtonAddRoom?: string;
    popUpButtonDone?: string;
    popUpRequiredField?: string;
  };
  calendar?: {
    previewCheckInLabel?: string;
    previewCheckOutLabel?: string;
    previewNightsLabel?: (value: number) => string;
    popUpButtonDone?: string;
    popUpRequiredField?: string;
  };
  promoCode?: {
    previewPlaceholder?: string;
  };
};
