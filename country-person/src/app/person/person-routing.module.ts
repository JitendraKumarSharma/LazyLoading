import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonComponent } from './person.component';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonEditComponent } from './person-list/person-edit/person-edit.component';
import { PersonDetailComponent } from './person-list/person-detail/person-detail.component';

const personRoutes: Routes = [
  {
    path: '',
    component: PersonComponent,
    children: [
      {
        path: '',
        component: PersonListComponent,
        children: [
          {
            path: ':id',
            component: PersonEditComponent
          },
          {
            path: 'view/:id',
            component: PersonDetailComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(personRoutes)],
  exports: [RouterModule]
})
export class PersonRoutingModule { }
