import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CalendarModule, DateAdapter} from 'angular-calendar';
import {adapterFactory} from 'angular-calendar/date-adapters/date-fns';
import {ColorPickerModule} from 'ngx-color-picker';

import {CalendarRoutingModule} from './calendar-routing.module';
import {CalendarComponent} from './calendar/calendar.component';
import {CalendarFormDialogComponent} from './calendar-form-dialog/calendar-form-dialog.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from '@angular/forms';
import {TaskFormComponent} from './task-form/task-form.component';
import {MatAutocompleteModule, MatFormFieldModule, MatInputModule, MatSelectModule} from "@angular/material";
import {SharedComponentsModule} from "../../shared/components/shared-components.module";
import {AmazingTimePickerModule} from 'amazing-time-picker';
import {NgxMatSelectSearchModule} from 'ngx-mat-select-search';
import {CustomerFormComponent} from "../customers/customer-form/customer-form.component";
import {CustomersModule} from "../customers/customers.module";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import { DayTaskDatatableComponent } from './day-task-datatable/day-task-datatable.component';
import {DropdownModule} from "primeng/components/dropdown/dropdown";
import {MultiSelectModule} from "primeng/components/multiselect/multiselect";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        NgbModule,
        ColorPickerModule,
        CalendarModule.forRoot({
            provide: DateAdapter,
            useFactory: adapterFactory
        }),
        CalendarRoutingModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        SharedComponentsModule,
        AmazingTimePickerModule,
        NgxMatSelectSearchModule,
        CustomersModule,
        NgxDatatableModule,
        DropdownModule,
        MultiSelectModule,

    ],
    declarations: [CalendarComponent, CalendarFormDialogComponent, TaskFormComponent, DayTaskDatatableComponent],
    entryComponents: [CalendarFormDialogComponent, TaskFormComponent,CustomerFormComponent],
})
export class CalendarAppModule {
}
