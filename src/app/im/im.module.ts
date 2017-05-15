import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImRoutingModule } from './im-routing.module';
import { MainComponent } from './main/main.component';

@NgModule({
  imports: [
    CommonModule,
    ImRoutingModule
  ],
  declarations: [MainComponent]
})
export class ImModule { }
