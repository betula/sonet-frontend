import { Component } from '@angular/core';
import {AuthService} from "../../main/auth.service";

@Component({
  selector: 'sn-layout',
  template: `
    <div class="header">
      <a routerLink="/" class="header-title">Sonet</a>
      <ng-container *ngIf="isLoggedOut">
        <a routerLink="/login" class="header-login">Login</a>
      </ng-container>
      <ng-container *ngIf="isLoggedIn">
        <a class="header-logout" (click)="logout()">Logout</a>
      </ng-container>
    </div>
    <div class="body">
      <div class="body-content">
        <ng-content></ng-content>
      </div>
    </div>
    <div class="footer">
      <div class="footer-content">&copy; 2017</div>
    </div>
  `,
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  constructor(private authService: AuthService) {}

  get isLoggedIn() {
    return this.authService.isLoggedIn
  }

  get isLoggedOut() {
    return !this.authService.isLoggedIn
  }

  logout() {
    this.authService.logout();
  }

}
