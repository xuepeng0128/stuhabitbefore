import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DutySelectComponent } from './duty-select.component';

describe('DutySelectComponent', () => {
  let component: DutySelectComponent;
  let fixture: ComponentFixture<DutySelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DutySelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DutySelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
