import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import { CitySelectComponent } from './components/city-select/city-select.component';
import { DistrictSelectComponent } from './components/district-select/district-select.component';


@NgModule({
  declarations: [CitySelectComponent, DistrictSelectComponent],
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
    DistrictSelectComponent
    ]
})
export class PubModule { }
