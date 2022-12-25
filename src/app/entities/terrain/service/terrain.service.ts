import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITerrain } from '../terrain.model';

@Injectable({
  providedIn: 'root',
})
export class TerrainService {
  private baseURL = 'http://localhost:4900/terrains';
  constructor(private httpClient: HttpClient) {}

  list(): Observable<ITerrain[]> {
    return this.httpClient.get<ITerrain[]>(`${this.baseURL}`);
  }

  find(id: number): Observable<ITerrain> {
    return this.httpClient.get<ITerrain>(`${this.baseURL}/${id}`);
  }

  add(matiere: ITerrain): Observable<ITerrain> {
    return this.httpClient.post(`${this.baseURL}`, matiere);
  }
  update(id: number, club: ITerrain): Observable<ITerrain> {
    return this.httpClient.put(`${this.baseURL}/${id}`, club);
  }
  delete(id: number): Observable<ITerrain> {
    return this.httpClient.get(`${this.baseURL}/delete/${id}`);
  }
}
