import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
    selector: 'menu-mobile',
    templateUrl: './menu-mobile.component.html',
    styleUrls: ['./menu-mobile.component.less']
})
export class MenuMobileComponent implements AfterViewInit {
    // Menu dropdowns
    @ViewChild('teamDropdown')
    private teamDropdown: ElementRef;
    @ViewChild('historyDropdown')
    private historyDropdown: ElementRef;
    @ViewChild('mobileDropdown')
    private mobileDropdown: ElementRef;

    /**
     * Initialize our mobile menu dropdown.
     */
    ngAfterViewInit(): void {
        // $(this.teamDropdown.nativeElement).dropdown({});
        // $(this.historyDropdown.nativeElement).dropdown({});
        $(this.mobileDropdown.nativeElement).dropdown({});
    }
}
