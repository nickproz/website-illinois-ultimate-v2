import { Component, OnInit } from '@angular/core';
import { RESULTS_DATA } from "./data/results.data";
import { Result } from "./model/result.model";

@Component({
    selector: 'results',
    templateUrl: './results.component.html',
    styleUrls: ['./results.component.less']
})

export class ResultsComponent implements OnInit {

    // Results data to inject into our template
    private resultData: Result[] = RESULTS_DATA;

    ngOnInit(): void {}
}
