import type { CountryGrouped, PropertyItem } from "../property.types";

export type CardGroupedProps = {
  item: CountryGrouped;
  onClick?: (property: PropertyItem) => void;
};
