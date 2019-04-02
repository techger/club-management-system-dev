import {Component, OnInit, ViewChild} from '@angular/core';
import {OrderListComponent} from "../order-list/order-list.component";
import {OrderFormComponent} from "../order-form/order-form.component";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
@Component({
  selector: 'app-order-modal',
  templateUrl: './order-modal.component.html',
  styleUrls: ['./order-modal.component.scss']
})
export class OrderModalComponent implements OnInit {
  @ViewChild(OrderListComponent)
  protected orderListComponent: OrderListComponent;
  @ViewChild(OrderFormComponent)
  protected orderFormComponent: OrderFormComponent;


  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  closeModal(){
    this.activeModal.close();
  }

}
