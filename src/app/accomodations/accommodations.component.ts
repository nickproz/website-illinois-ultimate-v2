import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'accommodations',
    templateUrl: './accommodations.component.html',
    styleUrls: ['./accommodations.component.less']
})

export class AccommodationsComponent implements OnInit {

    ngOnInit(): void {
        console.log('Accommodations Component!');
    }
}
