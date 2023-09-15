import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { HeroBannerComponent } from './components/hero-banner/hero-banner.component';
import { GridCardsComponent } from './components/grid-cards/grid-cards.component';
import { AdsPlaceComponent } from './components/ads-place/ads-place.component';
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';

// Pages
import { HomeComponent } from './pages/home/home.component';
import { PostComponent } from './pages/post/post.component';
import { AllpostsComponent } from './pages/allposts/allposts.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

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
    NotfoundComponent,
    AllpostsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
