import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImRoutingModule } from './im-routing.module';
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './profile/profile.component';
import { FeedComponent } from './feed/feed.component';
import {NotFoundComponent} from "./not-found/not-found.component";
import { FeedService } from './feed.service';
import {BaseUiModule} from "../base-ui/base-ui.module";

@NgModule({
  imports: [
    CommonModule,
    ImRoutingModule,
    BaseUiModule
  ],
  declarations: [MainComponent, ProfileComponent, FeedComponent, NotFoundComponent],
  providers: [FeedService]
})
export class ImModule { }
