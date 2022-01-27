import { NgModule } from '@angular/core';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { PracticeComponent } from './practice/practice.component';
import { TournamentsComponent } from './tournaments/tournaments.component';
import { RosterComponent } from './roster/roster.component';
import { AbsentComponent } from './absent/absent.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from '../app.routes';
import { SpreadsheetService } from '../global/service/google-spreadsheet.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBRIXAk5xdvn3ezypsSe55f8dZhcHheAZ8'
        }),
        RouterModule.forRoot(ROUTES)
    ],
    declarations: [PracticeComponent, TournamentsComponent, RosterComponent, AbsentComponent],
    providers: [SpreadsheetService]
})
export class TeamModule {}
