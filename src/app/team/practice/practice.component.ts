import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'practice',
    templateUrl: './practice.component.html',
    styleUrls: ['./practice.component.less']
})

export class PracticeComponent implements OnInit {

    ngOnInit(): void {
        console.log('Practice Component!');
    }
}
