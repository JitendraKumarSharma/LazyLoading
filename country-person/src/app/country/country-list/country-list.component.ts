import { Component, OnInit } from '@angular/core';
import { CountryService } from '../service/country.service';
import { Country } from '../country';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html'
})
export class CountryListComponent implements OnInit {

  constructor(private countryService: CountryService,
    private route: ActivatedRoute,
    private router: Router) { }

  countries: Promise<Country[]>;

  ngOnInit() {
    this.countries = this.countryService.getCountries();
  }

  deleteCountry(country) {
    this.countries = this.countryService.deleteCountry(country);
  }
}
