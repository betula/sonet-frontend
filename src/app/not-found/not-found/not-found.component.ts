import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  template: `
    <sn-layout>
      <div sn-layout-content>
        <h2>404 Not Found</h2>
      </div>
    </sn-layout>
  `,
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor(private title: Title) {}

  ngOnInit() {
    this.title.setTitle('404 Not Found');
  }

}
