import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MenuService} from '../../../navigation/service/menu.service';

@Component({
  selector: 'abc-foundry-header',
  templateUrl: './foundry-header.component.html',
  styleUrls: ['./foundry-header.component.scss']
})
export class FoundryHeaderComponent implements OnInit {


  constructor(public menuService: MenuService) { }

  ngOnInit() {
  }

  onToggleSidenav() {
    this.menuService.onSidenavToggle();
  }


}
