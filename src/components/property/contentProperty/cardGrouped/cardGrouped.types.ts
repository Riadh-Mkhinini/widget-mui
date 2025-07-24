import type { CountryGrouped, PropertyShortData } from "../../property.types";

export type CardGroupedProps = {
  item: CountryGrouped;
  onClick?: (property: PropertyShortData) => void;
};
