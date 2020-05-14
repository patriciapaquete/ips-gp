import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
// import * as configJSON from '../../assets/config.json';
@Injectable({
  providedIn: 'root'
})
export class SignupService {
  // url = configJSON.url;

  constructor(private http:HttpClient) { }

  signUpCall(formData){
    return this.http.post('/api/register',formData);
  }
}
