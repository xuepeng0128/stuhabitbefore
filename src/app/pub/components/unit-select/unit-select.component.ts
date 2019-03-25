import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {Observable} from 'rxjs';
import {Unit} from '../../../entity/Unit';

@Component({
  selector: 'app-unit-select',
  templateUrl: './unit-select.component.html',
  styleUrls: ['./unit-select.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => UnitSelectComponent),
    multi: true
  }]
})
export class UnitSelectComponent implements OnInit {
  @Input()  selectStyle: any = {};
  // 默認顯示
  @Input() defaultShow: string;
  // 当选择的值发生变化，激发事件
  @Output() onValueChanged: EventEmitter<any> = new EventEmitter<any>();
  private _currentValue = '0'; // 市州选择 ngModel
  private onValueChangeCallBack: any = {};

  unitArray$: Observable<Array<Unit>> = new Observable<Array<Unit>>();
  constructor() { }
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
    const cityList = ( this.store.readSessionStore('arealist') as Array<Area>) ;
    cityList.splice(0, 0, new Area('0', '0', this.defaultShow, '', '', '', '', 1));
    this.unitArray$ = of(cityList.filter(o => o.areaAttr === 1)
    );
  }
  onValueSelected = () => {
    this.onValueChanged.emit(this._currentValue);
  }
}
