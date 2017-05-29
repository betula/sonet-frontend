import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { IsLoggedInGuard } from './is-logged-in.guard';
import { IsLoggedOutGuard } from './is-logged-out.guard';
import { SignUpComponent } from './sign-up/sign-up.component';
import {BaseUiModule} from "../base-ui/base-ui.module";

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    BaseUiModule
  ],
  declarations: [LoginComponent, SignUpComponent],
  providers: [
    AuthService,
    IsLoggedInGuard,
    IsLoggedOutGuard
  ]
})
export class AuthModule { }
