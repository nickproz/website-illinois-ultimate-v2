import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'prospective-players',
    templateUrl: './prospective-players.component.html',
    styleUrls: ['./prospective-players.component.less']
})

export class ProspectivePlayersComponent implements OnInit {

    ngOnInit(): void {
        console.log('Prospective Players Component!');
    }
}
