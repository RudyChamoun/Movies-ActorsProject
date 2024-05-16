import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite-actors',
  templateUrl: './favorite-actors.component.html',
  styleUrls: ['./favorite-actors.component.scss']
})
export class FavoriteActorsComponent implements OnInit {
  favoriteActors: any[] = [];

  ngOnInit(): void {
    this.loadFavorites();
  }

  loadFavorites(): void {
    const storedFavorites = localStorage.getItem('favoriteActors');
    if (storedFavorites) {
      this.favoriteActors = JSON.parse(storedFavorites);
      console.log('Loaded favorite actors:', this.favoriteActors);
    } else {
      console.log('No favorite actors found in local storage.');
    }
  }

  getPopularMovies(actor: any): string {
    return actor.known_for.map((movie: any) => movie.title).join(', ');
  }
}
