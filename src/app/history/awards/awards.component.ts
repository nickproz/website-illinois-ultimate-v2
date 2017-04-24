import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'awards',
    templateUrl: './awards.component.html',
    styleUrls: ['./awards.component.less']
})

export class AwardsComponent implements OnInit {

    ngOnInit(): void {
        console.log('Awards Component!');
    }
}
