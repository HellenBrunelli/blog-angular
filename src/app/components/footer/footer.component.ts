import { Component, HostListener } from '@angular/core';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  isMobile:boolean = true;

  constructor() {
    this.checkScreenSize();
  }
  
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.checkScreenSize();
  }

  private checkScreenSize():void {
    const screenWidth = window.innerWidth;
    const mobileWidth = 768;

    if (screenWidth < mobileWidth) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  }
}
