import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'abcfoundry-header-main',
  template: `
    <mat-toolbar color="primary">
      <div fxHide.gt-xs>
        <button mat-icon-button (click)="onToggleSidenav()">
          <mat-icon>menu</mat-icon>
        </button>
      </div>
      <div>
        <a routerLink="/">LOGO</a>
      </div>
      <div fxFlex fxLayout fxLayoutAlign="flex-end" fxHide.xs>
        <ul fxLayout fxLayoutGap="10px" class="navigation-items">
          <li>
            <a routerLink="/signup">Signup</a>
          </li>
          <li>
            <a routerLink="/login">Login</a>
          </li>
          <li>
            <a routerLink="/training">Training</a>
          </li>
          <li>
            <a>Logout</a>
          </li>
        </ul>
      </div>
    </mat-toolbar>
  `,
  styles: [`
    a {
      text-decoration: none;
      color: white;
    }

    a:hover,
    a:active {
      color: lightgray;
    }

    .navigation-items {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .nav-caption {
      display: inline-block;
      padding-left: 6px;
    }

  `]
})
export class HeaderMainComponent implements OnInit {

  @Output() sidenavToggle = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

}
