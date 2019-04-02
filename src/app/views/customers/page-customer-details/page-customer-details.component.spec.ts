import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCustomerDetailsComponent } from './page-customer-details.component';

describe('PageCustomerDetailsComponent', () => {
  let component: PageCustomerDetailsComponent;
  let fixture: ComponentFixture<PageCustomerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageCustomerDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCustomerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
