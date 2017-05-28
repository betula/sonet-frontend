import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth.service";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'sn-sign-up',
  template: `
    <sn-layout>
      <form>
        <div>User name: <input></div>
        <div>Password: <input type="password"></div>
        <div>Confirm: <input type="password"></div>
        <div>
          <button (click)="createAccount()">Create an account</button>
          <a routerLink="/login">Login</a>
        </div>
      </form>
    </sn-layout>
  `,
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(private authService: AuthService, private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Sign Up');
  }

  createAccount() {
    this.authService.loginWithRedirect();
  }

}
