import { Routes } from '@angular/router';
import { ActorSearchComponent } from './actor-search/actor-search.component';
import { MovieListComponent } from './movie-list/movie-list.component';

export const routes: Routes = [
  { path: '', component: ActorSearchComponent },
  { path: 'movies/:actorId', component: MovieListComponent }
];
