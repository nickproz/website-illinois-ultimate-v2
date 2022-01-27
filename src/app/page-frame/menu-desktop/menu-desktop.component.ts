import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
    selector: 'menu-desktop',
    templateUrl: './menu-desktop.component.html',
    styleUrls: ['./menu-desktop.component.less']
})
export class MenuDesktopComponent implements AfterViewInit {
    // Menu dropdowns
    @ViewChild('teamDropdown')
    private teamDropdown: ElementRef;
    @ViewChild('historyDropdown')
    private historyDropdown: ElementRef;

    /**
     * Initialize our mobile menu dropdown.
     */
    ngAfterViewInit(): void {
        $(this.teamDropdown.nativeElement).dropdown({});
        $(this.historyDropdown.nativeElement).dropdown({});
    }
}
