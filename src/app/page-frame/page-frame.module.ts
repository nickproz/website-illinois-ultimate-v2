import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { MenuDesktopComponent } from "./menu-desktop/menu-desktop.component";
import { MenuMobileComponent } from "./menu-mobile/menu-mobile.component";
import { LeftSidebarComponent } from "./left-sidebar/left-sidebar.component";
import { RightSidebarComponent } from "./right-sidebar/right-sidebar.component";
import { PageFrameComponent } from "./page-frame.component";

import { ROUTES } from "../app.routes";

@NgModule({
    imports: [
        RouterModule.forRoot(ROUTES)
    ],
    declarations: [
        PageFrameComponent,
        MenuDesktopComponent,
        MenuMobileComponent,
        LeftSidebarComponent,
        RightSidebarComponent
    ],
    exports: [
        PageFrameComponent
    ]
})
export class PageFrameModule {}
