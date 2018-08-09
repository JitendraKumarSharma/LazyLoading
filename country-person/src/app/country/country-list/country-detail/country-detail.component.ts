import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CountryService } from '../../service/country.service';
import { Country } from '../../country';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html'
})
export class CountryDetailComponent implements OnInit {

  country: Country;

  constructor(
    private countryService: CountryService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.pipe(
      switchMap((params: Params) => this.countryService.getCountry(+params['countryid'])))
      .subscribe(country => this.country = country);
  }
}
