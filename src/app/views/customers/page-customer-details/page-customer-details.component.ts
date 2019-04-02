import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Customer} from "../../../shared/interfaces/customer";
import {CustomerService} from "../../../shared/services/customer.service";

@Component({
    selector: 'app-page-customer-details',
    templateUrl: './page-customer-details.component.html',
    styleUrls: ['./page-customer-details.component.scss']
})
export class PageCustomerDetailsComponent implements OnInit {
    customer: Customer;
    customerId: number;

    constructor(private activateRoute: ActivatedRoute,
                private customerService: CustomerService) {
    }

    ngOnInit() {
        this.customerId = parseInt(this.activateRoute.snapshot.paramMap.get('customerId'));
        this.customer = this.customerService.findCustomer(this.customerId);
    }

}
