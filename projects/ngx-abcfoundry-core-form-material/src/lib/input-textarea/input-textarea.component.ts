import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'abcfoundry-input-textarea',
  template: `
    <mat-form-field class="example-full-width">
      <textarea matInput placeholder="Leave a comment"></textarea>
    </mat-form-field>
  `,
  styles: []
})
export class InputTextareaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
