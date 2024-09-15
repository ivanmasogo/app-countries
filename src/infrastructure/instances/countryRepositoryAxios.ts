
import { ICountryRepository } from '../../domain/repositories/countryRepository';
import { IHttp } from '../../domain/repositories/http';
import { countryRepository } from '../../infrastructure/repositories/countryRepository';
import { httpAxios } from './httpAxios';

const client: IHttp = httpAxios;

export const countryRepositoryAxios: ICountryRepository = countryRepository(client);