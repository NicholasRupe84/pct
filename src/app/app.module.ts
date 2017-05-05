import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CollapseModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { SiteHeaderComponent } from './shared/site-header/site-header.component';
import { SideNavigationComponent } from './shared/side-navigation/side-navigation.component';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { DetailsComponent } from './details/details.component';
import { RetailComponent } from './retail/retail.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderComponent,
    SideNavigationComponent,
    LandingPageComponent,
    DetailsComponent,
    RetailComponent,
    ContactPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    CollapseModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
