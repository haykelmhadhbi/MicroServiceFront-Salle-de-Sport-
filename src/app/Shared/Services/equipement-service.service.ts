import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Equipement } from '../Models/Equipement';

@Injectable({
  providedIn: 'root'
})
export class EquipementServiceService {
API = 'http://localhost:8090/Equipement';
  constructor(private http:HttpClient) { }
  public getEquipements(): Observable<Equipement[]> {
    return this.http.get<Equipement[]>(this.API + '/retrieveAll');
  }
  deleteEquipement(d:Equipement):Observable<any>{
    return this.http.delete<any>(`${this.API}/Delete/${d.equipementId}`)
  }
  createEquipement(equipement: Equipement): Observable<any> {
    return this.http.post<any>(`${this.API}/saveOrUpdate`, equipement);
  }
  updateEquipement(id: number,equipement:Equipement): Observable<any> {
 
    return this.http.put<any>(`${this.API}/update/${id}`, equipement);
  }
  getOneEquipement(id: number): Observable<Equipement> {
    return this.http.get<Equipement>(`${this.API}/getById/${id}`);
  }
}
