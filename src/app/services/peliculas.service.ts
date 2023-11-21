import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private readonly TOKEN = 'token';
  private auth = localStorage.getItem(this.TOKEN);
  constructor(private _http: HttpClient) { }

  public getPeliculas(): Observable<any> {
    console.log(this.auth);
    try {
      let HttpOptions = {
        headers: new HttpHeaders({
          'Content-type': 'application/json',
          'auth': this.auth.replace(/['"]+/g, '')
        })
      }
      console.log(HttpOptions);
      return this._http.get('http://localhost:3000/peliculas', HttpOptions)

    } catch (error) {
      console.log(error);
      return error;
    }
  }

  public getImagenes(pelicula:any): Observable<any> {
    try {
      let HttpOptions = {
        headers: new HttpHeaders({
          'Content-type': 'application/json',
          'auth': this.auth.replace(/['"]+/g, '')
        })
      }
      console.log(HttpOptions);
      return this._http.get('http://localhost:3000/imagenes/peliculas/'+pelicula, HttpOptions)

    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
