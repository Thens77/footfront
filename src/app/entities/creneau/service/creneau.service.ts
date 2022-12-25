import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IReservation } from '../../reservation/reservation.model';
import { ITerrain } from '../../terrain/terrain.model';
import { ICreneau } from '../creneau.model';

@Injectable({
  providedIn: 'root',
})
export class CreneauService {
  private baseURL = 'http://localhost:4900/creneaux';
  constructor(private httpClient: HttpClient) {}

  list(): Observable<ICreneau[]> {
    return this.httpClient.get<ICreneau[]>(`${this.baseURL}`);
  }

  find(id: number): Observable<ICreneau[]> {
    return this.httpClient.get<ICreneau[]>(`${this.baseURL}/form/${id}`);
  }
  findDispo(terrain: number, date: Date): Observable<any> {
    return this.httpClient.post(`${this.baseURL}/dispo`, {
      terrain,
      date
    });
  }
  add(matiere: ICreneau): Observable<ICreneau> {
    return this.httpClient.post(`${this.baseURL}`, matiere);
  }
  update(id: number, club: ICreneau): Observable<ICreneau> {
    return this.httpClient.put(`${this.baseURL}/${id}`, club);
  }
  delete(id: number): Observable<ICreneau> {
    return this.httpClient.get(`${this.baseURL}/delete/${id}`);
  }
}
