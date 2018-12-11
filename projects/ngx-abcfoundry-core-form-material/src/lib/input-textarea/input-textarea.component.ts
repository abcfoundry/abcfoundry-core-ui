import { Component, OnInit } from '@angular/core';
import {BaseInputComponent} from '../base-input/base-input.component';

@Component({
  selector: 'abcfoundry-input-textarea',
  template: `
    <mat-form-field appearance="{{appearance}}">
      <textarea matInput placeholder="{{ placeHolder}}" value="{{ value}}" class="abcfoundry-input-text"></textarea>
      <mat-label>{{label}}</mat-label>
      <mat-icon matPrefix *ngIf="iconAlign =='left'">{{icon}}</mat-icon>
      <mat-icon matSuffix *ngIf="iconAlign =='right'">{{icon}}</mat-icon>
      <mat-hint>{{ hint}}</mat-hint>
    </mat-form-field>
  `,
  styles: []
})
export class InputTextareaComponent extends BaseInputComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
