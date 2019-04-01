import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SchoolComponent} from '../basemsg/school/school.component';
import {StudentComponent} from '../basemsg/student/student.component';
import {TeacherComponent} from '../basemsg/teacher/teacher.component';
import {CircleComponent} from '../basemsg/circle/circle.component';
import {EmployeeMgrComponent} from './employee-mgr/employee-mgr.component';
import {UserMgrComponent} from './user-mgr/user-mgr.component';
import {PowerMgrComponent} from './power-mgr/power-mgr.component';
import {ChangePwdComponent} from './change-pwd/change-pwd.component';
import {SchoolAdminComponent} from './school-admin/school-admin.component';

const routes: Routes = [
  { path : '' , redirectTo : 'employee', pathMatch: 'full'},
  { path: 'employee', component: EmployeeMgrComponent },
  { path: 'user', component: UserMgrComponent },
  { path: 'userPower', component: PowerMgrComponent },
  { path: 'schoolAdmin', component: SchoolAdminComponent },
  { path: 'changePwd', component: ChangePwdComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule { }
