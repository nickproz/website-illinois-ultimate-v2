import { Component, OnInit } from '@angular/core';
import { PRACTICE_DATA } from "./data/practice.data";
import { Practice } from "./model/practice.model";

@Component({
    selector: 'practice',
    templateUrl: './practice.component.html',
    styleUrls: ['./practice.component.less']
})

export class PracticeComponent implements OnInit {

    // Practice data to inject into our template
    private practiceData: Practice[] = PRACTICE_DATA;

    ngOnInit(): void {}
}
