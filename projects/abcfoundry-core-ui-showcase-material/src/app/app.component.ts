import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'abcfoundry Core UI  Showcase Material';

  abcMenu = { 'menuBlock': [
      {
        id : '001',
        name : 'main menu',
        type : 'primary',
        position : 'flex-end',
        logo : 'LOGO Name',
        logoImg : '/img/img.png',
        links : [
          {'label' : 'Inputs A', 'route' : 'input/page1', 'icon' : 'menu'},
          {'label' : 'Buttons A', 'route' : 'button/page1', 'icon' : 'menu'},
          {'label' : 'Layout A', 'route' : 'layout/page4', 'icon' : 'menu'},
        ]}
    ]
  };

  @Input() primaryMenu = { 'menuBlock': [
      {
        id : '001',
        name : 'main menu',
        type : 'primary',
        position : 'flex-end',
        logo : 'LOGO Name',
        logoImg : '/img/img.png',
        links : [
          {'label' : 'Inputs A', 'route' : 'input/page1', 'icon' : 'menu'},
          {'label' : 'Buttons B', 'route' : 'button/page1', 'icon' : 'menu'},
          {'label' : 'Layout 4', 'route' : 'layout/page4', 'icon' : 'menu'},
        ]}
    ]
  };


}

