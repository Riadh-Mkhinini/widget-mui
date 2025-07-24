import type { CountryGrouped, PropertyShortData } from "../property.types";

export const groupByCountryAndCity = (
  properties: Array<PropertyShortData>
): Array<CountryGrouped> => {
  const countryMap = new Map<string, Map<string, PropertyShortData[]>>();

  for (const property of properties) {
    const country = property.location.country.name;
    const city = property.location.city?.name ?? "Unknown";

    if (!countryMap.has(country)) {
      countryMap.set(country, new Map());
    }

    const cityMap = countryMap.get(country)!;

    if (!cityMap.has(city)) {
      cityMap.set(city, []);
    }

    cityMap.get(city)!.push(property);
  }

  const result: Array<CountryGrouped> = [];

  for (const [country, cities] of countryMap.entries()) {
    const cityData = Array.from(cities.entries()).map(([city, data]) => ({
      city,
      data,
    }));

    result.push({ country, data: cityData });
  }

  return result;
};
