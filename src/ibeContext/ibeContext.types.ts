import type {
  EngineConfig,
  EngineSize,
  LocaleText,
  ParamsSize,
} from "@/engine/engine.types";

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
