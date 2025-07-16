export type PropertyProps = {
  value?: PropertyItem | null;
  data?: Array<PropertyItem>;
  onChange?: (item: PropertyItem) => void;
};

export type PropertyItem = {
  id: string;
  name: string;
  country: string;
  city: string;
  image?: string;
};

export type CityGrouped = {
  city: string;
  data: Array<PropertyItem>;
};

export type CountryGrouped = {
  country: string;
  data: Array<CityGrouped>;
};
