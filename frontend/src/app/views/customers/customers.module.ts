import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CustomersRoutingModule} from './customers-routing.module';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {CustomerFormComponent} from "./customer-form/customer-form.component";
import { CustomerListComponent } from './customer-list/customer-list.component';
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {TableModule} from "primeng/components/table/table";
import { CustomerDetailsFormComponent } from './customer-details-form/customer-details-form.component';
import { PageRegisterCustomerComponent } from './page-register-customer/page-register-customer.component';
import { PageCustomerDetailsComponent } from './page-customer-details/page-customer-details.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        CustomersRoutingModule,
        NgxDatatableModule,
        TableModule

    ],
    declarations: [CustomerFormComponent, CustomerListComponent, CustomerDetailsFormComponent, PageRegisterCustomerComponent, PageCustomerDetailsComponent],
    exports: [CustomerFormComponent],
    entryComponents: []
})
export class CustomersModule {
}
