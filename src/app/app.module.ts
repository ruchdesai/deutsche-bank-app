import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CountryReducer } from './services/countries/country.reducer';

import { AppComponent } from './app.component';

import { CountriesService } from './services/countries/countries.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    StoreModule.forRoot({ countries: CountryReducer }),
    EffectsModule.forRoot([CountriesService])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
