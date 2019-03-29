import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {Utils} from "../../../shared/utils";
import {NgbModal, NgbModalConfig, NgbPanelChangeEvent} from "@ng-bootstrap/ng-bootstrap";
import {OrderModalComponent} from "../order-modal/order-modal.component";
import {CustomerService} from "../../../shared/services/customer.service";
import {VisitingCustomer} from "../../../shared/interfaces/visiting-customer";
import {VisitingCustomerFormComponent} from "../visiting-customer-form/visiting-customer-form.component";
import {BillFormComponent} from "../bill-form/bill-form.component";
import {SharedAnimations} from "../../../shared/animations/shared-animations";
import {AddVisitingCustomerFormComponent} from "../add-visiting-customer-form/add-visiting-customer-form.component";
import {CustomerFormComponent} from "../../customers/customer-form/customer-form.component";
import {CalendarAppEvent} from "../../../shared/models/calendar-event.model";

@Component({
    selector: 'app-hole-status',
    templateUrl: './hole-status.component.html',
    styleUrls: ['./hole-status.component.scss'],
    animations: [SharedAnimations],
    providers: [NgbModalConfig, NgbModal]
})
export class HoleStatusComponent implements OnInit {

    date = new Date();
    dateCtrl = new FormControl(Utils.dateToNgbDate(new Date()));
    visitingCustomers: VisitingCustomer[];
    visitingCustomerModal = null;
    isEditVisitingCustomer:boolean = false;
    douhanCustomers;


    constructor(private modalService: NgbModal,
                config: NgbModalConfig,
                private customerService: CustomerService) {
        config.backdrop = 'static';
        config.keyboard = false;
    }

    ngOnInit() {
        this.visitingCustomers = this.customerService.getVisitingCustomers();
        this.douhanCustomers = this.customerService.getDouhanCustomers();
        console.log(this.douhanCustomers);
    }

    onChange(event) {
        console.log(event);
    }

    public openAddVisitingCustomerModal(customer) {
        const addVisitingCustomerModal = this.modalService.open(AddVisitingCustomerFormComponent, {centered: true});
    }

    public openRegisterCustomerFormModal(customer) {
        const registerCustomerFormModal = this.modalService.open(CustomerFormComponent, {centered: true});
    }

    public openDouhanCustomerModal(douhanCustomer){
        console.log(douhanCustomer);
        const douhanCustomerFormModal = this.modalService.open(VisitingCustomerFormComponent, {centered: true});
        douhanCustomerFormModal.componentInstance.douhanCustomer =douhanCustomer;
    }

    public openOrderModal(customer) {
        const orderModal = this.modalService.open(OrderModalComponent, {centered: true});
    }

    public openBillModal(customer) {
        const billModal = this.modalService.open(BillFormComponent, {centered: true});
    }

    public openVisitingCustomerEditModal(customer) {
        const visitingCustomerEditModal = this.modalService.open(VisitingCustomerFormComponent, {centered: true});
        visitingCustomerEditModal.componentInstance.data = {customer};

    }

    public openVisitingCustomerFormModal() {
        this.visitingCustomerModal = this.modalService.open(VisitingCustomerFormComponent, {centered: true});
        this.visitingCustomerModal.result
            .then((result) => {

            }, (reason) => {
            });
    }



}
