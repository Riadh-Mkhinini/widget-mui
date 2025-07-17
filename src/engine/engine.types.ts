import * as locales from "date-fns/locale";
import type { DayProps, PropertyItem, RoomData } from "@components";
//*****************PROPS******************** */
export type ResultEngine = {
  property?: PropertyItem | null;
  startDate: DayProps | null;
  endDate: DayProps | null;
  promoCode?: string;
  rooms: Array<RoomData>;
};
export type EngineProps = {
  idEngine: string;
  language?: Language;
  onClickSearch?: (values: ResultEngine) => void;
};

export type Language = keyof typeof locales;
export type EngineSize = "xl" | "lg" | "md" | "sm" | "xs";

//*****************ENGINE CONFIG******************** */
// Engine config
export type EngineConfig = {
  colors?: Palette;
  global?: GlobalConfig;
  property?: PropertyConfig;
  calendar?: CalendarConfig;
  guests?: GuestsPropertyConfig;
  promoCode?: PromoCodeConfig;
  search?: SearchEngineConfig;
};

//****GLOBAL***
export type GlobalConfig = {
  container?: ContainerConfig;
  layout?: LayoutConfig;
  preview?: PreviewConfig;
  title?: TitleConfig;
};

export type TitleConfig = {
  fontSize?: number | string;
  color?: string;
  fontWeight?: string;
  textAlign?: "left" | "center" | "right" | "justify";
};

type PaletteColorOptions = {
  light?: string;
  main: string;
  dark?: string;
  contrastText?: string;
};
export type Palette = {
  primary?: PaletteColorOptions;
  secondary?: PaletteColorOptions;
};

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
  size?: "small" | "medium" | "large" | "custom";
  formatDate?: "dd-MM-yyyy" | "yyyy-MM-dd";
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
