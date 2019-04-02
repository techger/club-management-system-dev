import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CustomerListComponent} from "./customer-list/customer-list.component";
import {CustomerDetailsFormComponent} from "./customer-details-form/customer-details-form.component";
import {PageRegisterCustomerComponent} from "./page-register-customer/page-register-customer.component";
import {PageCustomerDetailsComponent} from "./page-customer-details/page-customer-details.component";

const routes: Routes = [
    {
        path: '',
        component: CustomerListComponent
    },
    {
        path: 'register-customer',
        component: PageRegisterCustomerComponent,

    },
    {
        path: 'customer-details/:customerId',
        component: PageCustomerDetailsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CustomersRoutingModule {
}
