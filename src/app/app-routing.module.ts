import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { DetailsComponent } from './details/details.component';

const appRoutes: Routes = [
    { path: 'home', component: LandingPageComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'details', component: DetailsComponent }
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