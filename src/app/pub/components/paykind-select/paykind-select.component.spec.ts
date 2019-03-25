import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaykindSelectComponent } from './paykind-select.component';

describe('PaykindSelectComponent', () => {
  let component: PaykindSelectComponent;
  let fixture: ComponentFixture<PaykindSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaykindSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaykindSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
