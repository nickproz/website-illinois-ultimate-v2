import { NgModule } from '@angular/core';

import { TeamHistoryComponent } from "./team-history/team-history.component";
import { AwardsComponent } from "./awards/awards.component";
import { ResultsComponent } from "./results/results.component";

@NgModule({
    imports: [],
    declarations: [
        TeamHistoryComponent,
        AwardsComponent,
        ResultsComponent
    ]
})
export class HistoryModule {}
