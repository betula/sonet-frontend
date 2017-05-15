import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../auth/auth.service";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'sn-main',
  styleUrls: ['./main.component.scss'],
  template: `
    <p>
      main works!
    </p>
    <button (click)="logout()">Logout</button>
  `
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
