import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceGraphComponent } from './performance-graph.component';

describe('PerformanceGraphComponent', () => {
  let component: PerformanceGraphComponent;
  let fixture: ComponentFixture<PerformanceGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerformanceGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformanceGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
