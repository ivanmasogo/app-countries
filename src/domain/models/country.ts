export interface ICountryBasic {
  flag: string;
  name: string;
  cca3: string;
  capital?: string;
  region: string;
  population: string | null;
}

export interface ICountryDetailed extends ICountryBasic {
  nativeName: string | null;
  currencies: string | null;
  subregion: string;
  languages: string | null;
  borders: string[] | null;
  tld: string;
}

