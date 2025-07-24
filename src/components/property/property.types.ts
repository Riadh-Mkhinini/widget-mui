export type PropertyProps = {
  value?: PropertyShortData | null;
  data?: Array<PropertyShortData>;
  onChange?: (item: PropertyShortData) => void;
};

export type PropertyShortData = {
  propertyId: string;
  name: string;
  logoUrl?: string | null;
  identifier?: string;
  location: LocationData;
};
export type LocationData = {
  country: CountryShortData;
  region?: RegionShortData;
  city?: CityShortData;
};
export type CountryShortData = {
  id: number;
  name: string;
  iso2: string;
  iso3: string;
};
export type RegionShortData = {
  id: number;
  name: string;
};
export type CityShortData = {
  id: number;
  name: string;
};

export type CityGrouped = {
  city: string;
  data: Array<PropertyShortData>;
};

export type CountryGrouped = {
  country: string;
  data: Array<CityGrouped>;
};
