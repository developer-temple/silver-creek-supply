import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AboutRouteComponent } from './routes/about-route/about-route.component';
import { ContactRouteComponent } from './routes/contact-route/contact-route.component';
import { HomeRouteComponent } from './routes/home-route/home-route.component';
import { LegalRouteComponent } from './routes/legal-route/legal-route.component';
import { ProductsRouteComponent } from './routes/products-route/products-route.component';
import { ServicesRouteComponent } from './routes/services-route/services-route.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PopupComponent } from './components/popup/popup.component';
import { SectionComponent } from './components/section/section.component';
import { AbsoluteContainerComponent } from './components/absolute-container/absolute-container.component';
import { FlexContainerComponent } from './components/flex-container/flex-container.component';
import { GridContainerComponent } from './components/grid-container/grid-container.component';
import { TileComponent } from './components/tile/tile.component';
import { BandComponent } from './components/band/band.component';
import { ViewerComponent } from './components/viewer/viewer.component';
import { ButtonIconComponent } from './components/button-icon/button-icon.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutRouteComponent,
    ContactRouteComponent,
    HomeRouteComponent,
    LegalRouteComponent,
    ProductsRouteComponent,
    ServicesRouteComponent,
    HeaderComponent,
    FooterComponent,
    PopupComponent,
    SectionComponent,
    AbsoluteContainerComponent,
    FlexContainerComponent,
    GridContainerComponent,
    TileComponent,
    BandComponent,
    ViewerComponent,
    ButtonIconComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
