import { createAction, props } from '@ngrx/store';
import Country from '../../interface/country.interface';

export const GetRegion = createAction(
  '[Countries] - Get Region',
  props<{ region: string }>()
);

export const GetCountriesSuccess = createAction(
  '[Countries] - Get Countries Success',
  props<{ countries: Country[] }>()
);
