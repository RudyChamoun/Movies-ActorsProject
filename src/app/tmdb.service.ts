import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {
  // API key for accessing The Movie Database (TMDb) API
  private apiKey = '8203dea9cdf3339a1f47c204b07cad56';
  // Base URL for TMDb API
  private baseUrl = 'https://api.themoviedb.org/3';

  // Inject HttpClient to make HTTP requests
  constructor(private http: HttpClient) { }

  // Method to search for actors based on a query string
  searchActors(query: string): Observable<any> {
    // Make a GET request to TMDb API to search for actors
    return this.http.get(`${this.baseUrl}/search/person?query=${query}&include_adult=false&language=en-US&page=1&api_key=${this.apiKey}`);
  }

  // Method to get movies for a specific actor based on their ID
  getActorMovies(actorId: number): Observable<any> {
    // Make a GET request to TMDb API to get the movies for the actor
    return this.http.get(`${this.baseUrl}/person/${actorId}/movie_credits?language=en-US&api_key=${this.apiKey}`);
  }
}
