import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import * as CountryActions from './country.action';
import Country from '../../interface/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(
    private http: HttpClient,
    private action$: Actions
  ) { }

  /**
   * @description Gets all countries for specified region
   * @param region europe | asia
   */
  getCountries = (region: string): Observable<any> => {
    return this.http.get(`https://restcountries.eu/rest/v2/region/${region}`);
  }

  Getcountries$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(CountryActions.BeginGetCountriesByRegionAction),
      mergeMap(action =>
        this.http.get(`https://restcountries.eu/rest/v2/region/${action.region}`).pipe(
          map((data: Country[]) => {
            return CountryActions.SuccessGetCountriesAction({ countries: data });
          })
        )
      )
    )
  );
}
