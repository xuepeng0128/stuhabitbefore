import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DicRoutingModule } from './dic-routing.module';
import { HabitTemplateComponent } from './habit-template/habit-template.component';

@NgModule({
  declarations: [HabitTemplateComponent],
  imports: [
    CommonModule,
    DicRoutingModule
  ]
})
export class DicModule { }
