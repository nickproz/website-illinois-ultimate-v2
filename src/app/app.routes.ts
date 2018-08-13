// Route Configuration
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProspectivePlayersComponent } from './prospective-players/prospective-players.component';
import { ContactComponent } from './contact/contact.component';
import { PracticeComponent } from './team/practice/practice.component';
import { TournamentsComponent } from './team/tournaments/tournaments.component';
import { RosterComponent } from './team/roster/roster.component';
import { AbsentComponent } from './team/absent/absent.component';
import { TeamHistoryComponent } from './history/team-history/team-history.component';
import { AwardsComponent } from './history/awards/awards.component';
import { ResultsComponent } from './history/results/results.component';

export const ROUTES: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'practice', component: PracticeComponent },
    { path: 'absent', component: AbsentComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'prospects', component: ProspectivePlayersComponent },
    { path: 'tournaments/:year', component: TournamentsComponent },
    { path: 'roster/:year', component: RosterComponent },
    { path: 'history/:year', component: TeamHistoryComponent },
    { path: 'awards', component: AwardsComponent },
    { path: 'results', component: ResultsComponent },
    { path: '**', component: HomeComponent }
];
