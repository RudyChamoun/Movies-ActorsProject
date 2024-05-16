import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TmdbService } from '../tmdb.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  actorId!: number;  // Use definite assignment assertion
  movies: any[] = [];
  currentPage: number = 1;
  moviesPerPage: number = 9;

  constructor(private route: ActivatedRoute, private tmdbService: TmdbService) { }

  ngOnInit(): void {
    this.actorId = +this.route.snapshot.paramMap.get('actorId')!;
    this.fetchMovies();
  }

  fetchMovies(): void {
    this.tmdbService.getActorMovies(this.actorId).subscribe((response: any) => {
      this.movies = response.cast;
    });
  }

  get paginatedMovies() {
    const start = (this.currentPage - 1) * this.moviesPerPage;
    return this.movies.slice(start, start + this.moviesPerPage);
  }

  nextPage(): void {
    if ((this.currentPage * this.moviesPerPage) < this.movies.length) {
      this.currentPage++;
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
}
