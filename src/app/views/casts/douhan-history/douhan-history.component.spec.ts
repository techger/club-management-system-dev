import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DouhanHistoryComponent } from './douhan-history.component';

describe('DouhanHistoryComponent', () => {
  let component: DouhanHistoryComponent;
  let fixture: ComponentFixture<DouhanHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DouhanHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DouhanHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
