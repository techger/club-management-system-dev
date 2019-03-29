import {Component, OnInit, ViewChild} from '@angular/core';
import {CustomerService} from "../../../shared/services/customer.service";
import {Customer} from "../../../shared/interfaces/customer";
import {Router} from "@angular/router";

@Component({
    selector: 'app-customer-list',
    templateUrl: './customer-list.component.html',
    styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
    customers: Customer[];
    columns = [
        {field: 'name', header: 'name', width: '20%'},
        {field: 'company', header: 'company', width: '30%'},
        {field: 'birthday', header: 'birthday', width: '10%'},
        {field: 'phone', header: 'phone', width: '10%'},
        {field: 'email', header: 'email', width: '20%'},
    ];

    constructor(private customerService: CustomerService,
                private router: Router,) {
    }

    ngOnInit() {
        this.customers = this.customerService.getCustomerList();
    }

    goToCustomerDetails(selectedCustomer) {
        const customerId = selectedCustomer.customerId;
        this.router.navigate(['customer-list/customer-details', customerId]);
    }

}
