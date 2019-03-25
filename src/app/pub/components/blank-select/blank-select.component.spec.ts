import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlankSelectComponent } from './blank-select.component';

describe('BlankSelectComponent', () => {
  let component: BlankSelectComponent;
  let fixture: ComponentFixture<BlankSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlankSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlankSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
