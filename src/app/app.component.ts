import { Component, OnDestroy } from '@angular/core';
import { CountriesService } from './services/countries/countries.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'deutsche-bank-app';
  regions = [
    { demonym: 'asia', name: 'Asia' },
    { demonym: 'europe', name: 'Europe' }
  ];
  countries: any;
  countryDetails: any;
  private subscriptions = new SubSink();

  constructor(private countriesService: CountriesService) {}

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  handleSelectedOption(e) {
    this.regions.filter(reg => {
      if (reg.demonym === e.target.value) {
        this.subscriptions.add(this.countriesService.getCountries(e.target.value).subscribe((res) => {
          this.countries = res;
        }));
      }
    });

    if (!!this.countries && this.countries.length > 0) {
      this.countries.filter(country => {
        if (e.target.value === country.demonym) {
          this.countryDetails = country;
        }
      });
    }
  }
}
