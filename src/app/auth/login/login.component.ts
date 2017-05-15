import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth.service";
import {NavigationExtras, Router} from "@angular/router";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'sn-login',
  styleUrls: ['./login.component.scss'],
  template: `    
    <button (click)="login()">Login</button>
    <a routerLink="/sign-up">Sign Up</a>
  `,
  styles: []
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private title: Title) {}

  ngOnInit() {
    this.title.setTitle('Login');
  }

  loginSuccessful() {
    const redirectUrl = this.authService.redirectUrl;
    this.router.navigateByUrl(redirectUrl || '/', <NavigationExtras>{ replaceUrl: true });
  }

  login() {
    this.authService.login().toPromise().then(() => {
      this.loginSuccessful();
    });

  }

}
