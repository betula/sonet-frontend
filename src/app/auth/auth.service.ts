import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {NavigationExtras, Router} from "@angular/router";
import {LocalStorage} from 'ng2-webstorage';

@Injectable()
export class AuthService {

  @LocalStorage()
  isLoggedIn: boolean;

  redirectUrl: string;

  constructor(private router: Router) {}

  login(): Observable<boolean> {
    return Observable.of(true).delay(1000).do(() => this.isLoggedIn = true);
  }

  loginWithRedirect(): Promise<boolean> {
    return this.login().toPromise().then(() => {
      return this.router.navigateByUrl(this.redirectUrl || '/', <NavigationExtras>{ replaceUrl: true });
    });
  }

  logout(): Promise<boolean> {
    this.isLoggedIn = false;
    return this.router.navigateByUrl('/login');
  }

}
