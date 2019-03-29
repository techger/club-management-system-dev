import {Component, OnInit, Input} from '@angular/core';
import {CustomerService} from "../../../shared/services/customer.service";

@Component({
    selector: 'app-douhan-history',
    templateUrl: './douhan-history.component.html',
    styleUrls: ['./douhan-history.component.scss']
})
export class DouhanHistoryComponent implements OnInit {
    @Input() fromDate: string;
    @Input() toDate: string;
    @Input() castId: number;

    douhanHistory: any[];

    constructor(private customerService: CustomerService) {
    }

    ngOnInit() {
        this.douhanHistory = this.customerService.filterDouhanHistory(this.castId, this.fromDate, this.toDate);
    }

    filterDouhanHistory(formData){
        const fromDate = formData.value.fromDate;
        const toDate = formData.value.toDate;
        this.douhanHistory = this.customerService.filterDouhanHistory(this.castId, fromDate, toDate);
        console.log(this.douhanHistory);


    }



}
