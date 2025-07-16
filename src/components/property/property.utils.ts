import { groupBy } from "@helpers";
import type {
  CityGrouped,
  CountryGrouped,
  PropertyItem,
} from "./property.types";

export const groupListPropertyBy = (data: Array<PropertyItem>) => {
  const listGroupedByCountry = groupBy(data, "country");
  const countrys: Array<CountryGrouped> = [];
  Object.keys(listGroupedByCountry).forEach((keyCountry) => {
    //@ts-ignore
    const dataCountry: Array<PropertyItem> = listGroupedByCountry[keyCountry];
    const listGroupedByCity = groupBy(dataCountry, "city");
    const cities: Array<CityGrouped> = [];
    Object.keys(listGroupedByCity).forEach((keyCity) => {
      //@ts-ignore
      const dataCities: Array<PropertyItem> = listGroupedByCity[keyCity];
      cities.push({ city: keyCity, data: dataCities });
    });
    countrys.push({ country: keyCountry, data: cities });
  });
  return countrys;
};
