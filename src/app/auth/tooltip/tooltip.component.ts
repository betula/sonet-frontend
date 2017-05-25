import { Component } from '@angular/core';

@Component({
  selector: 'sn-tooltip',
  template: `    
    <div class="handler" (mouseenter)="open()" (mouseleave)="close()">
      <ng-content select="[data-handler]"></ng-content>
    </div>
    <div class="content-placeholder">
      <div class="content" *ngIf="active">
        <ng-content select="[data-content]"></ng-content>
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
