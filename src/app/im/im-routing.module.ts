import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from "./main/main.component";
import {IsLoggedInGuard} from "../auth/is-logged-in.guard";

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [ IsLoggedInGuard ],
    canActivateChild: [ IsLoggedInGuard ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImRoutingModule { }
