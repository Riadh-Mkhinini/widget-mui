import { type FC, useContext, useMemo } from "react";
import {
  paramsSizeLarge,
  paramsSizeMedium,
  paramsSizeSmall,
  paramsSizeExtraSmall,
  IbeContext,
} from "./ibeContext.utils";
import type { IBEProviderProps } from "./ibeContext.types";
import type { ParamsSize } from "@/engine/engine.types";

export const IBEProvider: FC<IBEProviderProps> = (props) => {
  const { children, size, engineConfig } = props;

  const paramsSize: ParamsSize = useMemo(() => {
    if (engineConfig?.global?.preview?.size === "custom") {
      return (
        engineConfig?.global?.preview?.customParamsSize || paramsSizeMedium
      );
    } else if (engineConfig?.global?.preview?.size === "small") {
      return paramsSizeSmall;
    } else if (engineConfig?.global?.preview?.size === "large") {
      return paramsSizeLarge;
    }
    return paramsSizeMedium;
  }, [
    engineConfig?.global?.preview?.size,
    engineConfig?.global?.preview?.customParamsSize,
  ]);

  return (
    <IbeContext.Provider
      value={{
        engineConfig,
        paramsSize,
        paramsSizeExtraSmall,
        paramsSizeSmall,
        paramsSizeMedium,
        paramsSizeLarge,
        size,
      }}
    >
      {children}
    </IbeContext.Provider>
  );
};

export const useIBE = () => {
  return useContext(IbeContext);
};

export * from "./ibeContext.types";
