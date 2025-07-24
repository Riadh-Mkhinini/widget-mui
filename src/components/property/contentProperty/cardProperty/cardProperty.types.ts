import type { PropertyShortData } from "../../property.types";

export type CardPropertyProps = {
  item: PropertyShortData;
  onClick?: (item: any) => void;
};
