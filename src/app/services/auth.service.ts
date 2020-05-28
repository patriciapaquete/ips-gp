import { Injectable } from '@angular/core';
import * as moment from "moment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  setLocalStorage(responseObj){
    const expires = moment().add(responseObj.expiresIn);
    const userRole = responseObj.user.tipoMembro;
    localStorage.setItem('token',responseObj.token);
    localStorage.setItem('expires',JSON.stringify(expires.valueOf()));
    localStorage.setItem('role',userRole);
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('expires');
    localStorage.removeItem('role');
  }

  isLoggedIn(){
    return moment().isBefore(this.getExpiration());
  }

  isLoggedout(){
    return !this.isLoggedIn();
  }

  getExpiration(){
    const expiration = localStorage.getItem('expires');
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }
}
