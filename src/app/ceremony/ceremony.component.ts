import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ceremony',
    templateUrl: './ceremony.component.html',
    styleUrls: ['./ceremony.component.less']
})

export class CeremonyComponent implements OnInit {

    ngOnInit(): void {
        console.log('Ceremony Component!');
    }
}
