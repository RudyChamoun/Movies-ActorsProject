import { Routes } from '@angular/router';
import { ActorSearchComponent } from './actor-search/actor-search.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { FavoriteActorsComponent } from './favorite-actors/favorite-actors.component';

// Define the routes for the application
export const routes: Routes = [
  {
    path: '',  // Default route, redirects to ActorSearchComponent
    component: ActorSearchComponent
  },
  {
    path: 'movies/:actorId',  // Route with a parameter to display movies for a specific actor
    component: MovieListComponent
  },
  {
    path: 'favorites',  // Route to display the list of favorite actors
    component: FavoriteActorsComponent
  }
];
