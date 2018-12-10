import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'abcfoundry-input-password',
  template: `
    <mat-form-field class="example-full-width">
      <input matInput placeholder="Favorite food" value="Sushi">
    </mat-form-field>
  `,
  styles: []
})
export class InputPasswordComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
