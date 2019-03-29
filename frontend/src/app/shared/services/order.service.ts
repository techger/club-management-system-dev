import { Injectable } from '@angular/core';
import {Order} from "../interfaces/order";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }

  getOrders(){
    return  [
      {item: 'シャンパン', itemId: 1,  quantity: 1, price: 10000},
      {item: 'マッカラン', itemId: 2,  quantity: 2, price: 20000},
      {item: 'フルーツ盛り', itemId: 3,  quantity: 3, price: 30000},
      {item: 'シャンパン', itemId: 1,  quantity: 1, price: 10000},
      {item: 'マッカラン', itemId: 2,  quantity: 2, price: 20000},
      {item: 'フルーツ盛り', itemId: 3,  quantity: 3, price: 30000},
      {item: 'シャンパン', itemId: 1,  quantity: 1, price: 10000},
      {item: 'マッカラン', itemId: 2,  quantity: 2, price: 20000},
      {item: 'フルーツ盛り', itemId: 3,  quantity: 3, price: 30000},
      {item: 'シャンパン', itemId: 1,  quantity: 1, price: 10000},
      {item: 'マッカラン', itemId: 2,  quantity: 2, price: 20000},
      {item: 'フルーツ盛り', itemId: 3,  quantity: 3, price: 30000},
      {item: 'シャンパン', itemId: 1,  quantity: 1, price: 10000},

    ];
  }
}
