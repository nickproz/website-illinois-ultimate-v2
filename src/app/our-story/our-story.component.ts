import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'our-story',
    templateUrl: './our-story.component.html',
    styleUrls: ['./our-story.component.less']
})

export class OurStoryComponent implements OnInit {

    ngOnInit(): void {
        console.log('Our Story Component!');
    }
}
