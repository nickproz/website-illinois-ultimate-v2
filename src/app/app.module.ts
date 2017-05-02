import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { AgmCoreModule } from 'angular2-google-maps/core';

import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ProspectivePlayersComponent } from "./prospective-players/prospective-players.component";
import { ContactComponent } from "./contact/contact.component";
import { AppComponent } from './app.component';

import { TeamModule } from "./team/team.module";
import { HistoryModule } from "./history/history.module";
import { PageFrameModule } from "./page-frame/page-frame.module";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        // AgmCoreModule.forRoot({
        //     apiKey: 'AIzaSyBRIXAk5xdvn3ezypsSe55f8dZhcHheAZ8'
        // }),
        PageFrameModule,
        TeamModule,
        HistoryModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        ProspectivePlayersComponent,
        ContactComponent
    ],
    // Use hash strategy so page refreshes on Github pages route correctly
    providers: [ {provide: LocationStrategy, useClass: HashLocationStrategy} ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
