import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { HistoryYear } from './model/history-year.model';
import { HISTORY_DATA } from './data/history-year.data';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'team-history',
    templateUrl: './team-history.component.html',
    styleUrls: ['./team-history.component.less']
})
export class TeamHistoryComponent implements OnInit, AfterViewInit {
    // Results data to inject into our template
    private historyData: HistoryYear[] = HISTORY_DATA;
    // Subscription to our route parameters (tournament year)
    private routeParamsSubscription: any;
    // Current tournament year
    private year: number;

    // Year dropdowns
    @ViewChild('1978dropdown')
    private firstDropdown: ElementRef;
    @ViewChild('1994dropdown')
    private secondDropdown: ElementRef;
    @ViewChild('2000dropdown')
    private thirdDropdown: ElementRef;
    @ViewChild('2010dropdown')
    private fourthDropdown: ElementRef;
    @ViewChild('2019dropdown')
    private fifthDropdown: ElementRef;

    // Inject the ActivatedRoute into our component
    constructor(private route: ActivatedRoute) {}

    ngAfterViewInit() {
        $(this.firstDropdown.nativeElement).dropdown({});
        $(this.secondDropdown.nativeElement).dropdown({});
        $(this.thirdDropdown.nativeElement).dropdown({});
        $(this.fourthDropdown.nativeElement).dropdown({});
        $(this.fifthDropdown.nativeElement).dropdown({});
    }

    /**
     * Subscribe to our route parameters (tournament year).
     */
    ngOnInit() {
        this.routeParamsSubscription = this.route.params.subscribe((params) => {
            // (+) converts string 'year' to a number
            this.year = +params['year'];
        });
    }

    /**
     * Unsubscribe to our route parameters (tournament year).
     */
    ngOnDestroy() {
        this.routeParamsSubscription.unsubscribe();
    }
}
