import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TooltipComponent} from "./tooltip/tooltip.component";
import {LayoutComponent} from "./layout/layout.component";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [LayoutComponent, TooltipComponent],
  exports: [LayoutComponent, TooltipComponent]
})
export class BaseUiModule { }
