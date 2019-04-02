import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-performance-graph',
  templateUrl: './performance-graph.component.html',
  styleUrls: ['./performance-graph.component.scss']
})
export class PerformanceGraphComponent implements OnInit {
  @Input() castId:number;
  @Input() fromDate:number;
  @Input() toDate:number;

  constructor() { }

  ngOnInit() {
  }

}
