import { Component, Input } from '@angular/core';

@Component({
  selector: 'collapsable-component',
  template: `
    <div
      class="well"
      (click)="toggleDetails()"
      style="background:white; border-radius: 20px"
    >
      <h4>
        <ng-content select="[well-title]"></ng-content>
      </h4>
      <ng-content select="[well-body]" *ngIf="showDetails"></ng-content>
    </div>
  `,
})
export class CollapsableComponent {
  @Input()
  title?: string;

  showDetails: boolean = true;

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }
}
