import {Component, Directive} from '@angular/core';

@Directive({
  selector: '[sn-tooltip-handler],[sn-tooltip-content]'
})
export class TooltipSlotDirective {}

@Component({
  selector: 'sn-tooltip',
  template: `    
    <div class="handler" (mouseenter)="open()" (mouseleave)="close()">
      <ng-content select="[sn-tooltip-handler]"></ng-content>
    </div>
    <div class="content-placeholder">
      <div class="content" *ngIf="active">
        <ng-content select="[sn-tooltip-content]"></ng-content>
      </div>
    </div>
  `,
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent {

  public active: boolean = false;

  public open(): void {
    this.active = true;
  }

  public close(): void {
    this.active = false;
  }

}
