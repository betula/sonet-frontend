import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {IsLoggedOutGuard} from "./is-logged-out.guard";
import {SignUpComponent} from "./sign-up/sign-up.component";

const routes: Routes = [
  {
    path: 'login',
    canActivate: [ IsLoggedOutGuard ],
    component: LoginComponent
  },
  {
    path: 'sign-up',
    canActivate: [ IsLoggedOutGuard ],
    component: SignUpComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
