import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'

import { CountryService } from '../service/country.service';
import { Country } from '../country';
@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html'
})
export class AddCountryComponent implements OnInit {
  ngOnInit() {
  }

  constructor(
    private countryService: CountryService,
    private route: ActivatedRoute,
    private router: Router) { }

  countryForm = new FormGroup({
    name: new FormControl(),
    capital: new FormControl(),
    currency: new FormControl()
  });
  onFormSubmit() {
    debugger
    let name = this.countryForm.get('name').value;
    let capital = this.countryForm.get('capital').value;
    let currency = this.countryForm.get('currency').value;

    let country = new Country(null, name, capital, currency);
    this.countryService.addCountry(country)
      .then(data =>
        this.router.navigate(['../list/view', data.countryId], { relativeTo: this.route })
      );
  }
}
