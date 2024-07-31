import { Injectable } from '@angular/core';
import { Appsettings } from './appsettings';
import { HttpClient } from '@angular/common/http';
import { Role } from './role';
import { Register } from './register';
import { Login } from './login';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = `${Appsettings.API_ENDPOINT}/api/auth`
  private router: Router
  constructor(
    private httpClient: HttpClient
  ) { }
  
  register(reg: Register){
    return this.httpClient.post(`${this.baseUrl}/register`, reg, {responseType: "text"})
  }
  login(loginObj: Login){
    return this.httpClient.post(`${this.baseUrl}/login`, loginObj, {responseType: "text"})
  }
  isLoggedIn(){
    return this.httpClient.get(`${this.baseUrl}/logged`, {responseType: "text"})
  }
}
