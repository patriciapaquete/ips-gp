import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'
// import * as configJSON from '../../assets/config.json';
@Injectable({
  providedIn: 'root'
})
export class SignupService {
  // url = configJSON.url;

  constructor(private http:HttpClient) { }

  register(formData){
    return this.http.post('/api/register',formData,{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }
}
