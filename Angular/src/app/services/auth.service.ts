import { Injectable } from '@angular/core';
import * as moment from "moment";
import { Router, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  mySubscription: any;

  constructor(private router: Router) { }

  setLocalStorage(responseObj) {
    const expires = moment().add(responseObj.expiresIn);
    const userRole = responseObj.user.tipoMembro;
    localStorage.setItem('token', responseObj.token);
    localStorage.setItem('expires', JSON.stringify(expires.valueOf()));
    localStorage.setItem('role', userRole);
  }


  isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedout() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem('expires');
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }



  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('expires');
    localStorage.removeItem('role');
    this.router.navigate(['/']);

  }

}
