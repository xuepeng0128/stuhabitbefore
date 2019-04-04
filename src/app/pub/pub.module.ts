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

import { HabitClassSelectComponent } from './components/habit-class-select/habit-class-select.component';
import { WinHabitComponent } from './components/win-habit/win-habit.component';
import { WinClassesComponent } from './components/win-classes/win-classes.component';
import {YearSelectComponent} from './components/year-select/year-select.component';
import { TeacherChooseComponent } from './components/teacher-choose/teacher-choose.component';
import {ArrayTextFilterPipe} from './pipe/array-text-filter.pipe';



@NgModule({
  declarations: [CitySelectComponent, DistrictSelectComponent, WinSchoolComponent,
    EmployeeSelectComponent, CutSizePipe, ArrayTextFilterPipe, WinEmployeeComponent, HabitClassComponent, HabitClassSelectComponent,
    WinHabitComponent, WinClassesComponent, YearSelectComponent, TeacherChooseComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgZorroAntdModule
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
    WinClassesComponent,
    YearSelectComponent,
    DistrictSelectComponent,
    EmployeeSelectComponent,
    CutSizePipe,
    ArrayTextFilterPipe
    ]
})
export class PubModule { }
