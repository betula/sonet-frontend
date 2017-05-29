import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth.service";
import {Title} from "@angular/platform-browser";

@Component({
  template: `    
    <form>
      <div>User name: 
        <input>
        <sn-tooltip>
          <span sn-tooltip-handler>?</span>
          <div sn-tooltip-content>Letters A-Za-z and digits 0-9</div>
        </sn-tooltip>
      </div>
      <div>Password: <input type="password"></div>
      <div>
        <button (click)="login($event)">Login</button>
        <a routerLink="/auth/create-account">Sign Up</a>
      </div>
    </form>
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
