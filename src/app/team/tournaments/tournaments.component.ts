import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TOURNAMENTS_DATA } from './data/tournaments.data';
import { TournamentYear } from './model/tournament-year.model';

@Component({
    selector: 'tournaments',
    templateUrl: './tournaments.component.html',
    styleUrls: ['./tournaments.component.less']
})
export class TournamentsComponent implements OnInit {
    // Tournament data to inject into our template
    private tournamentData: TournamentYear[] = TOURNAMENTS_DATA;
    // Subscription to our route parameters (tournament year)
    private routeParamsSubscription: any;
    // Current tournament year
    private year: number;

    // Inject the ActivatedRoute into our component
    constructor(private route: ActivatedRoute) {}

    /**
     * Subscribe to our route parameters (tournament year).
     */
    ngOnInit() {
        this.routeParamsSubscription = this.route.params.subscribe((params) => {
            // (+) converts string 'year' to a number
            this.year = +params['year'];
        });
    }

    /**
     * Unsubscribe to our route parameters (tournament year).
     */
    ngOnDestroy() {
        this.routeParamsSubscription.unsubscribe();
    }
}
