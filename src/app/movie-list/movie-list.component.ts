import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TmdbService } from '../tmdb.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  // Variable to hold the actor's ID
  actorId!: number;  // Use definite assignment assertion
  // Array to hold the list of movies
  movies: any[] = [];
  // Variable to track the current page
  currentPage: number = 1;
  // Variable to define the number of movies per page
  moviesPerPage: number = 9;

  // Inject the ActivatedRoute and TmdbService services
  constructor(private route: ActivatedRoute, private tmdbService: TmdbService) { }

  // Lifecycle hook that is called after the component has been initialized
  ngOnInit(): void {
    // Retrieve the actorId from the route parameters and fetch the movies
    this.actorId = +this.route.snapshot.paramMap.get('actorId')!;
    this.fetchMovies();
  }

  // Method to fetch the movies of the actor from the API
  fetchMovies(): void {
    this.tmdbService.getActorMovies(this.actorId).subscribe((response: any) => {
      this.movies = response.cast; // Assign the cast movies to the movies array
    });
  }

  // Getter method to get the movies for the current page
  get paginatedMovies() {
    const start = (this.currentPage - 1) * this.moviesPerPage;
    return this.movies.slice(start, start + this.moviesPerPage);
  }

  // Method to go to the next page of movies
  nextPage(): void {
    if ((this.currentPage * this.moviesPerPage) < this.movies.length) {
      this.currentPage++;
    }
  }

  // Method to go to the previous page of movies
  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
}
