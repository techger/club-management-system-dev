import {Component, OnInit, Input, ViewChild} from '@angular/core';
import {Customer} from "../../../shared/interfaces/customer";
import {CustomerService} from "../../../shared/services/customer.service";

@Component({
  selector: 'app-customer-visit-history',
  templateUrl: './customer-visit-history.component.html',
  styleUrls: ['./customer-visit-history.component.scss']
})
export class CustomerVisitHistoryComponent implements OnInit {
  @Input() customer: Customer;
  @Input() customerId: number;
  customerVisitHistoryRows: any[] = [];
  expanded: any = {};
  @ViewChild('customerVisitHistoryTable') table: any;


  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customerVisitHistoryRows = this.customerService.getVisitHistory();

  }

  openHistoryDetailModal(row){

  }

  toggleExpandRow(row) {
    console.log('Toggled Expand Row!', row);
    this.table.rowDetail.toggleExpandRow(row);
  }

  onDetailToggle(event) {
    console.log('Detail Toggled', event);
  }

}
