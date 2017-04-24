import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'results',
    templateUrl: './results.component.html',
    styleUrls: ['./results.component.less']
})

export class ResultsComponent implements OnInit {

    ngOnInit(): void {
        console.log('Results Component!');
    }
}
