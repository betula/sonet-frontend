import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImRoutingModule } from './im-routing.module';
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './profile/profile.component';
import { FeedComponent } from './feed/feed.component';

@NgModule({
  imports: [
    CommonModule,
    ImRoutingModule
  ],
  declarations: [MainComponent, ProfileComponent, FeedComponent]
})
export class ImModule { }
