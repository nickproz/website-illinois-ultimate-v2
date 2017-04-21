import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'wedding-party',
    templateUrl: './wedding-party.component.html',
    styleUrls: ['./wedding-party.component.less']
})

export class WeddingPartyComponent implements OnInit {

    ngOnInit(): void {
        console.log('Wedding Party Component!');
    }
}
