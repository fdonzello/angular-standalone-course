import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { provideEffects } from "@ngrx/effects";
import * as authEffects from './effects';
import { provideStore } from "@ngrx/store";
import { reducer } from "./reducers";


const AUTH_ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login',
        component: LoginComponent,
      }
    ],
    providers: [
      provideStore(reducer),
      provideEffects(authEffects)
    ]
  },
]


export default AUTH_ROUTES;
