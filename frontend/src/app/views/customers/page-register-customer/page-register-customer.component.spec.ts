import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRegisterCustomerComponent } from './page-register-customer.component';

describe('PageRegisterCustomerComponent', () => {
  let component: PageRegisterCustomerComponent;
  let fixture: ComponentFixture<PageRegisterCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageRegisterCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageRegisterCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
