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


@NgModule({
  declarations: [CitySelectComponent, DistrictSelectComponent, WinSchoolComponent,
    EmployeeSelectComponent, CutSizePipe],
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
    DistrictSelectComponent,
    EmployeeSelectComponent,
    CutSizePipe,
    ]
})
export class PubModule { }
