
export interface ICountryBasicDTO {
  flags: IFlags;
  name: IName;
  cca3: string;
  capital: string[];
  region: string;
  population: number;
}

export interface ICountryDetailedDTO extends ICountryBasicDTO {
  currencies: { [key: string]: ICurrency };
  subregion: string;
  languages: { [key: string]: string };
  borders: string[];
  tld: string[]
}

export interface ICountryNameDTO {
  name: IName;
}

interface ICurrency {
  name: string;
  symbol: string;
}

interface IFlags {
  png: string;
  svg: string;
  alt: string;
}

interface IName {
  common: string;
  official: string;
  nativeName: INativeName;
}

interface INativeName {
  [key: string]: ILanguageDetails;
}

interface ILanguageDetails {
  official: string;
  common: string;
}
