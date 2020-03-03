import { Action, createReducer, on } from '@ngrx/store';
import * as CountryActions from './country.action';
import CountryState, { initializeState } from './country.state';

export const intialState = initializeState();

const reducer = createReducer(
  intialState,
  on(CountryActions.GetCountryAction, state => state),
  on(CountryActions.SuccessGetCountryAction, (state: CountryState, { payload }) => {
    return { ...state, Countries: payload };
  })
);

export function CountryReducer(state: CountryState | undefined, action: Action) {
  return reducer(state, action);
}
