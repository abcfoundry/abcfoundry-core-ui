import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'abcfoundry-ngx-abcfoundry-core-form-material',
  template: `
    <form class="example-form">

      <abcfoundry-input-text placeHolder="This is a placeholder passed in"></abcfoundry-input-text>
      <mat-form-field class="example-full-width">
        <textarea matInput placeholder="Leave a comment"></textarea>
      </mat-form-field>
      <button mat-stroked-button color="primary">Primary</button>
    </form>
  `,
  styles: []
})
export class NgxAbcfoundryCoreFormMaterialComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
