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
   * @memberof AppComponent
   */
  regions = [
    { demonym: 'asia', name: 'Asia' },
    { demonym: 'europe', name: 'Europe' }
  ];
  /**
   * List of countries
   *
   * @type {*}
   * @memberof AppComponent
   */
  countries: Array<Country>;
  /**
   * Country details object
   *
   * @type {Country}
   * @memberof AppComponent
   */
  countryDetails: Country;
  /**
   * Subscriptions collection
   *
   * @private
   * @memberof AppComponent
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
   * @memberof AppComponent
   */
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  getCountries() {
    this.country$
      .pipe(
        map(x => {
          this.countries = x.Countries;
        })
      ).subscribe();

      this.store.dispatch(CountryActions.BeginGetCountryAction());
  }

  /**
   * Gets list of countries for selected region
   *
   * @param {string} value region
   * @memberof AppComponent
   */
  getCountriesForRegion(value: string): void {
    this.regions.filter(reg => {
      if (reg.demonym === value) {
        this.subscriptions.add(this.countriesService.getCountries(value)
          .subscribe((res: Countries) => {
            this.countries = res;
          })
        );
      }
    });
  }

  /**
   * Gets selected country's details
   *
   * @param {string} value country
   * @memberof AppComponent
   */
  getCountryDetails(value: string) {
    if (!!this.countries && this.countries.length > 0) {
      this.countries.filter((country: Country) => {
        if (country.demonym === value) {
          this.countryDetails = country;
        }
      });
    }
  }
}
