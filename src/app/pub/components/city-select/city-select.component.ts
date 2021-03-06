import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {Employee} from '../../../entity/Employee';
import {EmployeeService} from '../../../shared/service/system/employee.service';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {City} from '../../../entity/City';

@Component({
  selector: 'app-city-select',
  templateUrl: './city-select.component.html',
  styleUrls: ['./city-select.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CitySelectComponent),
    multi: true
  }]
})
export class CitySelectComponent implements OnInit {
// 默認顯示
  // 当选择的值发生变化，激发事件
  @Output() onValueChanged: EventEmitter<any> = new EventEmitter<any>();
  cityArray$: Observable<Array<City>>;
  private _CURRENTVALUE = '0'; // 市州选择 ngModel
  private onValueChangeCallBack: any = {};

  get currentValue(): string {
    return this._CURRENTVALUE;
  }

  set currentValue(value: string) {
    this._CURRENTVALUE = value;
    this.onValueChangeCallBack(value);
  }



  writeValue(obj: any): void {
    if (obj) {
      this._CURRENTVALUE = obj;
    }
  }

  registerOnChange(fn: any): void {
    this.onValueChangeCallBack = fn;
  }

  registerOnTouched(fn: any): void {
  }
  constructor() { }

  ngOnInit() {
    this.cityArray$ = null;
  }
  onValueSelected = () => {
    this.onValueChanged.emit(this._CURRENTVALUE);
  }

}
