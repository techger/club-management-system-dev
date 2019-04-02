import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CastFormComponent } from './cast-form.component';

describe('CastFormComponent', () => {
  let component: CastFormComponent;
  let fixture: ComponentFixture<CastFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CastFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CastFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
