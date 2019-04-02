import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HabitTemplateComponent} from './habit-template/habit-template.component';
//import {TeacherDutyComponent} from './teacher-duty/teacher-duty.component';
import {SubjectComponent} from './subject/subject.component';

const routes: Routes = [
  { path : '' , redirectTo : 'habittemplate', pathMatch: 'full'},
  { path: 'habittemplate', component: HabitTemplateComponent },
 // { path: 'teacherduty', component: TeacherDutyComponent },
  { path: 'subject', component: SubjectComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DicRoutingModule { }
