import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl} from "@angular/forms";
import {AddedCustomer} from "../../../shared/interfaces/added-customer";
import {format} from 'date-fns';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: 'app-add-customer-form',
    templateUrl: 'add-visiting-customer-form.component.html',
    styleUrls: ['add-visiting-customer-form.component.scss']
})
export class AddVisitingCustomerFormComponent implements OnInit {
    addVisitingCustomerForm: FormGroup;
    addedCustomer: AddedCustomer;

    constructor(public activeModal: NgbActiveModal) {
    }

    ngOnInit() {
        this.addVisitingCustomerForm = this.buildAddVisitingCustomerForm(this.addedCustomer);
    }

    buildAddVisitingCustomerForm(addedCustomer: AddedCustomer = {
        numberOfCustomer: 1,
        entryTime: format(new Date, "HH:mm"),
        entryDate: format(new Date, "YYYY-MM-DD"),
        visitingCustomerId:1
    }) {
        return new FormGroup({
            numberOfCustomer: new FormControl(addedCustomer.numberOfCustomer),
            entryTime: new FormControl(addedCustomer.entryTime),
            entryDate: new FormControl(addedCustomer.entryDate),
            workingDate: new FormControl(addedCustomer.workingDate),
            visitingCustomerId: new FormControl(addedCustomer.visitingCustomerId)
        });
    }

    submitAddVisitingCustomerForm(formData) {
        console.log(formData);
        formData.value.workingDate = format(new Date, "YYYY-MM-DD");
        this.closeModal();
    }

    closeModal(){
        this.activeModal.close();
    }


}
