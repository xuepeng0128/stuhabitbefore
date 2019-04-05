import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DicRoutingModule } from './dic-routing.module';
import { HabitTemplateComponent } from './habit-template/habit-template.component';
import { TeacherDutyComponent } from './teacher-duty/teacher-duty.component';
import { CorpDutyComponent } from './corp-duty/corp-duty.component';
import { StudySubjectComponent } from './study-subject/study-subject.component';
import { QuestionTypeComponent } from './question-type/question-type.component';
import {PubModule} from '../../pub/pub.module';


@NgModule({
  declarations: [HabitTemplateComponent, TeacherDutyComponent, CorpDutyComponent,  StudySubjectComponent, QuestionTypeComponent],
  imports: [
    CommonModule,
    PubModule,
    DicRoutingModule
  ]
})
export class DicModule { }
