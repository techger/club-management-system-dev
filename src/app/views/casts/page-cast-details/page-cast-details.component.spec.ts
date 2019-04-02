import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCastDetailsComponent } from './page-cast-details.component';

describe('PageCastDetailsComponent', () => {
  let component: PageCastDetailsComponent;
  let fixture: ComponentFixture<PageCastDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageCastDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCastDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
