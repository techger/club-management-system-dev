import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Order} from "../../../shared/interfaces/order";
import {OrderService} from "../../../shared/services/order.service";

@Component({
    selector: 'app-order-list',
    templateUrl: './order-list.component.html',
    styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
    orders: Order[];

    @Output() selectedOrderEvent = new EventEmitter();

    constructor(private orderService: OrderService) {
    }

    ngOnInit() {
        this.orders = this.orderService.getOrders();
    }


    onActivate(event) {
        if (event.type == 'click') {
            this.selectedOrderEvent.emit(event.row);
        }
    }

    deleteOrder(order) {
        window.alert(`この注文を削除しますか？ ${order.item} `);
        console.log(order);
        // this.employeeService.deleteEmployee(order)
        //     .subscribe(x => {
        //             this.getEmployeeList();
        //             setTimeout(() => {
        //                 this.toastr.success(`Employee ${order.fullname} Deleted!`);
        //                 this.resetFormEvent.emit();
        //             }, 1000);
        //         },
        //         error => {
        //             console.log(error);
        //         });
    }

}
