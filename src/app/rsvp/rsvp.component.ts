import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'rsvp',
    templateUrl: './rsvp.component.html',
    styleUrls: ['./rsvp.component.less']
})

export class RsvpComponent implements OnInit {

    ngOnInit(): void {
        console.log('Rsvp Component!');
    }
}
