import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {concat, Observable, of} from 'rxjs';
import {City} from '../../../entity/City';
import {DistrictService} from '../../../shared/service/baseapi/district.service';

@Component({
  selector: 'app-district-select',
  templateUrl: './district-select.component.html',
  styleUrls: ['./district-select.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DistrictSelectComponent),
    multi: true
  }]
})
export class DistrictSelectComponent implements OnInit {
  // 当选择的值发生变化，激发事件
  @Output() onValueChanged: EventEmitter<any> = new EventEmitter<any>();
  private _currentValue = '0'; // 市州选择 ngModel
  private onValueChangeCallBack: any = {};

  districtArray$: Observable<Array<City>> = new Observable<Array<City>>();
  constructor(private districtsvr : DistrictService) { }
  get currentValue(): string {
    return this._currentValue;
  }

  set currentValue(value: string) {
    this._currentValue = value;
    this.onValueChangeCallBack(value);
  }



  writeValue(obj: any): void {
    if (obj) {
      this._currentValue = obj;
    }
  }

  registerOnChange(fn: any): void {
    this.onValueChangeCallBack = fn;
  }

  registerOnTouched(fn: any): void {
  }
  ngOnInit() {
    this.districtArray$ = this.districtsvr.cityDistrictList();
  }
  onValueSelected = () => {
    this.onValueChanged.emit(this._currentValue);
  }

}
