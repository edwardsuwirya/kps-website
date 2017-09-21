import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ExperienceListComponent } from './experience-list/experience-list.component';
import { HistoryScopeComponent } from './history-scope/history-scope.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselLandingComponent } from './carousel-landing/carousel-landing.component';
import {ProductSl5Component} from "./product-list/product-slides5/product-sl5";
import {ProductSl4Component} from "./product-list/product-slides4/product-sl4";
import {ProductSl3Component} from "./product-list/product-slides3/product-sl3";
import {ProductSl2Component} from "./product-list/product-slides2/product-sl2";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    ProductSl2Component,
    ProductSl3Component,
    ProductSl4Component,
    ProductSl5Component,
    ExperienceListComponent,
    HistoryScopeComponent,
    FooterComponent,
    CarouselLandingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
