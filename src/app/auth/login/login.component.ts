import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth.service";
import {NavigationExtras, Router} from "@angular/router";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'sn-login',
  template: `
    <sn-layout>
      <form>
        <div>User name: 
          <input>
          <sn-tooltip>
            <span data-handler>?</span>
            <div data-content>Letters A-Za-z and digits 0-9</div>
          </sn-tooltip>
        </div>
        <div>Password: <input type="password"></div>
        <div>
          <button (click)="login()">Login</button>
          <a routerLink="/sign-up">Sign Up</a>
        </div>
      </form>
    </sn-layout>
  `,
  styleUrls: ['./login.component.scss']
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
