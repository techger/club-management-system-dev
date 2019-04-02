import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl} from "@angular/forms";
import {Bill} from "../../../shared/interfaces/bill";
import {SelectItem} from "primeng/components/common/selectitem";
import {SeatService} from "../../../shared/services/seat.service";
import {CustomerService} from "../../../shared/services/customer.service";
import {CastService} from "../../../shared/services/cast.service";
import {format} from 'date-fns';
import {ItemService} from "../../../shared/services/item.service";
import {SelectItemGroup} from "primeng/components/common/selectitemgroup";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";


@Component({
    selector: 'app-bill-form',
    templateUrl: './bill-form.component.html',
    styleUrls: ['./bill-form.component.scss']
})
export class BillFormComponent implements OnInit {
    billForm: FormGroup;
    bill: Bill;

    seatOptions: SelectItem[];

    customerOptions: SelectItem[];
    castOptions: SelectItem[];
    itemOptions: SelectItemGroup[];

    constructor(private seatService: SeatService,
                private customerService: CustomerService,
                private castService: CastService,
                private itemService: ItemService,
                public activeModal: NgbActiveModal) {
    }

    ngOnInit() {
        this.billForm = this.buildBillForm(this.bill);
        this.seatOptions = this.seatService.getSeatOptions();
        this.customerOptions = this.customerService.getCustomerOptions();
        this.castOptions = this.castService.getCastOptions();
        this.itemOptions = this.itemService.getItemGroupOptions();
    }

    buildBillForm(bill: Bill = {
        customerId: 1,
        seatId: 1,
        accountCastId: 1,
        workingDate: format(new Date, "YYYY-MM-DD"),
        douhanFee: 10000
    }) {
        return new FormGroup({
            billCtrlNo: new FormControl(bill.billCtrlNo),
            visitingCustomerId: new FormControl(bill.visitingCustomerId),
            customerId: new FormControl(bill.customerId),
            seatId: new FormControl(bill.seatId),
            accountCastId: new FormControl(bill.accountCastId),
            workingDate: new FormControl(bill.workingDate),
            douhanFee: new FormControl(bill.douhanFee),
            numberOfDouhan: new FormControl(bill.numberOfDouhan),
            numberOfCustomer: new FormControl(bill.numberOfCustomer),
            numberOfSet: new FormControl(bill.numberOfSet),
            numberOfCalledCast: new FormControl(bill.numberOfCalledCast),
            callingFee: new FormControl(bill.callingFee),
            setFee: new FormControl(bill.setFee),
            discount: new FormControl(bill.discount),
            subTotal: new FormControl(bill.subTotal),
            serviceTaxRatio: new FormControl(bill.serviceTaxRatio),
            serviceTax: new FormControl(bill.serviceTax),
            total: new FormControl(bill.total),
            paymentType: new FormControl(bill.paymentType),
        });
    }

    submitBillForm(billForm) {
        console.log(billForm);
    }

    confirmBill(billForm) {
        console.log(billForm);
    }

    closeModal(){
        this.activeModal.close();
    }
}
