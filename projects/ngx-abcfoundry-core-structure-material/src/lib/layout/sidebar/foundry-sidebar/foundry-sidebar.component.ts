import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'abc-foundry-sidebar',
  templateUrl: './foundry-sidebar.component.html',
  styleUrls: ['./foundry-sidebar.component.scss']
})
export class FoundrySidebarComponent implements OnInit {

  @Output() closeSidenav = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onClose() {
    this.closeSidenav.emit();
  }
}
