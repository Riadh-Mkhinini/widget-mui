import type { PropertyConfig } from "@engine";
import type { PropertyShortData } from "../property.types";

export type ContentPropertyProps = {
  config?: PropertyConfig;
  data?: Array<PropertyShortData>;
  onChange?: (item: PropertyShortData) => void;
  onClose?: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};
