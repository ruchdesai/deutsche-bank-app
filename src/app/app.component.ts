import { Component, OnDestroy } from '@angular/core';
import { CountriesService } from './services/countries/countries.service';
import { SubSink } from 'subsink';
import { Country, Countries } from './interface/country.interface';

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

  constructor(private countriesService: CountriesService) {}

  /**
   * destroys subscription to avoid memory leaks
   *
   * @memberof AppComponent
   */
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  /**
   * Gets list of countries for selected region
   *
   * @param {string} value region
   * @memberof AppComponent
   */
  getCountriesForRegion(value: string): void {
    this.subscriptions.add(this.countriesService.getCountries(value)
      .subscribe((res: Countries) => {
        this.countries = res;
      })
    );
  }

  /**
   * Gets selected country's details
   *
   * @param {string} value country
   * @memberof AppComponent
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
