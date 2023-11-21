import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OpinionesService {
  private readonly TOKEN = 'token';
  private auth = localStorage.getItem(this.TOKEN);
  constructor(private _http: HttpClient) { }

  public getOpiniones(): any {
    try {
      let HttpOptions = {
        headers: {
          'Content-type': 'application/json',
          'auth': this.auth.replace(/['"]+/g, '')
        }
      }
      return this._http.get('http://localhost:3000/opiniones/', HttpOptions)

    } catch (error) {
      console.log(error);
      return error;
    }
  }
  public getOpinionesById(id_pelicula:any): any {
    try {
      let HttpOptions = {
        headers: {
          'Content-type': 'application/json',
          'auth': this.auth.replace(/['"]+/g, '')
        }
      }
      console.log(id_pelicula);
      return this._http.get('http://localhost:3000/opiniones/'+id_pelicula, HttpOptions)
      

    } catch (error) {
      console.log(error);
      return error;
    }
  }
  public newOpinion(opinion: any): any {
    try {
      let HttpOptions = {
        headers: {
          'Content-type': 'application/json',
          'auth': this.auth.replace(/['"]+/g, '')
        }
      }
      return this._http.post('http://localhost:3000/opiniones/', opinion, HttpOptions)

    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
