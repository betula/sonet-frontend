import { Component } from '@angular/core';

@Component({
  template: `
    <sn-layout>
      <sn-center sn-layout-content>
        <router-outlet></router-outlet>
      </sn-center>
    </sn-layout>
  `,
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

}
