import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDetailsFormComponent } from './customer-details-form.component';

describe('CustomerDetailsFormComponent', () => {
  let component: CustomerDetailsFormComponent;
  let fixture: ComponentFixture<CustomerDetailsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerDetailsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
