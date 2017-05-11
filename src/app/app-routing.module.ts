import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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

const appRoutes: Routes = [
    { path: 'home', component: LandingPageComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'industry-details', component: DetailsComponent },
    { path: 'fertilizer-and-chemical', component: FertilizerAndChemicalComponent },
    { path: 'retail', component: RetailComponent },
    { path: 'wood-burner', component: WoodBurnerComponent },
    { path: 'bahrain', component: BahrainComponent },
    { path: 'indonesia', component: IndonesiaComponent },
    { path: 'mexico', component: MexicoComponent },
    { path: 'home-and-garden', component: HomeAndGardenComponent },
    { path: 'contact', component: ContactPageComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}