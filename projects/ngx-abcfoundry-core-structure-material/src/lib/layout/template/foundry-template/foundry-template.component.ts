import { Component, OnInit } from '@angular/core';
import {MenuService} from '../../../navigation/service/menu.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'abc-foundry-template',
  templateUrl: './foundry-template.component.html',
  styleUrls: ['./foundry-template.component.scss']
})
export class FoundryTemplateComponent implements OnInit {


  constructor(public menuService: MenuService) { }

  ngOnInit() {

  }


  onSidenavClose($event) {
    console.log('$$$$$$$ Backdrop event recieved');
  this.menuService.onSidenavToggle();
  }


}
