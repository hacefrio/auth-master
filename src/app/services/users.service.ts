import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _http: HttpClient) { }

  newUser(user: any): Observable<any> {
    console.log(user);

    return this._http.post<any>("http://localhost:3000/users", user).pipe(
      tap((res: any) => { console.log(res) })
    );
  }
  getUsers(): Observable<any>{
    let HttpOptions = {
      headers: new HttpHeaders({
      'Content-type': 'application/json',
      'auth': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImVtYWlsIjoidmFyZ2FzLnNlYmFzdGlhbm1AZ21haWwuY29tIiwiaWF0IjoxNjk3NDk2MjE3LCJleHAiOjE2OTc0OTk4MTd9.OEoUC4gsPMlH7wqV4TtpClrrxrCquZqYccBI1ovrcCA'
      })
    }
    return this._http.get('http://localhost:3000/users',HttpOptions);
  }

  deleteUser(id: any): Observable<any>{ 
    return this._http.delete(`http://localhost:3000/users/${id}`);
  }

  getById(id: any): Observable<any>{
    return this._http.get(`http://localhost:3000/users/${id}`);
  }
  updateUser(id: any, user: any): Observable<any>{
    return this._http.put(`http://localhost:3000/users/${id}`, user);
  }
  
}