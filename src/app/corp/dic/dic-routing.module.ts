import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SchoolComponent} from '../basemsg/school/school.component';
import {StudentComponent} from '../basemsg/student/student.component';
import {TeacherComponent} from '../basemsg/teacher/teacher.component';
import {CircleComponent} from '../basemsg/circle/circle.component';
import {HabitTemplateComponent} from './habit-template/habit-template.component';
import {TeacherDutyComponent} from './teacher-duty/teacher-duty.component';

const routes: Routes = [
  { path : '' , redirectTo : 'habittemplate', pathMatch: 'full'},
  { path: 'habittemplate', component: HabitTemplateComponent },
  { path: 'teacherduty', component: TeacherDutyComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DicRoutingModule { }
