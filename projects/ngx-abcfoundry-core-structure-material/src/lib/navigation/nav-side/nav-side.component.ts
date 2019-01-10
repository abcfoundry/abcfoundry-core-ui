import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'abcfoundry-nav-side',
  template: `
    <div class="mat-nav-list2">
    <mat-nav-list>
      <a mat-list-item routerLink="/layout/page1" (click)="onClose()">
        <mat-icon>face</mat-icon>
        <span class="nav-caption">Menu Link 1</span>
      </a>
      <a mat-list-item routerLink="/" (click)="onClose()">
        <mat-icon>input</mat-icon>
        <span class="nav-caption">Login</span>
      </a>
      <a mat-list-item routerLink="/" (click)="onClose()">
        <mat-icon>fitness_center</mat-icon>
        <span class="nav-caption">Training</span>
      </a>
      <mat-list-item>
        <button mat-icon-button (click)="onClose()">
          <mat-icon>eject</mat-icon>
          <span class="nav-caption">Logout</span>
        </button>
      </mat-list-item>
    </mat-nav-list>
    </div>

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
    .mat-nav-list {
      border: 1px !important;
      width: 300px;
      height: 100%;

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
export class NavSideComponent implements OnInit {

  @Output() closeSidenav = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onClose() {
    this.closeSidenav.emit();
  }

}
