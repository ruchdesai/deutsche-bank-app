import Country from '../../interface/country.interface';

export default class CountryState {
  Countries: Array<Country>;
}

export const initializeState = (): CountryState => {
  return { Countries: Array<Country>() };
};
