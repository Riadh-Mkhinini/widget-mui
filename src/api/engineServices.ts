import type { EngineConfig } from "@engine";
import { BASE_URL } from "./config";

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

export type LocationData = {
  country: CountryShortData;
  region?: RegionShortData;
  city?: CityShortData;
};

export type PropertyShortData = {
  propertyId: string;
  name: string;
  logoUrl?: string;
  identifier?: string;
  location: LocationData;
};
export type ChainShortData = {
  chainId: string;
  name: string;
  logoUrl?: string;
  website?: string;
  properties?: Array<PropertyShortData>;
};
export type PropertyEngineStatus = "Inactive" | "Active";

export type PropertyEngineData = {
  propertyEngineId: string;
  propertyEngineNumber: string;
  name: string;
  property?: PropertyShortData;
  chain?: ChainShortData;
  paletteCode?: string;
  allowPromoCode: boolean;
  category: string;
  settings?: EngineConfig;
  allowedDomains: Array<string>;
  status: PropertyEngineStatus;
  createdAt: string;
  updatedAt: string;
};

export class EngineServices {
  public static async getEngineById({
    idEngine,
    xLangCode,
  }: {
    idEngine: string;
    xLangCode?: string;
  }): Promise<PropertyEngineData> {
    const response = await fetch(
      `${BASE_URL}/property/property-engines/${idEngine}/public`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-lang-code": xLangCode || "en",
        },
      }
    );

    if (!response.ok) {
      const text = await response.text();
      throw new Error(text || `Failed to fetch engine (${response.status})`);
    }

    const data: PropertyEngineData = await response.json();
    return data;
  }
}
