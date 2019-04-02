import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HoleStatusRoutingModule} from './hole-status-routing.module';
import {HoleStatusComponent} from "./hole-status/hole-status.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {OrderFormComponent} from './order-form/order-form.component';
import {OrderModalComponent} from './order-modal/order-modal.component';
import {OrderListComponent} from './order-list/order-list.component';
import {TableModule} from "primeng/components/table/table";
import {DropdownModule} from "primeng/components/dropdown/dropdown";
import {ButtonModule} from "primeng/components/button/button";
import {InputTextModule} from "primeng/components/inputtext/inputtext";
import {MultiSelectModule} from "primeng/components/multiselect/multiselect";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {VisitingCustomerFormComponent} from './visiting-customer-form/visiting-customer-form.component';
import {AmazingTimePickerModule} from "amazing-time-picker";
import {BillFormComponent} from './bill-form/bill-form.component';
import {AddVisitingCustomerFormComponent} from './add-visiting-customer-form/add-visiting-customer-form.component';
import {CustomersModule} from "../customers/customers.module";
import {CustomerFormComponent} from "../customers/customer-form/customer-form.component";

const declarations = [
    HoleStatusComponent,
    OrderFormComponent,
    OrderModalComponent,
    OrderListComponent,
    VisitingCustomerFormComponent,
    BillFormComponent,
    AddVisitingCustomerFormComponent,
];

const entryComponents = [
    OrderModalComponent,
    VisitingCustomerFormComponent,
    BillFormComponent,
    AddVisitingCustomerFormComponent,
    CustomerFormComponent,
];

@NgModule({
    imports: [
        CommonModule,
        HoleStatusRoutingModule,
        NgbModule,
        ReactiveFormsModule,
        FormsModule,
        TableModule,
        DropdownModule,
        ButtonModule,
        InputTextModule,
        MultiSelectModule,
        NgxDatatableModule,
        AmazingTimePickerModule,
        CustomersModule,
    ],
    declarations: declarations,
    entryComponents:entryComponents
})
export class HoleStatusModule {
}
