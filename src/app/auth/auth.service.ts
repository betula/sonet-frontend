import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Router} from "@angular/router";

@Injectable()
export class AuthService {

  isLoggedIn: boolean = false;
  redirectUrl: string;

  constructor(private router: Router) {}

  login(): Observable<boolean> {
    return Observable.of(true).delay(1000).do(() => this.isLoggedIn = true);
  }

  logout(): Promise<boolean> | void {
    this.isLoggedIn = false;
    return this.router.navigateByUrl('/login');
  }

}
