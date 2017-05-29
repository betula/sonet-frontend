import {Component, Directive} from '@angular/core';

@Directive({
  selector: '[sn-layout-header],[sn-layout-content]'
})
export class LayoutSlotDirective {}

@Component({
  selector: 'sn-layout',
  template: `
    <div class="header">
      <a routerLink="/" class="header-title">Sonet</a>
      <ng-content select="[sn-layout-header]"></ng-content>
    </div>
    <ng-content select="[sn-layout-content]"></ng-content>
    <div class="footer">
      <div class="footer-content">&copy; 2017</div>
    </div>
  `,
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

}
