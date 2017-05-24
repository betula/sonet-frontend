import { Component } from '@angular/core';

@Component({
  selector: 'sn-layout',
  template: `
    <div class="header">
      <a routerLink="/" class="header-title">Sonet</a>
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
export class LayoutComponent {}
