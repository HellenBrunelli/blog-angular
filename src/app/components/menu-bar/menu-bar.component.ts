import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {
  open: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }
  menuToggle(): void {
    this.open = !this.open;
  }
}
