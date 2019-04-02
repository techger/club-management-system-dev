import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoleStatusComponent } from './hole-status.component';

describe('HoleStatusComponent', () => {
  let component: HoleStatusComponent;
  let fixture: ComponentFixture<HoleStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoleStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoleStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
