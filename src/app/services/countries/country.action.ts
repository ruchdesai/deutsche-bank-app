import { createAction, props } from '@ngrx/store';
import Country from '../../interface/country.interface';

export const GetCountriesAction = createAction('[Countries] - Get Countries');
export const BeginGetCountriesByRegionAction = createAction('[Countries] - Begin Get Countries', props<{ region: string }>());
export const SuccessGetCountriesAction = createAction(
  '[Countries] - Success Get Countries',
  props<{ countries: Country[] }>()
);
