import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DicRoutingModule } from './dic-routing.module';
import { HabitTemplateComponent } from './habit-template/habit-template.component';
import { TeacherDutyComponent } from './teacher-duty/teacher-duty.component';

@NgModule({
  declarations: [HabitTemplateComponent, TeacherDutyComponent],
  imports: [
    CommonModule,
    DicRoutingModule
  ]
})
export class DicModule { }
