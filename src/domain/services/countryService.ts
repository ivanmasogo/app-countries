
import { ICountryRepository } from '../repositories/countryRepository';

export const countryService = (repository: ICountryRepository): ICountryRepository => ({
        getCountries: () => {
            return repository.getCountries();
        },
        getCountriesByRegion: (region: string) => {
            return repository.getCountriesByRegion(region);
        },
        getCountryDetails: (code: string) => {
            return repository.getCountryDetails(code);
        }
});
