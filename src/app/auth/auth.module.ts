import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { IsLoggedInGuard } from './is-logged-in.guard';
import { IsLoggedOutGuard } from './is-logged-out.guard';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LayoutComponent } from './layout/layout.component';
import { TooltipComponent } from './tooltip/tooltip.component';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  declarations: [LoginComponent, SignUpComponent, LayoutComponent, TooltipComponent],
  providers: [
    AuthService,
    IsLoggedInGuard,
    IsLoggedOutGuard
  ]
})
export class AuthModule { }
