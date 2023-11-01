import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Coach } from '../Models/Coach';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoachService {

  API = 'http://localhost:8090/Coach/';

  constructor(private http:HttpClient) { }

  public getCoachs(): Observable<Coach[]> {
    return this.http.get<Coach[]>(this.API);
  }

  deleteCoach(d:Coach):Observable<Coach>{
    return this.http.delete<Coach>(`${this.API}${d.id}`)
  }
  createCoach(coach: Coach): Observable<any> {
    return this.http.post<any>(`${this.API}`, coach);
  }
  updateCoach(coach:Coach): Observable<any> {
 
    return this.http.put<any>(`${this.API}`, coach);
  }
  getOneCoach(id: number): Observable<Coach> {
    return this.http.get<Coach>(`${this.API}${id}`);
  }
}
