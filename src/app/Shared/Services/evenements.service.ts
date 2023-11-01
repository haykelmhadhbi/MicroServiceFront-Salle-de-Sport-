import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evenement } from '../Models/Evenement';
@Injectable({
  providedIn: 'root'
})
export class EvenementsService {

  API = 'http://localhost:8090/evenements/';
  constructor(private http:HttpClient) { }
  public getEvenements(): Observable<Evenement[]> {
    return this.http.get<Evenement[]>(this.API + 'all');
  }
  deleteEvenement(d:Evenement):Observable<any>{
    return this.http.delete<any>(`${this.API}delete/${d.id}`)
  }
  createEvenement(evenement: Evenement): Observable<Evenement> {
    return this.http.post<Evenement>(`${this.API}create`, evenement);
  }
  updateEvenement(id: number,evenement:Evenement): Observable<any> {
 
    return this.http.put<any>(`${this.API}update/${id}`, evenement);
  }
  getOneEvenement(id: number): Observable<Evenement> {
    return this.http.get<Evenement>(`${this.API}${id}`);
  }
}
