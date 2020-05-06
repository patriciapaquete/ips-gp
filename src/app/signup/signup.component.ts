import { Component, OnInit } from '@angular/core';
import { Capabilities } from 'protractor';
import { Observable } from 'rxjs';
import { AsyncAction } from 'rxjs/internal/scheduler/AsyncAction';
declare var jQuery: any;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  district: Map<string, string>;
  cities: Array<string>;
  constructor() { }

  ngOnInit(): void {
    const district = new Map<string, string>();
    const url = 'https://api.teleport.org/api/countries/iso_alpha2%3APT/admin1_divisions/';
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        data._links['a1:items'].forEach(element => {
          const geocode = fetch(element.href).then((r) => r.json()).then((d) => {
            district.set(d['geonames_admin1_code'], element.name);
          });
        });
      })
      .catch((error) => {
        console.log(error);
      });
    this.district = district;





  }

  /*getCities(geocode): void {

    const city = new Array<string>();
    fetch(href)
      .then((resp) => resp.json())
      .then((data) => {
        data._links['a1:items'].forEach(element => {
          console.log(element.href)
          city.push(element.href, element.name);
        });
      })
      .catch( (error) => {
        console.log(error);
      });
    this.cities = city;
  }*/
}
