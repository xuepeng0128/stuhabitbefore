import {Component, forwardRef, OnInit} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-habit-class-select',
  templateUrl: './habit-class-select.component.html',
  styleUrls: ['./habit-class-select.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => HabitClassSelectComponent),
    multi: true
  }]
})
export class HabitClassSelectComponent implements OnInit {

  private _currentValue : string;
  private onValueChangeCallBack: any = {};


  get currentValue(): string {
    return this._currentValue;
  }

  set currentValue(value: string) {
    this._currentValue = value;
    this.onValueChangeCallBack(value);
  }


  constructor() { }

  ngOnInit() {
  }

  writeValue(obj: any): void {
    if (obj)
    {
      this._currentValue = obj;
    }
  }

  registerOnChange(fn: any): void {
    this.onValueChangeCallBack = fn;
  }

  registerOnTouched(fn: any): void {
  }

}
