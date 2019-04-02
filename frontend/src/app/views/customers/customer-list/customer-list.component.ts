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
        {field: 'name', header: 'お名前', width: '20%'},
        {field: 'company', header: '会社', width: '30%'},
        {field: 'birthday', header: 'お誕生日', width: '10%'},
        {field: 'phone', header: '電話番号', width: '10%'},
        {field: 'email', header: 'メール', width: '20%'},
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
