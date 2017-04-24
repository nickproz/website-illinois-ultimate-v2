import { NgModule } from '@angular/core';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { PracticeComponent } from "./practice/practice.component";
import { TournamentsComponent } from "./tournaments/tournaments.component";
import { RosterComponent } from "./roster/roster.component";
import { AbsentComponent } from "./absent/absent.component";

@NgModule({
    imports: [
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBRIXAk5xdvn3ezypsSe55f8dZhcHheAZ8'
        })
    ],
    declarations: [
        PracticeComponent,
        TournamentsComponent,
        RosterComponent,
        AbsentComponent
    ]
})
export class TeamModule {}
