import { TestBed, async, inject } from '@angular/core/testing';
import { CountriesService } from './countries.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MOCK_COUNTRIES } from 'src/app/test-mock/test-mock-helper';

describe('CountriesService', () => {
  let service: CountriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(CountriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should expect GET https://restcountries.eu/rest/v2/region/${region} europe|asia',
    async(inject([HttpTestingController], (httpMock: HttpTestingController) => {
      service.getCountries('europe').subscribe(data => {
        expect(data).toBe(MOCK_COUNTRIES);
      });
      const req = httpMock.expectOne('https://restcountries.eu/rest/v2/region/europe');
      expect(req.request.method).toEqual('GET');
      req.flush(MOCK_COUNTRIES);
    }))
  );
});
