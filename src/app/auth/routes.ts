import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";

const AUTH_ROUTES: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  }
]


export default AUTH_ROUTES;
