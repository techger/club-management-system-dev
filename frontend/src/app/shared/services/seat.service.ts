import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SeatService {

  constructor() { }

  getSeatOptions(){
    return [
      {value:1,label: 'A1'},
      {value:2,label: 'A2'},
      {value:3,label: 'A3'},
      {value:4,label: 'A4'},
      {value:5,label: 'B1'},
      {value:6,label: 'B2'},
      {value:7,label: 'B3'},
      {value:8,label: 'C1'},
      {value:9,label: 'C2'},
      // {value:{seatId:1,name:'A1'} ,label: 'A1'},
      // {value:{seatId:2,name:'A2'} ,label: 'A2'},
      // {value:{seatId:3,name:'A3'} ,label: 'A3'},
      // {value:{seatId:4,name:'A4'} ,label: 'A4'},
      // {value:{seatId:5,name:'B1'} ,label: 'B1'},
      // {value:{seatId:6,name:'B2'} ,label: 'B2'},
      // {value:{seatId:7,name:'B3'} ,label: 'B3'},
      // {value:{seatId:8,name:'C1'} ,label: 'C1'},
      // {value:{seatId:9,name:'C2'} ,label: 'C2'},
    ]
  }
}
