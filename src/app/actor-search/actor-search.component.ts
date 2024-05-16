import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TmdbService } from '../tmdb.service';

@Component({
  selector: 'app-actor-search',
  templateUrl: './actor-search.component.html',
  styleUrls: ['./actor-search.component.scss']
})
export class ActorSearchComponent implements OnInit {
  // Variable to hold the search query entered by the user
  query: string = '';
  // Array to hold the list of actors returned from the API
  actors: any[] = [];
  // Array to hold the list of favorite actors
  favoriteActors: any[] = [];

  // Inject the TmdbService and Router services
  constructor(private tmdbService: TmdbService, private router: Router) { }

  // Lifecycle hook that is called after the component has been initialized
  ngOnInit(): void { 
    this.loadFavorites(); // Load the favorite actors from local storage
  }

  // Method to search for actors based on the query
  searchActors(): void {
    if (this.query.trim()) { // Check if the query is not empty
      this.tmdbService.searchActors(this.query).subscribe((response: any) => {
        this.actors = response.results; // Assign the results to the actors array
      });
    }
  }

  // Method to get a comma-separated list of popular movies for an actor
  getPopularMovies(actor: any): string {
    return actor.known_for.map((movie: any) => movie.title).join(', ');
  }

  // Method to toggle an actor as a favorite
  toggleFavorite(actor: any): void {
    if (this.isFavorite(actor)) {
      // If the actor is already a favorite, remove them from the favoriteActors array
      this.favoriteActors = this.favoriteActors.filter(fav => fav.id !== actor.id);
    } else {
      // If the actor is not a favorite, add them to the favoriteActors array
      this.favoriteActors.push(actor);
    }
    this.saveFavorites(); // Save the updated favorite actors list to local storage
  }

  // Method to check if an actor is a favorite
  isFavorite(actor: any): boolean {
    return this.favoriteActors.some(fav => fav.id === actor.id);
  }

  // Method to save the favorite actors list to local storage
  saveFavorites(): void {
    localStorage.setItem('favoriteActors', JSON.stringify(this.favoriteActors));
  }

  // Method to load the favorite actors list from local storage
  loadFavorites(): void {
    const storedFavorites = localStorage.getItem('favoriteActors');
    if (storedFavorites) {
      this.favoriteActors = JSON.parse(storedFavorites);
    }
  }

  // Method to navigate to the movies page for a specific actor
  viewMovies(actorId: number): void {
    this.router.navigate(['/movies', actorId]);
  }
}
