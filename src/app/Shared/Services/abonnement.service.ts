import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Abonnement } from '../Models/Abonnements';

@Injectable({
  providedIn: 'root'
})
export class AbonnementService {
  API = 'http://localhost:8090/api/Abonnements/';
  constructor(private http:HttpClient) { }
  public getAbonnements(): Observable<Abonnement[]> {
    return this.http.get<Abonnement[]>(this.API);
  }
  deleteAbonnement(d:Abonnement):Observable<Abonnement>{
    return this.http.delete<Abonnement>(`${this.API}${d._id}`)
  }
  createAbonnement(abonnement: Abonnement): Observable<any> {
    return this.http.post<any>(`${this.API}`, abonnement);
  }
  updateAbonnement(id: number,abonnement:Abonnement): Observable<any> {
 
    return this.http.put<any>(`${this.API}${id}`, abonnement);
  }
  getOneAbonnement(id: number): Observable<Abonnement> {
    return this.http.get<Abonnement>(`${this.API}${id}`);
  }
}
