import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { HeroBannerComponent } from './components/hero-banner/hero-banner.component';
import { AdsPlaceComponent } from './components/ads-place/ads-place.component';
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { GridCardsComponent } from './components/grid-cards/grid-cards.component';

// Pages
import { PostComponent } from './pages/post/post.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    HeroBannerComponent,
    AdsPlaceComponent,
    CardComponent,
    FooterComponent,
    HomeComponent,
    GridCardsComponent,
    PostComponent,
    BreadcrumbComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
