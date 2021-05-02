import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = environment.apiUrl;

  constructor(private http : HttpClient) {  }

  loginAttempt(data : any){
      return this.http.post(`${this.baseUrl}/login`, data);
  }
}
