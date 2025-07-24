import type { DayProps, PropertyShortData, RoomData } from "@components";
import type { Language } from "@helpers";
//*****************PROPS******************** */
export type ResultEngine = {
  property?: PropertyShortData | null;
  startDate: DayProps | null;
  endDate: DayProps | null;
  promoCode?: string;
  rooms: Array<RoomData>;
};
export type EngineProps = {
  idEngine?: string;
  demo?: boolean;
  language?: Language;
  config?: EngineConfig;
  onClickSearch?: (values: ResultEngine) => void;
};

export type EngineSize = "xl" | "lg" | "md" | "sm" | "xs";

//*****************ENGINE CONFIG******************** */
// Engine config
export type EngineConfig = {
  size?: EngineSize;
  colors?: Palette;
  global?: GlobalConfig;
  property?: PropertyConfig;
  calendar?: CalendarConfig;
  guests?: GuestsConfig;
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
  label?: string;
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
  isVisibleWeather?: boolean;
  isVisiblePrice?: boolean;
};

//****PROPERTY***
export type PropertyConfig = {
  popUpMode?: "default" | "pop-up";
  mode?: "simple" | "grouped" | "cards";
  showSearch?: boolean;
  showProperty?: boolean;
};

//****GUESTS***
export type GuestsConfig = {
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
