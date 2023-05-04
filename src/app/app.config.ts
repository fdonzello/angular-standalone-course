import { ApplicationConfig } from '@angular/core';
import { Routes, provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

const GLOBAL_ROUTES: Routes = [{
  path: 'auth',
  loadChildren: () => import('./auth/routes')
}]

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(GLOBAL_ROUTES),
    provideStore(),
    provideStoreDevtools()
  ],
};
