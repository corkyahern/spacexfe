import { Injectable } from '@angular/core';
import { Appsettings } from './appsettings';
import { HttpClient } from '@angular/common/http';
import { Launch } from './launch';

@Injectable({
  providedIn: 'root'
})
export class LaunchService {
  private baseUrl = `${Appsettings.API_ENDPOINT}/api/launches`
  constructor(private httpClient: HttpClient) { }
  addLaunch(launch: Launch, rocketName: string){
    return this.httpClient.post<Launch>(`${this.baseUrl}/rocketname/${rocketName}`, launch)
  }
  getAllLaunches(){
    return this.httpClient.get<Launch[]>(this.baseUrl)
  }
  getLaunchById(id: number){
    return this.httpClient.get<Launch>(`${this.baseUrl}/${id}`)
  }
  updateLaunch(launch: Launch, launchId: number){
    return this.httpClient.put<Launch>(`${this.baseUrl}/${launchId}`, launch)
  }
  deleteLaunch(id: number) {
    return this.httpClient.delete(`${this.baseUrl}/${id}`, {responseType: "text"})
  }
}
