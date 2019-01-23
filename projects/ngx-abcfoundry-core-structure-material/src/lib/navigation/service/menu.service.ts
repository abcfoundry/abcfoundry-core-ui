import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {Router} from '@angular/router';
import {FoundaryMenu} from './menu.interface';



@Injectable({ providedIn: 'root' })
export class MenuService {
  // Observable string sources
  private subject = new Subject<any>();
  private missionAnnouncedSource = new Subject<string>();
  private missionConfirmedSource = new Subject<string>();
  // Observable controlling navigation
  private isNavOpenSource = new BehaviorSubject<boolean>(false);
  public isNavOpen$ = this.isNavOpenSource.asObservable();
  isSidenavOpen = false;
  // Start menu
  // Items
  public items: FoundaryMenu[];
  public menuItemSource = new Subject<FoundaryMenu[]>();
  // public menuItem$ =  this.menuItemSource.asObservable();


  constructor(private router: Router) {
    this.onLoadItems(router.config);
  }

  sendMessage(message: string) {
    this.subject.next({ text: message });
  }

  clearMessage() {
    this.subject.next();
  }

  getFoundryMenu() {
    // console.log('###### In Menu Service getFoundryMenu', this.menuItem$ );
    return this.items;
  }



  onSidenavToggle() {
    console.log('*** In Menu Service - onSidenavToggle');
    this.isSidenavOpen = !this.isSidenavOpen;
    console.log('*** The value of isSidenavOpen is: ', this.isSidenavOpen );
    this.isNavOpenSource.next(this.isSidenavOpen);
  }

  onLoadItems(routes) {
    this.items = this.mapItems(routes);
    console.log('###### In Menu Service onLoad Items', this.items );
  }

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


}
