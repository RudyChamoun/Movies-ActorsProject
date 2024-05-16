import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {
  private apiKey = '8203dea9cdf3339a1f47c204b07cad56';
  private baseUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) { }

  searchActors(query: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/search/person?query=${query}&include_adult=false&language=en-US&page=1&api_key=${this.apiKey}`);
  }

  getActorMovies(actorId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/person/${actorId}/movie_credits?language=en-US&api_key=${this.apiKey}`);
  }
}
