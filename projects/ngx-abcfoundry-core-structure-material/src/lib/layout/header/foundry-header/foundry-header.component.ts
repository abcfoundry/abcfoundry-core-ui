import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'abc-foundry-header',
  templateUrl: './foundry-header.component.html',
  styleUrls: ['./foundry-header.component.scss']
})
export class FoundryHeaderComponent implements OnInit {

  @Output() sidenavToggle = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

}
