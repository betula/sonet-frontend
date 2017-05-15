import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'sn-sign-up',
  styleUrls: ['./sign-up.component.scss'],
  template: `
    <button (click)="createAccount()">Create an account</button>
    <a routerLink="/login">Login</a>
  `
})
export class SignUpComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Sign Up');
  }

  createAccountSuccessful() {
    this.router.navigateByUrl('/');
  }

  createAccount() {
    this.authService.login().toPromise().then(() => {
      this.createAccountSuccessful();
    });

  }

}
