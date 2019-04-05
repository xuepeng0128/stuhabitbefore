import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HabitTemplateComponent} from './habit-template/habit-template.component';
import {CorpDutyComponent} from './corp-duty/corp-duty.component';
import {TeacherDutyComponent} from './teacher-duty/teacher-duty.component';
import {StudySubjectComponent} from './study-subject/study-subject.component';
import {QuestionTypeComponent} from './question-type/question-type.component';


const routes: Routes = [
  { path : '' , redirectTo : 'habittemplate', pathMatch: 'full'},
  { path: 'habittemplate', component: HabitTemplateComponent },
  { path: 'corpduty', component: CorpDutyComponent },
  { path: 'teacherduty', component: TeacherDutyComponent },
  { path: 'studysubject', component: StudySubjectComponent },
  { path: 'questiontype', component: QuestionTypeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DicRoutingModule { }
