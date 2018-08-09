import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CountryService } from './service/country.service';
import { CountryComponent } from './country.component';
import { CountryRoutingModule } from './country-routing.module';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryDetailComponent } from './country-list/country-detail/country-detail.component'
import { CountryEditComponent } from './country-list/country-edit/country-edit.component';
import { AddCountryComponent } from './add-country/add-country.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CountryRoutingModule
  ],
  declarations: [
    CountryComponent,
    CountryListComponent,
    CountryDetailComponent,
    CountryEditComponent,
    AddCountryComponent
  ],
  providers: [CountryService]
})
export class CountryModule { }
