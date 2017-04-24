import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'roster',
    templateUrl: './roster.component.html',
    styleUrls: ['./roster.component.less']
})

export class RosterComponent implements OnInit {

    ngOnInit(): void {
        console.log('Roster Component!');
    }
}
