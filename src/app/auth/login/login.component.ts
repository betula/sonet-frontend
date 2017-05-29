import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth.service";
import {Title} from "@angular/platform-browser";

@Component({
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
          <button (click)="login($event)">Login</button>
          <a routerLink="/sign-up">Sign Up</a>
        </div>
      </form>
    </sn-layout>
  `,
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private title: Title) {}

  ngOnInit() {
    this.title.setTitle('Login');
  }

  login(event) {
    event.preventDefault();

    this.authService.loginWithRedirect();
  }

}
