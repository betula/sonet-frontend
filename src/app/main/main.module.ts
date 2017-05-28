import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { IsLoggedInGuard } from './is-logged-in.guard';
import { IsLoggedOutGuard } from './is-logged-out.guard';
import { SignUpComponent } from './sign-up/sign-up.component';
import {NotFoundComponent} from "./not-found/not-found.component";
import {MainUiModule} from "../main-ui/main-ui.module";

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    MainUiModule
  ],
  declarations: [LoginComponent, SignUpComponent, NotFoundComponent],
  providers: [
    AuthService,
    IsLoggedInGuard,
    IsLoggedOutGuard
  ]
})
export class MainModule { }
