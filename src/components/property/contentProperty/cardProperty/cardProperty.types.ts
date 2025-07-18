import type { PropertyItem } from "../../property.types";

export type CardPropertyProps = {
  item: PropertyItem;
  onClick?: (item: any) => void;
};
