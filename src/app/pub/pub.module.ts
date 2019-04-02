import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import { CitySelectComponent } from './components/city-select/city-select.component';
import { DistrictSelectComponent } from './components/district-select/district-select.component';
import {CutSizePipe} from './pipe/cutSize.pipe';
import { WinSchoolComponent } from './components/win-school/win-school.component';
import { EmployeeSelectComponent } from './components/employee-select/employee-select.component';
import { WinEmployeeComponent } from './components/win-employee/win-employee.component';
import { HabitClassComponent } from './components/habit-class/habit-class.component';
import { HabitClassSelectComponent } from './components/habit-class-select/habit-class-select.component';
import { WinHabitComponent } from './components/win-habit/win-habit.component';


@NgModule({
  declarations: [CitySelectComponent, DistrictSelectComponent, WinSchoolComponent,
    EmployeeSelectComponent, CutSizePipe, WinEmployeeComponent, HabitClassComponent, HabitClassSelectComponent, WinHabitComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgZorroAntdModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    WinSchoolComponent,
    WinEmployeeComponent,
    WinHabitComponent,
    DistrictSelectComponent,
    EmployeeSelectComponent,
    CutSizePipe,
    ]
})
export class PubModule { }
