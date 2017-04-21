import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { AgmCoreModule } from 'angular2-google-maps/core';

import { AppComponent } from './app.component';
import { OurStoryComponent } from "./our-story/our-story.component";
import { AccommodationsComponent } from "./accomodations/accommodations.component";
import { RegistryComponent } from "./registry/registry.component";
import { RsvpComponent } from "./rsvp/rsvp.component";
import { WeddingPartyComponent } from "./wedding-party/wedding-party.component";
import { CeremonyComponent } from "./ceremony/ceremony.component";
import { HomeComponent } from "./home/home.component";

import { ROUTES } from "./app.routes";

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(ROUTES),
        HttpModule,
        FormsModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBRIXAk5xdvn3ezypsSe55f8dZhcHheAZ8'
        })
    ],
    declarations: [
        AppComponent,
        OurStoryComponent,
        WeddingPartyComponent,
        CeremonyComponent,
        HomeComponent,
        AccommodationsComponent,
        RegistryComponent,
        RsvpComponent
    ],
    // Use hash strategy so page refreshes on github pages route correctly
    providers: [ {provide: LocationStrategy, useClass: HashLocationStrategy} ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
