import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CollapseModule } from 'ngx-bootstrap';
import { PdfViewerComponent } from 'ng2-pdf-viewer';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { SiteHeaderComponent } from './shared/site-header/site-header.component';
import { SideNavigationComponent } from './shared/side-navigation/side-navigation.component';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { DetailsComponent } from './details/details.component';
import { FertilizerAndChemicalComponent } from './industrial-offerings/distribution-piping/fertilizer-and-chemical/fertilizer-and-chemical.component';
import { RetailComponent } from './industrial-offerings/distribution-piping/retail/retail.component';
import { WoodBurnerComponent } from './industrial-offerings/distribution-piping/wood-burner/wood-burner.component';
import { BahrainComponent } from './industrial-offerings/dust-control/bahrain/bahrain.component';
import { IndonesiaComponent } from './industrial-offerings/dust-control/indonesia/indonesia.component';
import { MexicoComponent } from './industrial-offerings/dust-control/mexico/mexico.component';
import { HomeAndGardenComponent } from './home-and-garden/home-and-garden.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PdfViewerComponent,
    SiteHeaderComponent,
    SideNavigationComponent,
    LandingPageComponent,
    DetailsComponent,
    FertilizerAndChemicalComponent,
    RetailComponent,
    WoodBurnerComponent,
    BahrainComponent,
    IndonesiaComponent,
    MexicoComponent,
    HomeAndGardenComponent,
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
