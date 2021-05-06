import Country from '../../interface/country.interface';

export default class CountryState {
  countries: Array<Country>;
}

export const initializeState = (): CountryState => {
  return { countries: Array<Country>() };
};
