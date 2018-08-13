import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.less'],
    encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
    ngOnInit(): void {}
}
