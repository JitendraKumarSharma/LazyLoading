import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found.component';
import { AddressComponent } from './address.component';
const routes: Routes = [
  {
    path: 'country',
    loadChildren: 'src/app/country/country.module#CountryModule'
  },
  {
    path: 'person',
    loadChildren: 'src/app/person/person.module#PersonModule'
  },
  {
    path: 'address',
    component: AddressComponent
  },
  {
    path: '',
    redirectTo: '/country',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
