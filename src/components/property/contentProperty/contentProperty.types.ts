import type { PropertyConfig } from "@engine";
import type { PropertyItem } from "../property.types";

export type ContentPropertyProps = {
  config?: PropertyConfig;
  data?: Array<PropertyItem>;
  onChange?: (item: PropertyItem) => void;
  onClose?: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};
