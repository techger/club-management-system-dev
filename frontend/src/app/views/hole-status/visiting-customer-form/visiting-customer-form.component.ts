import {Component, OnInit, Input} from '@angular/core';
import {FormGroup, FormControl} from "@angular/forms";
import {VisitingCustomer} from "../../../shared/interfaces/visiting-customer";
import {CustomerService} from "../../../shared/services/customer.service";
import {SelectItem} from "primeng/components/common/selectitem";
import {CastService} from "../../../shared/services/cast.service";
import {SeatService} from "../../../shared/services/seat.service";
import {format} from 'date-fns';
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: 'app-visiting-customer-form',
    templateUrl: './visiting-customer-form.component.html',
    styleUrls: ['./visiting-customer-form.component.scss']
})
export class VisitingCustomerFormComponent implements OnInit {
    visitingCustomerForm: FormGroup;
    visitingCustomer: VisitingCustomer;
    isEditVisitingCustomer: boolean = false;

    @Input() douhanCustomer;

    customerOptions: SelectItem[];
    selectedCustomer;

    castOptions: SelectItem[];
    selectedAccountCast;
    selectedCalledCasts;

    seatOptions: SelectItem[];
    selectedSeat;


    constructor(private customerService: CustomerService,
                private castService: CastService,
                private seatService: SeatService,
                public activeModal: NgbActiveModal,
                public modalService: NgbModal) {
    }

    ngOnInit() {
        this.visitingCustomerForm = this.buildVisitingCustomerForm(this.visitingCustomer);
        this.customerOptions = this.customerService.getCustomerOptions();
        this.castOptions = this.castService.getCastOptions();
        this.seatOptions = this.seatService.getSeatOptions();
        console.log(this.douhanCustomer);
    }

    buildVisitingCustomerForm(visitingCustomer: VisitingCustomer = {
        name: null,
        isNewCustomer: null,
        entryTime: format(new Date, "HH:mm"),
        entryDate: format(new Date, "YYYY-MM-DD")
    }) {
        if (this.douhanCustomer) {
            return new FormGroup({
                name: new FormControl(visitingCustomer.name || this.douhanCustomer.customerId),
                isNewCustomer: new FormControl(visitingCustomer.isNewCustomer),
                accountCast: new FormControl(visitingCustomer.accountCast || this.douhanCustomer.accountCastId),
                numberOfCustomer: new FormControl(visitingCustomer.numberOfCustomer || this.douhanCustomer.numberOfCustomer),
                entryDate: new FormControl(visitingCustomer.entryDate),
                entryTime: new FormControl(visitingCustomer.entryTime),
                seat: new FormControl(visitingCustomer.seat),
                douhanCasts: new FormControl(visitingCustomer.douhanCasts || this.douhanCustomer.douhanCastsId),
                calledCasts: new FormControl(visitingCustomer.calledCasts || this.douhanCustomer.calledCasts),
                isCheckout: new FormControl(visitingCustomer.isCheckout),
            })
        }
        return new FormGroup({
            name: new FormControl(visitingCustomer.name),
            isNewCustomer: new FormControl(visitingCustomer.isNewCustomer),
            accountCast: new FormControl(visitingCustomer.accountCast),
            numberOfCustomer: new FormControl(visitingCustomer.numberOfCustomer),
            entryDate: new FormControl(visitingCustomer.entryDate),
            entryTime: new FormControl(visitingCustomer.entryTime),
            seat: new FormControl(visitingCustomer.seat),
            douhanCasts: new FormControl(visitingCustomer.douhanCasts),
            calledCasts: new FormControl(visitingCustomer.calledCasts),
            isCheckout: new FormControl(visitingCustomer.isCheckout),
        })


    }

    onSelectCustomer(event) {
        console.log(event.value);
        this.selectedCustomer = event.value
    }

    onSelectAccountCast(event) {
        console.log(event.value);
        this.selectedAccountCast = event.value
    }

    onSelectSeat(event) {
        console.log(event.value);
        this.selectedSeat = event.value
    }

    onSelectDouhanCast(event) {
        console.log(event.value);
        this.selectedCalledCasts = event.value
    }

    onSelectCalledCast(event) {
        console.log(event.value);
        this.selectedCalledCasts = event.value
    }

    submitVisitingCustomerForm(formData) {
        console.log(formData);
        return this.closeModal();
    }

    deleteVisitingCustomer(formData) {
        console.log(formData);
        return this.closeModal();
    }

    closeModal() {
        this.activeModal.close();
    }


}
