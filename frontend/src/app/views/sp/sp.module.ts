import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SpRoutingModule} from './sp-routing.module';
import {SpDashboardComponent} from './sp-dashboard/sp-dashboard.component';
import {CalendarAppModule} from "../calendar/calendar.module";

@NgModule({
    imports: [
        CommonModule,
        SpRoutingModule,
        CalendarAppModule,
    ],
    declarations: [SpDashboardComponent],
})
export class SpModule {
}
