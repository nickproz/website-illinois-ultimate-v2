import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'registry',
    templateUrl: './registry.component.html',
    styleUrls: ['./registry.component.less']
})

export class RegistryComponent implements OnInit {

    ngOnInit(): void {
        console.log('Registry Component!');
    }
}
