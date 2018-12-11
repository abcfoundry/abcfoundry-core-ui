import { Component, OnInit } from '@angular/core';
import {BaseButtonComponent} from '../base-button/base-button.component';

@Component({
  selector: 'abcfoundry-button-fab',
  template: `
    <button mat-fab color="{{btStyle}}" disabled="{{isDisabled}}">
  <mat-icon *ngIf="iconAlign =='left'">{{btIcon}}</mat-icon>{{btText}}
<mat-icon *ngIf="iconAlign =='right'">{{btIcon}}</mat-icon></button>
`,
  styles: []
})
export class ButtonFabComponent extends BaseButtonComponent implements OnInit {


  constructor() {
    super();
  }

  ngOnInit() {
  }

}
