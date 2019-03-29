import {Component, OnInit, Input} from '@angular/core';
import {CalendarAppEvent} from "../../../shared/models/calendar-event.model";

@Component({
  selector: 'app-day-task-datatable',
  templateUrl: './day-task-datatable.component.html',
  styleUrls: ['./day-task-datatable.component.scss']
})
export class DayTaskDatatableComponent implements OnInit {
  @Input() events: CalendarAppEvent[];
  constructor() { }

  ngOnInit() {
    console.log(this.events);
  }

  onSelect(event){
    console.log(event)
  }
}
