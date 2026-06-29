import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MuestraService {
  myAppUrl: string = environment.endpoint;
  myApiUrl: string = "api/Muestra/";

  constructor(private http: HttpClient) { }

  getMuestras(): Observable<any> {
      return this.http.get(`${this.myAppUrl + this.myApiUrl}`);
   }

}

