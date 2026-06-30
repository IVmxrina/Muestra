import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Muestra } from '../interfaces/muestra';

@Injectable({
  providedIn: 'root'
})
export class MuestraService {
  myAppUrl: string = environment.endpoint;
  myApiUrl: string = "api/Muestra/";

  constructor(private http: HttpClient) { }

  getMuestras(): Observable<Muestra[]> {
      return this.http.get<Muestra[]>(`${this.myAppUrl + this.myApiUrl}`);
  }

  getMuestra(id: number): Observable<Muestra> {
    return this.http.get<Muestra>(`${this.myAppUrl + this.myApiUrl}${id}`);
  }

  addMuestra(muestra: Muestra): Observable<Muestra> {
    return this.http.post<Muestra>(`${this.myAppUrl + this.myApiUrl}`, muestra);
  }

  updateMuestra(id: number, muestra: Muestra): Observable<string> {
    return this.http.put(`${this.myAppUrl + this.myApiUrl}${id}`,  muestra, { responseType: 'text' });
  }

  deleteMuestra(id: number): Observable<string> {
    return this.http.delete(`${this.myAppUrl + this.myApiUrl}${id}`, { responseType: 'text' });
  }

}

