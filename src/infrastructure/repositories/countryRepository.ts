import { ICountryBasic, ICountryDetailed } from '../../domain/models/country';
import { ICountryRepository } from '../../domain/repositories/countryRepository';
import { IHttp } from '../../domain/repositories/http';
import { ICountryBasicDTO, ICountryDetailedDTO, ICountryNameDTO } from '../http/dto/countryDTO';
import { formatPopulation, formatCurrencies, formatLanguages, nativeName } from '../helpers';

const BASE_URL = 'https://restcountries.com/v3.1';
const FIELDS_BASIC = 'name,capital,cca3,flags,region,population';
const FIELDS_DETAILED = 'name,capital,currencies,cca3,flags,topLevelDomain,region,subregion,population,languages,borders';

export const countryRepository = (client: IHttp): ICountryRepository =>{

    const getCountryNameByCode = async (code: string) => {
        let country = await client.get<ICountryNameDTO[]>(`${BASE_URL}/alpha/${code}`, {
            params: {
                fields: 'name'
            }
        });

        const countryNames = country.map((countryNameDTO: ICountryNameDTO) => countryNameDTO.name.common);
        return countryNames[0];

    }
    
    return {
    getCountries: async () => {
        const countries = await client.get<ICountryBasicDTO[]>(`${BASE_URL}/all`, {
            params: {
                fields: FIELDS_BASIC
            }
        });

        return countries.map((countryBasicDTO: ICountryBasicDTO): ICountryBasic => ({
            flag: countryBasicDTO.flags.png,
            name: countryBasicDTO.name.common,
            cca3: countryBasicDTO.cca3,
            capital: countryBasicDTO.capital?.length > 0 ? countryBasicDTO.capital[0] : undefined,
            region: countryBasicDTO.region,
            population: formatPopulation(countryBasicDTO.population),
        }));
    },

    getCountriesByRegion: async (region: string) => {
        const countries = await client.get<ICountryBasicDTO[]>(`${BASE_URL}/region/${region}`, {
            params: {
                fields: FIELDS_BASIC
            }
        });
        return countries.map((countryBasicDTO: ICountryBasicDTO): ICountryBasic => ({
            flag: countryBasicDTO.flags.png,
            name: countryBasicDTO.name.common,
            cca3: countryBasicDTO.cca3,
            capital: countryBasicDTO.capital?.length > 0 ? countryBasicDTO.capital[0] : undefined,
            region: countryBasicDTO.region,
            population: formatPopulation(countryBasicDTO.population),
        }));
    },

    getCountryDetails: async (code: string) => {
        const country = await client.get<ICountryDetailedDTO[]>(`${BASE_URL}/alpha/${code}`, {
            params: {
                fields: FIELDS_DETAILED
            }
        });

        const borders= country[0]?.borders?.length > 0 ? country[0].borders : [];

        if(borders.length > 0) {
         for (let i = 0; i < borders.length; i++) {
            borders[i] = await getCountryNameByCode(borders[i])
            }
        }
        return country.map((countryDetailedDTO: ICountryDetailedDTO): ICountryDetailed => ({
            flag: countryDetailedDTO.flags.png,
            name: countryDetailedDTO.name.common,
            nativeName: nativeName(countryDetailedDTO.name?.nativeName),
            cca3: countryDetailedDTO.cca3,
            capital: countryDetailedDTO.capital?.length > 0 ? countryDetailedDTO.capital[0] : undefined,
            region: countryDetailedDTO.region,
            population: formatPopulation(countryDetailedDTO.population),
            currencies: formatCurrencies(countryDetailedDTO.currencies),
            subregion: countryDetailedDTO.subregion,
            languages: formatLanguages(countryDetailedDTO.languages),
            borders: countryDetailedDTO.borders,
            tld: countryDetailedDTO.tld[0]

        }))[0];
        
    }
}
};
