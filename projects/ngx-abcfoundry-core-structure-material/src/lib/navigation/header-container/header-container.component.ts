import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'abcfoundry-header-container',
  template: `
    <abcfoundry-header-top></abcfoundry-header-top>
    <abcfoundry-header></abcfoundry-header>
    <abcfoundry-header-bottom></abcfoundry-header-bottom>
  `,
  styles: []
})
export class HeaderContainerComponent implements OnInit {
  @Output() sidenavToggle = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

}
