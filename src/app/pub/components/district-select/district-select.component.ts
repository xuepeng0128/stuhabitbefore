import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {concat, Observable, of} from 'rxjs';
import {City} from '../../../entity/City';
import {DistrictService} from '../../../shared/service/baseapi/district.service';
import {District} from '../../../entity/District';

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
  private _CURRENTVALUE = '0'; // 市州选择 ngModel
  private onValueChangeCallBack: any = {};

  districtArray$: Observable<Array<{cityName: string , districts: Array<District>}>>
    = new Observable<Array<{cityName: string , districts: Array<District>}>>();
  constructor(private districtsvr: DistrictService) { }
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
  ngOnInit() {
    this.districtArray$ = this.districtsvr.cityDistrictList();
  }
  onValueSelected = () => {
    this.onValueChanged.emit(this._CURRENTVALUE);
  }

}
