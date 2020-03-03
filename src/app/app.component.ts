import { Component, OnDestroy } from '@angular/core';
import { CountriesService } from './services/countries/countries.service';
import { SubSink } from 'subsink';
import Country, { Countries } from './interface/country.interface';
import CountryState from './services/countries/country.state';
import * as CountryActions from './services/countries/country.action';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnDestroy {
  /**
   * Array of regions
   *
   */
  regions = [
    { demonym: 'asia', name: 'Asia' },
    { demonym: 'europe', name: 'Europe' }
  ];
  /**
   * List of countries
   *
   */
  countries: Array<Country>;
  /**
   * Country details object
   *
   */
  countryDetails: Country;
  /**
   * Subscriptions collection
   *
   */
  private subscriptions = new SubSink();
  country$: Observable<CountryState>;

  constructor(
    private countriesService: CountriesService,
    private store: Store<{ countries: CountryState }>
  ) {
    this.country$ = store.pipe(select('countries'));
  }

  /**
   * destroys subscription to avoid memory leaks
   *
   */
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  /**
   * Gets Countries by region (NgRx implementation)
   *
   */
  getCountriesByRegion(region: string): void {
    this.subscriptions.add(this.country$.pipe(map(data => this.countries = data.Countries)).subscribe());
    this.store.dispatch(CountryActions.BeginGetCountriesByRegionAction({region}));
  }

  /**
   * Gets list of countries for selected region
   *
   */
  getCountriesForRegion(region: string): void {
    this.subscriptions.add(this.countriesService.getCountries(region)
      .subscribe((res: Countries) => {
        this.countries = res;
        this.countryDetails = null;
      })
    );
  }

  /**
   * Gets selected country's details
   *
   */
  getCountryDetails(value: string): void {
    if (!!this.countries && this.countries.length > 0) {
      this.countries.filter((country: Country) => {
        if (country.demonym === value) {
          this.countryDetails = country;
        }
      });
    }
  }
}
