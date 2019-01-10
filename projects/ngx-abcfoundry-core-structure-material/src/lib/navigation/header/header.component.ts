import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'abcfoundry-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() sidenavToggle = new EventEmitter<void>();


  /*@Input() primaryMenu = 'Set in component';*/


  @Input() primaryMenu = { 'menuBlock': [
      {
        id : '001',
        name : 'main menu',
        type : 'primary',
        position : 'flex-end',
        logo : 'LOGO Name',
        logoImg : '/img/img.png',
        links : [
          {'label' : 'Inputs 1', 'route' : 'input/page1', 'icon' : 'menu'},
          {'label' : 'Buttons 1', 'route' : 'button/page1', 'icon' : 'menu'},
          {'label' : 'Layout 4', 'route' : 'layout/page4', 'icon' : 'menu'},
        ]}
    ]
  };

/*  public abcMenu = { 'menuBlock': [
      {
        id : '001',
        name : 'main menu',
        type : 'primary',
        position : 'flex-end',
        logo : 'LOGO Name',
        logoImg : '/img/img.png',
        links : [
          {'label' : 'Inputs 1', 'route' : 'input/page1', 'icon' : 'menu'},
          {'label' : 'Buttons 1', 'route' : 'button/page1', 'icon' : 'menu'},
          {'label' : 'Buttons 1', 'route' : 'button/page1', 'icon' : 'menu'},
        ]} ,
      { id : '002',
        name : 'Side Menu 1',
        type : 'secondary',
        position : 'flex-end',
        logo : 'LOGO Name',
        logoImg : '/img/img.png',
        links : [
          {'label' : 'Menu 3', 'route' : '/page1', 'icon' : 'menu'},
          {'label' : 'Menu 4', 'route' : '/page2', 'icon' : 'menu'},
        ]} ,
      { id : '003',
        name : 'Side Menu 2',
        type : 'secondary',
        position : 'flex-end',
        logo : 'LOGO Name',
        logoImg : '/img/img.png',
        links : [
          {'label' : 'Menu 5', 'route' : '/page1', 'icon' : 'menu'},
          {'label' : 'Menu 6', 'route' : '/page2', 'icon' : 'menu'},
        ]}
    ]
  };*/

  constructor() { }

  ngOnInit() {
  }

  onToggleSidenav() {
    this.sidenavToggle.emit();
    console.log("navigation is toggled from header");
  }

}
