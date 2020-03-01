import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CountriesService } from './services/countries/countries.service';
import { SharedModule } from './shared/shared.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { MOCK_COUNTRIES } from './test-mock/test-mock-helper';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        SharedModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should getCountries endpoint and get countries accordingly to region selected', () => {
    const cService = TestBed.get(CountriesService);
    spyOn(cService, 'getCountries').and.callFake(() => {
      return of(MOCK_COUNTRIES);
    });
    component.getCountriesForRegion('europe');
    expect(component.countries).not.toBe(null);
  });

  it('should get details of selected country', () => {
    component.countries = MOCK_COUNTRIES;
    component.getCountryDetails('Albanian');
    expect(component.countryDetails).not.toBe(null);
  });
});
