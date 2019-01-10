import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material';

@Component({
  selector: 'abcfoundry-main-template',
  templateUrl: './main-template.component.html',
  styleUrls: ['./main-template.component.css']
})
export class MainTemplateComponent implements OnInit {
/*  @Input() mode = 'over';
  @Input() hasBackdrop = true;
  @Output() sidenavToggle = new EventEmitter<void>();*/

  @Input() hasSidenav = false;
  @Input() isOpened = true;
/*
  @Input() primaryMenuIn ;
  @Output() primaryMenu ;
*/

  events: string[] = [];
  opened: boolean;
  @ViewChild('sidenav') sidenav: MatSidenav;

  reason = '';
  abcMenu = 'This is the menu';


  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

  constructor() { }

  ngOnInit() {
  }

}
