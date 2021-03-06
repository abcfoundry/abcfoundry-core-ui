import {Component, Input, OnInit} from '@angular/core';
import {BaseInputComponent} from '../base-input/base-input.component';

@Component({
  selector: 'abcfoundry-input-password',
  template: `
    <mat-form-field appearance="{{appearance}}">
      <input matInput type="password" placeholder="{{ placeHolder}}" value="{{ value}}" class="abcfoundry-input-text">
      <mat-label>{{label}}</mat-label>
      <mat-icon matPrefix *ngIf="iconAlign =='left'">{{icon}}</mat-icon>
      <mat-icon matSuffix *ngIf="iconAlign =='right'">{{icon}}</mat-icon>
      <mat-hint>{{ hint}}</mat-hint>
    </mat-form-field>
  `,
  styles: []
})
export class InputPasswordComponent extends BaseInputComponent implements OnInit {


  constructor() {
    super();
  }

  ngOnInit() {
  }

}
