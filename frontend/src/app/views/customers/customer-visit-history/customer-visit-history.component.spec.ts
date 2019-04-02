import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerVisitHistoryComponent } from './customer-visit-history.component';

describe('CustomerVisitHistoryComponent', () => {
  let component: CustomerVisitHistoryComponent;
  let fixture: ComponentFixture<CustomerVisitHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerVisitHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerVisitHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
