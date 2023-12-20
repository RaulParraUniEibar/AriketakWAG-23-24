import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

import { Kluba } from '../classes/kluba';
@Injectable({
  providedIn: 'root'
})


export class KlubaService {

  private url = 'http://localhost:8000/api/klubak';
  constructor(private http: HttpClient) { }

  getKluba(id: number): Observable<Kluba> {
    return this.http.get<Kluba>(this.url + '/' + id);
   }
   getKlubak(): Observable<Kluba[]>{
    return this.http.get<Kluba[]>(this.url);
  }
}