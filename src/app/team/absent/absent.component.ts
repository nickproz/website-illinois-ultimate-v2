import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'absent',
    templateUrl: './absent.component.html',
    styleUrls: ['./absent.component.less']
})

export class AbsentComponent implements OnInit {

    ngOnInit(): void {
        console.log('Absent Component!');
    }
}
