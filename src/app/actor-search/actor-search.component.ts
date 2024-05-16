import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TmdbService } from '../tmdb.service';

@Component({
  selector: 'app-actor-search',
  templateUrl: './actor-search.component.html',
  styleUrls: ['./actor-search.component.scss']
})
export class ActorSearchComponent implements OnInit {
  query: string = '';
  actors: any[] = [];
  favoriteActors: any[] = [];

  constructor(private tmdbService: TmdbService, private router: Router) { }

  ngOnInit(): void { 
    this.loadFavorites();
  }

  searchActors(): void {
    if (this.query.trim()) {
      this.tmdbService.searchActors(this.query).subscribe((response: any) => {
        this.actors = response.results;
      });
    }
  }

  getPopularMovies(actor: any): string {
    return actor.known_for.map((movie: any) => movie.title).join(', ');
  }
  toggleFavorite(actor: any): void {
    if (this.isFavorite(actor)) {
      this.favoriteActors = this.favoriteActors.filter(fav => fav.id !== actor.id);
    } else {
      this.favoriteActors.push(actor);
    }
    this.saveFavorites();
  }

  isFavorite(actor: any): boolean {
    return this.favoriteActors.some(fav => fav.id === actor.id);
  }

  saveFavorites(): void {
    localStorage.setItem('favoriteActors', JSON.stringify(this.favoriteActors));
  }

  loadFavorites(): void {
    const storedFavorites = localStorage.getItem('favoriteActors');
    if (storedFavorites) {
      this.favoriteActors = JSON.parse(storedFavorites);
    }
  }
  viewMovies(actorId: number): void {
    this.router.navigate(['/movies', actorId]);
  }
}
