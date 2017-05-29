import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {AuthService} from "./auth.service";

@Injectable()
export class IsLoggedOutGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.checkLoggedOut();
  }

  private checkLoggedOut(): boolean {
    const isLoggedOut: boolean = !this.authService.isLoggedIn;

    if (!isLoggedOut) {
      this.router.navigateByUrl('/');
    }

    return isLoggedOut;
  }

}
