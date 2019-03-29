import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpLayoutComponent } from './sp-layout.component';

describe('SpLayoutComponent', () => {
  let component: SpLayoutComponent;
  let fixture: ComponentFixture<SpLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
