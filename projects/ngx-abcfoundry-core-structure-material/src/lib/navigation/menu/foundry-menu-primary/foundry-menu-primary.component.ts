import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Router } from '@angular/router';
import {MenuService} from '../../service/menu.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'abc-foundry-menu-primary',
  templateUrl: './foundry-menu-primary.component.html',
  styleUrls: ['./foundry-menu-primary.component.scss']
})
export class FoundryMenuPrimaryComponent implements OnInit {

  @Output() closeSidenav = new EventEmitter<void>();

  public items;
  public items$: Observable<any>;

  constructor(private router: Router, public menuService: MenuService) {

   // this.items = this.mapItems(router.config);
  }

  ngOnInit() {
   this.items = this.menuService.getFoundryMenu();
    console.log('%%%%%%%In Menu module onInit with items', this.items);
  }

/*
  private mapItems(routes: any[], path?: string): any[] {
    return routes.map(item => {
      let result: any;
      let data = item.data;
     // if (typeof(title) !== undefined && title != null)
      if (typeof(data) !== 'undefined') {
        // add some comments
        result = {
          text: item.data.title,
          path: (path ? `${ path }/` : '') + item.path,
        //  primary: item.data.primary
        };
        if (item.children) {
          result.items = this.mapItems(item.children, item.path);
        }
        console.log('#3 finished', result);
        return result;
      }
    });
  }

  sendMessage(): void {
    // send message to subscribers via observable subject
    this.menuService.sendMessage('Message from Home Component to App Component!');
  }

  clearMessage(): void {
    // clear message
    this.menuService.clearMessage();
  }
*/


onClose() {
    // add close items
  console.log('***** Close Called');
  this.menuService.onSidenavToggle();
}


  // convert the routes to menu items.

/*
  private mapItems(routes: any[], path?: string): any[] {
    return routes.map(item => {
      let result: any;
      console.log('#1 method');
      if (item.data.title === !undefined) {
        console.log('#2 Not undefined Found a title');
      }
         result = {
          text: item.data.title,
          path: (path ? `${ path }/` : '') + item.path
        };
        if (item.children) {
          result.items = this.mapItems(item.children, item.path);
        }
        console.log('#3 finished', result);
        return result;

    });
  }
*/


}
