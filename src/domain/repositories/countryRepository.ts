import { ICountryDetailed, ICountryBasic } from "../models/country";

export interface ICountryRepository {
  getCountries: () => Promise<ICountryBasic[]>;
  getCountriesByRegion: (region: string) => Promise<ICountryBasic[]>;
  getCountryDetails: (code: string) => Promise<ICountryDetailed>;
}
