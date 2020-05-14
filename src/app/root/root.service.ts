import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RootService {

  constructor(private http: HttpClient) { }

  getApiData(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
