import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { RosterYear } from "./model/roster-year.model";
import { ROSTER_DATA } from "./data/rosters.data";

@Component({
    selector: 'roster',
    templateUrl: './roster.component.html',
    styleUrls: ['./roster.component.less']
})

export class RosterComponent implements OnInit {

    // Roster data to inject into our template
    private rosterData: RosterYear[] = ROSTER_DATA;
    // Subscription to our route parameters (roster year)
    private routeParamsSubscription: any;
    // Current roster year
    private year: number;

    // Inject the ActivatedRoute into our component
    constructor(private route: ActivatedRoute) {}

    /**
     * Subscribe to our route parameters (roster year).
     */
    ngOnInit() {
        this.routeParamsSubscription = this.route.params.subscribe(params => {
            // (+) converts string 'year' to a number
            this.year = +params['year'];
        });
    }

    /**
     * Unsubscribe to our route parameters (roster year).
     */
    ngOnDestroy() {
        this.routeParamsSubscription.unsubscribe();
    }
}
