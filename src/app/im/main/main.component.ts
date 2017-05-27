import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../auth/auth.service";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'sn-main',
  template: `
    <p>
      <a routerLink="feed">feed</a>
      <a routerLink="profile">profile</a>
    </p>
    <router-outlet></router-outlet>
    <button (click)="logout()">Logout</button>
  `,
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private authSevice: AuthService, private title: Title) {}

  ngOnInit() {
    this.title.setTitle('Main');
  }

  logout() {
    this.authSevice.logout();
  }

}
