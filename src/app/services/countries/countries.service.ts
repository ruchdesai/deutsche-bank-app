import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient) { }

  /**
   * @description Gets all countries for specified region
   * @param region europe | asia
   */
  getCountries = (region: string): Observable<any> => {
    return this.http.get(`https://restcountries.eu/rest/v2/region/${region}`);
  }
}
