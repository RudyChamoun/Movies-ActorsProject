import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ActorSearchComponent } from './actor-search/actor-search.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { TmdbService } from './tmdb.service';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    ActorSearchComponent,
    MovieListComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
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
