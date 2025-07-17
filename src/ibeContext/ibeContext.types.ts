import type {
  EngineConfig,
  EngineSize,
  ParamsSize,
} from "@/engine/engine.types";

export type IbeContextProps = {
  engineConfig?: EngineConfig;
  paramsSize: ParamsSize;
  paramsSizeExtraSmall: ParamsSize;
  paramsSizeSmall: ParamsSize;
  paramsSizeMedium: ParamsSize;
  paramsSizeLarge: ParamsSize;
  size: EngineSize;
};
export type IBEProviderProps = {
  engineConfig?: EngineConfig;
  size: EngineSize;
  children: React.ReactNode;
};
