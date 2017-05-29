import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../auth/auth.service";
import {Title} from "@angular/platform-browser";

@Component({
  template: `
    <sn-layout>
      <p>
        <a routerLink="feed">feed</a>
        <a routerLink="profile">profile</a>
      </p>
      <router-outlet></router-outlet>
    </sn-layout>
  `,
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private title: Title) {}

  ngOnInit() {
    this.title.setTitle('Main');
  }

}
