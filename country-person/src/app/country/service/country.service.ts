import { Injectable } from '@angular/core';
import { Country } from '../country';

const COUNTRIES = [
  new Country(1, 'India', 'New Delhi', 'INR'),
  new Country(2, 'China', 'Beijing', 'RMB')
];

let countriesPromise = Promise.resolve(COUNTRIES);

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor() { }

  getCountries(): Promise<Country[]> {
    return countriesPromise;
  }

  getCountry(id: number): Promise<Country> {
    return this.getCountries()
      .then(countries => countries.find(country => country.countryId === id));
  }

  updateCountry(country: Country): Promise<Country> {
    return this.getCountries()
      .then(countries => {
        let countryObj = countries.find(ob => ob.countryId === country.countryId);
        countryObj = country;
        return countryObj;
      }
      );
  }

  addCountry(country: Country): Promise<Country> {
    return this.getCountries()
      .then(countries => {
        if (countries.length >= 1) {
          let maxIndex = countries.length - 1;
          let countryWithMaxIndex = countries[maxIndex];
          country.countryId = countryWithMaxIndex.countryId + 1;
          countries.push(country);
        }
        else {
          country.countryId = 1;
          this.getCountries().then(countries => countries.push(country));
        }
        return country;
      }
      );
  }

  deleteCountry(country: Country): Promise<Country[]> {
    return this.getCountries().then(cnt => {
      let index: number;
      index = cnt.indexOf(country);
      cnt.splice(index, 1);
      return cnt;
    });
  }
}
