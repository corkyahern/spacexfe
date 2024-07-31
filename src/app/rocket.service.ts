import { Injectable } from '@angular/core';
import { Appsettings } from './appsettings';
import { HttpClient } from '@angular/common/http';
import { Rocket } from './rocket';

@Injectable({
  providedIn: 'root'
})
export class RocketService {
  private baseUrl = `${Appsettings.API_ENDPOINT}/api/rockets`
  constructor(
    private httpClient: HttpClient
  ) { }
  addRocket(rocket: Rocket){
    return this.httpClient.post<Rocket>(this.baseUrl, rocket)
  }
  getAllRockets(){
    return this.httpClient.get<Rocket[]>(this.baseUrl)
  }
  getRocketById(id: number){
    return this.httpClient.get<Rocket>(`${this.baseUrl}/${id}`)
  }
  updateRocket(rocket: Rocket, id: number){
    return this.httpClient.put<Rocket>(`${this.baseUrl}/${id}`, rocket)
  }
  deleteRocket(id: number){
    return this.httpClient.delete(`${this.baseUrl}/${id}`, {responseType: "text"})
  }
}
