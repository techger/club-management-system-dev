import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVisitingCustomerFormComponent } from './add-visiting-customer-form.component';

describe('AddVisitingCustomerFormComponent', () => {
  let component: AddVisitingCustomerFormComponent;
  let fixture: ComponentFixture<AddVisitingCustomerFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVisitingCustomerFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVisitingCustomerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
