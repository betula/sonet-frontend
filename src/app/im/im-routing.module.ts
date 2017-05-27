import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from "./main/main.component";
import {IsLoggedInGuard} from "../auth/is-logged-in.guard";

import {ProfileComponent} from "./profile/profile.component";
import {FeedComponent} from "./feed/feed.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [ IsLoggedInGuard ],
    canActivateChild: [ IsLoggedInGuard ],
    children: [
      { path: '', redirectTo: 'feed', pathMatch: 'full' },
      { path: 'feed', component: FeedComponent },
      { path: 'profile', component: ProfileComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImRoutingModule { }
