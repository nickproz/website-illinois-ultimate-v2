import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'team-history',
    templateUrl: './team-history.component.html',
    styleUrls: ['./team-history.component.less']
})

export class TeamHistoryComponent implements OnInit {

    ngOnInit(): void {
        console.log('Team History Component!');
    }
}
