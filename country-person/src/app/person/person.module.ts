import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PersonComponent } from './person.component';
import { PersonRoutingModule } from './person-routing.module';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonEditComponent } from './person-list/person-edit/person-edit.component';
import { PersonService } from './service/person.service';
import { PersonDetailComponent } from './person-list/person-detail/person-detail.component';

@NgModule({
  imports: [
    CommonModule,
    PersonRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    PersonComponent,
    PersonListComponent,
    PersonEditComponent,
    PersonDetailComponent
  ],
  providers: [PersonService]
})
export class PersonModule { }
