import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  API ='/api/realms/SalleDeSport/protocol/openid-connect/token';
  constructor(private http:HttpClient) { }


  LogIn(user: User): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    const body = new HttpParams()
      .set('username', user.username)
      .set('password', user.password)
      .set('client_id', "AuthService")
      .set('client_secret', "ev94TP6DRaDZSVhxdXK6WIPMwyme84j1")
      .set('grant_type', "password")
    return this.http.post<any>(`${this.API}`,body.toString(),{headers});
  }

}
