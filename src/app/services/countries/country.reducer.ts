import { Action, createReducer, on } from '@ngrx/store';
import * as CountryActions from './country.action';
import CountryState, { initializeState } from './country.state';

export const intialState = initializeState();

const reducer = createReducer(
  intialState,
  on(CountryActions.GetCountriesAction, state => state),
  on(CountryActions.SuccessGetCountriesAction, (state: CountryState, { countries }) => {
    return { ...state, Countries: countries };
  })
);

export function CountryReducer(state: CountryState | undefined, action: Action) {
  return reducer(state, action);
}
