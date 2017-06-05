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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent,
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
