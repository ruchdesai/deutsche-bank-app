import { createAction, props } from '@ngrx/store';
import Country from '../../interface/country.interface';

export const GetCountryAction = createAction('[Country] - Get Country');
export const BeginGetCountryAction = createAction('[Country] - Begin Get Country');
export const SuccessGetCountryAction = createAction(
  '[Country] - Success Get Country',
  props<{ payload: Country[] }>()
);
