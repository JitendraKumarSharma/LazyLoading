import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Person } from '../../person';
import { PersonService } from '../../service/person.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html'
})
export class PersonDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private personService: PersonService) { }

  person: Person;
  
  ngOnInit() {
    this.route.params.pipe(
      switchMap((params: Params) => this.personService.getPerson(+params['id'])))
      .subscribe(person => this.person = person);
  }

}
