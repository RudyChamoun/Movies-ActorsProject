import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

// Define the application configuration
export const appConfig: ApplicationConfig = {
  // Provide the router configuration
  providers: [provideRouter(routes)]
};
