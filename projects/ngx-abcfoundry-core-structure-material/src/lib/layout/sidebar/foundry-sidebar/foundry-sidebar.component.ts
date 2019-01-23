import {Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {FoundryMenuPrimaryComponent} from '../../../navigation/menu/foundry-menu-primary/foundry-menu-primary.component';
import {MenuService} from '../../../navigation/service/menu.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'abc-foundry-sidebar',
  templateUrl: './foundry-sidebar.component.html',
  styleUrls: ['./foundry-sidebar.component.scss']
})
export class FoundrySidebarComponent implements OnInit {

  constructor(private menuService: MenuService) {

  }


  ngOnInit() {
  }

  onToggleSidenav() {
    this.menuService.onSidenavToggle();
  }


}





