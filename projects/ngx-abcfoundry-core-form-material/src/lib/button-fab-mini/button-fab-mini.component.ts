import { Component, OnInit } from '@angular/core';
import {BaseButtonComponent} from '../base-button/base-button.component';

@Component({
  selector: 'abcfoundry-button-fab-mini',
  template: `
    <button mat-mini-fab color="{{btStyle}}" disabled="{{isDisabled}}">
      <mat-icon *ngIf="iconAlign =='left'">{{btIcon}}</mat-icon>{{btText}}
      <mat-icon *ngIf="iconAlign =='right'">{{btIcon}}</mat-icon></button>
  `,
  styles: []
})
export class ButtonFabMiniComponent extends BaseButtonComponent implements OnInit {


  constructor() {
    super();
  }

  ngOnInit() {
  }

}
