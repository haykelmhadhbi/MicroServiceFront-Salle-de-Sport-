import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from '../Models/Membre';

@Injectable({
  providedIn: 'root'
})
export class MembreService {

  API = 'http://localhost:8090/Member/';

  constructor(private http:HttpClient) { }

  public getMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(this.API);
  }
  deleteMember(d:Member):Observable<any>{
    return this.http.delete<any>(`${this.API}${d.id}`)
  }
  createMember(membre: Member): Observable<Member> {
    return this.http.post<Member>(`${this.API}`, membre);
  }
  updateMember(membre:Member): Observable<any> {
 
    return this.http.put<any>(`${this.API}`, membre);
  }
  getOneMember(id: number): Observable<Member> {
    return this.http.get<Member>(`${this.API}${id}`);
  }
}
