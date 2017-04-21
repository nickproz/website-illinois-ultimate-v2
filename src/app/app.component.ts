import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import './shared-style/styles.css';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})

export class AppComponent implements AfterViewInit {

    // Child mobile menu dropdown
    @ViewChild('mobileDropdown')
    private mobileDropdownElement: ElementRef;

    /**
     * Initialize our mobile menu dropdown.
     */
    ngAfterViewInit(): void {
        $(this.mobileDropdownElement.nativeElement).dropdown({});
    }
}
