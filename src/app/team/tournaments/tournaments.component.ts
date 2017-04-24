import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'tournaments',
    templateUrl: './tournaments.component.html',
    styleUrls: ['./tournaments.component.less']
})

export class TournamentsComponent implements OnInit {

    ngOnInit(): void {
        console.log('Tournaments Component!');
    }
}
