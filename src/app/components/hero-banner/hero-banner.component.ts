import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-banner',
  templateUrl: './hero-banner.component.html',
  styleUrls: ['./hero-banner.component.scss']
})
export class HeroBannerComponent implements OnInit {
  imagePath:string;

  constructor() {
    this.imagePath = '/assets/images/banner-hero.png'
  }

  ngOnInit(): void {
  }

  getHeroBanner ():string {
    return `url(${this.imagePath})`;
  }
}
