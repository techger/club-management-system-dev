import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitingCustomerFormComponent } from './visiting-customer-form.component';

describe('VisitingCustomerFormComponent', () => {
  let component: VisitingCustomerFormComponent;
  let fixture: ComponentFixture<VisitingCustomerFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitingCustomerFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitingCustomerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
