import {Component, OnInit, Input} from '@angular/core';
import {CustomerService} from "../../../shared/services/customer.service";

@Component({
    selector: 'app-visit-history',
    templateUrl: './visit-history.component.html',
    styleUrls: ['./visit-history.component.scss']
})
export class VisitHistoryComponent implements OnInit {
    @Input() fromDate: string;
    @Input() toDate: string;
    @Input() castId: number;

    visitHistory: any[];
    sumTotal:number;

    constructor(private customerService: CustomerService) {
    }

    ngOnInit() {
        this.visitHistory = this.customerService.filterVisitHistory(this.castId, this.fromDate, this.toDate);
    }


    filterVisitHistory(formData) {
        const fromDate = formData.value.fromDate;
        const toDate = formData.value.toDate;
        this.visitHistory = this.customerService.filterVisitHistory(this.castId, fromDate, toDate);

        let sumTotal:number = 0;
        this.visitHistory.forEach(visitHistory => sumTotal += visitHistory.total);
        console.log(this.visitHistory);
        console.log(sumTotal);
        this.sumTotal = sumTotal;
    }

}
