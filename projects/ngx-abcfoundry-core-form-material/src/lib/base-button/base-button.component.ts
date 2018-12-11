import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'abcfoundry-base-button',
  template: `

  `,
  styles: []
})
export class BaseButtonComponent implements OnInit {
  @Input() btIcon: string;
  @Input() iconAlign: string;
  @Input() btText: string;
  @Input() btStyle: string;
  @Input() btAtt: string;
  @Input() isDisabled = false;


  constructor() { }

  ngOnInit() {
  }

}
