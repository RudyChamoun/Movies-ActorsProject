import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite-actors',
  templateUrl: './favorite-actors.component.html',
  styleUrls: ['./favorite-actors.component.scss']
})
export class FavoriteActorsComponent implements OnInit {
  // Array to hold the list of favorite actors
  favoriteActors: any[] = [];

  // Lifecycle hook that is called after the component has been initialized
  ngOnInit(): void {
    this.loadFavorites(); // Load the favorite actors from local storage
  }

  // Method to load the favorite actors list from local storage
  loadFavorites(): void {
    const storedFavorites = localStorage.getItem('favoriteActors');
    if (storedFavorites) {
      // Parse the stored favorites and assign them to the favoriteActors array
      this.favoriteActors = JSON.parse(storedFavorites);
      console.log('Loaded favorite actors:', this.favoriteActors);
    } else {
      console.log('No favorite actors found in local storage.');
    }
  }

  // Method to get a comma-separated list of popular movies for an actor
  getPopularMovies(actor: any): string {
    return actor.known_for.map((movie: any) => movie.title).join(', ');
  }
}
