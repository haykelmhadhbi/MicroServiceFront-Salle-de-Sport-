import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Member } from '../Models/Membre';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatistiqueService {
  APIM = 'http://localhost:8090/Member/';
  APIC = 'http://localhost:8090/Coach/';
  APIR = 'http://localhost:8090/Reservations/getAllReservation';
  APIA = 'http://localhost:8090/api/Abonnements/';

  constructor(private http:HttpClient) { }
  public getMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(this.APIM);
  }
  public getCoachs(): Observable<Member[]> {
    return this.http.get<Member[]>(this.APIC);
  }
  public getReservations(): Observable<Member[]> {
    return this.http.get<Member[]>(this.APIR);
  }
  public getAbonnements(): Observable<Member[]> {
    return this.http.get<Member[]>(this.APIM);
  }
}
