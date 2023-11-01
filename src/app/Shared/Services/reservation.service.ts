import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reservation } from '../Models/Reservation';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  API = 'http://localhost:8090/Reservations';

  constructor(private http:HttpClient) { }

  public getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(this.API + '/getAllReservation');
  }
  deleteReservation(d:Reservation):Observable<any>{
    return this.http.delete<any>(`${this.API}/deletreservation/${d.idReservation}`)
  }
  
  createReservation(reservation: Reservation): Observable<Reservation> {
    return this.http.post<Reservation>(`${this.API}/createResrvation`, reservation);
  }
  
  getOneReservation(reservationId: number): Observable<Reservation> {
    return this.http.get<Reservation>(`${this.API}/getOneReserevation?ResrervationId=${reservationId}`);
  }

  updateReservation(reservation: Reservation): Observable<Reservation> {

    return this.http.put<Reservation>(`${this.API}/updateReservation`, reservation);
  }
}
