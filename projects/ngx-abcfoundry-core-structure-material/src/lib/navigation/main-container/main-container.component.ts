import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'abcfoundry-main-container',
  template: `
    <div class="main-container">
      <!-- *****************  START Main   *****************  -->
     <div >
       <p>this is main content</p>
     </div>
   <router-outlet></router-outlet>
      <!-- *****************  END Main   *****************  -->
    </div>
  `,
  styles: [`
    html {
      height: 100%;
    }
    .main-container{
      background-color: bisque;
      height: 100% !important;
      width: 100%;
    }`
  ]
})
export class MainContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
