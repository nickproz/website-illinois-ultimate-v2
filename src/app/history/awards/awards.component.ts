import { Component, OnInit } from '@angular/core';
import { AWARDS_DATA } from './data/awards.data';
import { Award } from './model/award.model';

@Component({
    selector: 'awards',
    templateUrl: './awards.component.html',
    styleUrls: ['./awards.component.less']
})
export class AwardsComponent implements OnInit {
    // Awards data to inject into our template
    private awardData: Award[] = AWARDS_DATA;

    ngOnInit(): void {}
}
