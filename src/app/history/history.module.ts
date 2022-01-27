import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { TeamHistoryComponent } from './team-history/team-history.component';
import { AwardsComponent } from './awards/awards.component';
import { ResultsComponent } from './results/results.component';
import { ROUTES } from '../app.routes';

@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(ROUTES)],
    declarations: [TeamHistoryComponent, AwardsComponent, ResultsComponent]
})
export class HistoryModule {}
