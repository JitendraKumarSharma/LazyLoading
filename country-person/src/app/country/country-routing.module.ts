import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountryComponent } from './country.component';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryDetailComponent } from './country-list/country-detail/country-detail.component'
import { CountryEditComponent } from './country-list/country-edit/country-edit.component'
import { AddCountryComponent } from './add-country/add-country.component';
const countryRoutes: Routes = [
  {
    path: '',
    component: CountryComponent,
    children: [
      {
        path: 'add',
        component: AddCountryComponent
      },
      {
        path: 'list',
        component: CountryListComponent,
        children: [
          {
            path: 'view/:countryid',
            component: CountryDetailComponent
          },
          {
            path: 'edit/:country-id',
            component: CountryEditComponent
          }
        ]
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(countryRoutes)],
  exports: [RouterModule]
})
export class CountryRoutingModule { }
