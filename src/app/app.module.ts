import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ActorSearchComponent } from './actor-search/actor-search.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { FavoriteActorsComponent } from './favorite-actors/favorite-actors.component';
import { TmdbService } from './tmdb.service';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    // Declare components that are part of this module
    AppComponent,
    ActorSearchComponent,
    MovieListComponent,
    FavoriteActorsComponent
  ],
  imports: [
    // Import necessary modules for the application
    BrowserModule,  // Provides services that are essential to launch and run a browser app
    CommonModule,   // Provides common directives like ngIf and ngFor
    FormsModule,    // Provides template-driven forms
    HttpClientModule,  // Provides HTTP services
    RouterModule.forRoot(routes)  // Configures the router at the application's root level with the routes
  ],
  providers: [
    // Provide services that can be injected into components and other services
    TmdbService  // Service to interact with the TMDB API
  ],
  bootstrap: [AppComponent]  // The main application view, called the root component, which hosts all app views
})
export class AppModule { }
