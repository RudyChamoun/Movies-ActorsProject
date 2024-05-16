import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';  // Import CommonModule
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ActorSearchComponent } from './actor-search/actor-search.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { FavoriteActorsComponent } from './favorite-actors/favorite-actors.component';  // Ensure this is imported
import { TmdbService } from './tmdb.service';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    ActorSearchComponent,
    MovieListComponent,
    FavoriteActorsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,  // Ensure CommonModule is imported here
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    TmdbService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
