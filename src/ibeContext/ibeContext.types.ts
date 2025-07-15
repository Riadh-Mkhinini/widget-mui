import type {
  EngineConfig,
  EngineSize,
  LocaleText,
  ParamsSize,
} from "@/widget/widget.types";

export type IbeContextProps = {
  localeText?: LocaleText;
  engineConfig?: EngineConfig;
  paramsSize: ParamsSize;
  paramsSizeExtraSmall: ParamsSize;
  paramsSizeSmall: ParamsSize;
  paramsSizeMedium: ParamsSize;
  paramsSizeLarge: ParamsSize;
  size: EngineSize;
};
export type IBEProviderProps = {
  localeText?: LocaleText;
  engineConfig?: EngineConfig;
  size: EngineSize;
  children: React.ReactNode;
};
