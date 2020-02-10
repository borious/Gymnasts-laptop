import { Injectable } from '@angular/core';
import { Gymnast } from '../gymnast';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GymnastService {
  private url = 'api/gymnasts'; // URL to web api

  constructor(private http: HttpClient) {}

  getGymnasts(): Observable<Gymnast[]> {
    return this.http.get<Gymnast[]>(this.url);
  }
}
