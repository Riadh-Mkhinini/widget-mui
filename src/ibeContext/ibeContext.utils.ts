import { createContext } from "react";
import type { IbeContextProps } from "./ibeContext.types";
import type { ParamsSize } from "@/widget/widget.types";

export const paramsSizeExtraSmall: ParamsSize = {
  sizeIcon: 18,
  fontSizeLabel: 12,
  fontSizeValue: 12,
  fontSizeButton: 14,
  heightContent: 44,
};

export const paramsSizeSmall: ParamsSize = {
  sizeIcon: 20,
  fontSizeLabel: 12,
  fontSizeValue: 12,
  fontSizeButton: 14,
  heightContent: 48,
};

export const paramsSizeMedium: ParamsSize = {
  sizeIcon: 24,
  fontSizeLabel: 12,
  fontSizeValue: 14,
  fontSizeButton: 14,
  heightContent: 54,
};
export const paramsSizeLarge: ParamsSize = {
  sizeIcon: 26,
  fontSizeLabel: 14,
  fontSizeValue: 14,
  fontSizeButton: 16,
  heightContent: 60,
};

export const IbeContext = createContext<IbeContextProps>({
  paramsSizeExtraSmall,
  paramsSizeSmall,
  paramsSizeMedium,
  paramsSizeLarge,
  paramsSize: {
    sizeIcon: 0,
    fontSizeLabel: 0,
    fontSizeValue: 0,
    fontSizeButton: 0,
    heightContent: 0,
  },
  size: "xl",
});
