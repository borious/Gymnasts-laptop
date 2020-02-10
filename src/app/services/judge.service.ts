import { Injectable } from '@angular/core';
import { Judge } from '../judge';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JudgeService {
  private url = 'api/judges'; // URL to web api

  constructor(private http: HttpClient) {}

  getJudges(): Observable<Judge[]> {
    return this.http.get<Judge[]>(this.url);
  }

  getJudge(id:number): Observable<Judge> {
    const urlJudge = `${this.url}/${id}`;
    return this.http.get<Judge>(urlJudge);
  }

}
