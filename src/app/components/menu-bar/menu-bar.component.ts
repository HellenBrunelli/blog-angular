import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/shared/services/menu/menu.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {
  open: boolean = false;
  menuData: any[] = [];

  constructor(
    private menuService: MenuService, 
  ) { }

  ngOnInit(): void {
    this.menuService.getMenuData().subscribe(data => {
      this.menuData = data;
    });
  }
  menuToggle(): void {
    if(window.innerWidth < 768) {
      this.open = !this.open;
    }
  }
}
