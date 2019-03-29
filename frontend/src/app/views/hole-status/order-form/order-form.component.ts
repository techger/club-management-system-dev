import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, FormControl} from "@angular/forms";
import {SelectItemGroup} from "primeng/components/common/selectitemgroup";
import {Order} from "../../../shared/interfaces/order";
import {ItemService} from "../../../shared/services/item.service";

@Component({
    selector: 'app-order-form',
    templateUrl: './order-form.component.html',
    styleUrls: ['./order-form.component.scss']
})

export class OrderFormComponent implements OnInit {
    orderForm: FormGroup;
    order: Order;
    itemOptions: SelectItemGroup[];
    selectedItem;

    constructor(private formBuilder: FormBuilder,
                private itemService: ItemService) {
    }

    ngOnInit() {
        this.orderForm = this.buildOrderForm(this.order);
        this.itemOptions = this.itemService.getItemGroupOptions();
    }


    buildOrderForm(order: Order = {item: null, itemId: null, quantity: 1, price: null}) {
        return new FormGroup({
            item: new FormControl(order.item),
            itemId: new FormControl(order.itemId),
            quantity: new FormControl(order.quantity),
            price: new FormControl(order.price),
        });
    }

    onSelectOrderItem(event) {
        console.log(event);
        this.selectedItem = event.value;
    }

    submitOrderForm(order) {
        console.log(order);
    }
}
