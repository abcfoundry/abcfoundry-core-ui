import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'abcfoundry-input-text',
  template: `
    <mat-form-field appearance="{{appearance}}">
      <mat-label>{{label}}</mat-label>
      <input matInput placeholder="{{ placeHolder}}" value="{{ value}}" class="abcfoundry-input-text">
      <mat-icon matPrefix *ngIf="iconAlign =='left'">{{icon}}</mat-icon>
      <mat-icon matSuffix *ngIf="iconAlign =='right'">{{icon}}</mat-icon>
      <mat-hint>{{ hint}}</mat-hint>
    </mat-form-field>
  `,
  styles: []
})
export class InputTextComponent implements OnInit {

  @Input() label: string;
  @Input() value: string;
  @Input() placeHolder: string;
  @Input() hint: string;
  @Input() appearance: string;
  @Input() icon: string;
  @Input() iconAlign: string;

  constructor() { }

  ngOnInit() {
  }

}
