import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../tmdb.service';

@Component({
  selector: 'app-actor-search',
  templateUrl: './actor-search.component.html',
  styleUrls: ['./actor-search.component.scss']
})
export class ActorSearchComponent implements OnInit {
  query: string = '';
  actors: any[] = [];

  constructor(private tmdbService: TmdbService) { }

  ngOnInit(): void { }

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
}
