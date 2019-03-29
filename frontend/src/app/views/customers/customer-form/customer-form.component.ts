import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {Customer} from "../../../shared/interfaces/customer";

@Component({
    selector: 'app-customer-form',
    templateUrl: './customer-form.component.html',
    styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {
    customerForm: FormGroup;
    customer: Customer;
    loadingCustomerForm: boolean = false;

    constructor(private formBuilder: FormBuilder,
                private activeModal: NgbActiveModal) {
    }

    ngOnInit() {
        this.customerForm = this.buildCustomerForm(this.customer);
    }

    buildCustomerForm(customer:Customer ={}) {
        return new FormGroup({
            name: new FormControl(customer.name),
            nameKana: new FormControl(customer.nameKana,),
            nickname: new FormControl(customer.nickname,),
            birthday: new FormControl(customer.birthday,),
        });
    }

    submitCustomerForm(customerForm) {
        this.loadingCustomerForm = true;
        console.log(customerForm);
        this.closeModal();

    }

    closeModal(){
        this.activeModal.close();
    }
}
