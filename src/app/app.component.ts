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
  countries: any = [];
  /**
   * Country details object
   *
   * @type {Country}
   * @memberof AppComponent
   */
  countryDetails: Country;
  /**
   * subscriptions to avoid memory leak
   *
   * @private
   * @memberof AppComponent
   */
  private subscriptions = new SubSink();

  constructor(private countriesService: CountriesService) {}

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  /**
   * Handles dropdown values
   *
   * @param {string} value region | country
   * @memberof AppComponent
   */
  handleSelectedOption(value: string): void {
    this.regions.filter(reg => {
      if (reg.demonym === value) {
        this.subscriptions.add(this.countriesService.getCountries(value).subscribe((res: Countries) => {
          this.countries = res;
        }));
      }
    });

    if (!!this.countries && this.countries.length > 0) {
      this.countries.filter((country: Country) => {
        if (value === country.demonym) {
          this.countryDetails = country;
        }
      });
    }
  }
}
