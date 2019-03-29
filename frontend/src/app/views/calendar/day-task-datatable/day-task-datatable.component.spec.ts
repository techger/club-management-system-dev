import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayTaskDatatableComponent } from './day-task-datatable.component';

describe('DayTaskDatatableComponent', () => {
  let component: DayTaskDatatableComponent;
  let fixture: ComponentFixture<DayTaskDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayTaskDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayTaskDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
