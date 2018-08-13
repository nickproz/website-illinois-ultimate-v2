import { Component, AfterViewInit } from '@angular/core';

@Component({
    selector: 'left-sidebar',
    templateUrl: './left-sidebar.component.html',
    styleUrls: ['./left-sidebar.component.less']
})
export class LeftSidebarComponent implements AfterViewInit {
    ngAfterViewInit(): void {
        this.initializeTwitterWidget();
    }

    /**
     * Twitter script for initializing our Twitter Timeline widget
     */
    initializeTwitterWidget(): void {
        !(function(d, s, id) {
            let js: any,
                fjs = d.getElementsByTagName(s)[0],
                p = 'https';
            if (!d.getElementById(id)) {
                js = d.createElement(s);
                js.id = id;
                js.src = p + '://platform.twitter.com/widgets.js';
                fjs.parentNode.insertBefore(js, fjs);
            }
        })(document, 'script', 'twitter-wjs');
    }
}
