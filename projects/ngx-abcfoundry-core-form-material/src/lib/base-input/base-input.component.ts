import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'abcfoundry-base-input',
  template: ``,
  styles: []
})
export class BaseInputComponent implements OnInit  {
  @Input() label: string;
  @Input() value: string;
  @Input() placeHolder: string;
  @Input() hint: string;
  @Input() appearance: string;
  @Input() icon: string;
  @Input() iconAlign: string;

 constructor() {

 }

  ngOnInit() {
  }

}
